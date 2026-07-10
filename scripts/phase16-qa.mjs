import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const baseUrl = process.env.QA_BASE_URL || "http://localhost:3000";

const publicCopyFiles = ["app", "components", "lib"]
  .flatMap((dir) => walk(path.join(root, dir)))
  .filter((file) => /\.(tsx|ts)$/.test(file))
  .filter((file) => !file.includes(`${path.sep}app${path.sep}go${path.sep}`))
  .filter((file) => !file.endsWith(`${path.sep}lib${path.sep}seo.ts`))
  .filter((file) => !file.endsWith(`${path.sep}lib${path.sep}affiliate.ts`))
  .filter((file) => !file.includes(`${path.sep}lib${path.sep}livejasmin${path.sep}`));

const legacyRedirects = [
  ["/sophia-medina-sweet-sophia-athletic-latin-model", "/categories/latina-cam-models"],
  ["/katherin-cruzz-slim-colombian-webcam", "/categories/latina-cam-models"],
  ["/ebony", "/categories/ebony-cam-models"],
  ["/fitness", "/categories/fitness-cam-models"],
  ["/latina", "/categories/latina-cam-models"],
  ["/couples", "/categories/couple-cam-models"],
  ["/petite", "/categories/petite-cam-models"],
  ["/milfs", "/categories/milf-cam-models"],
  ["/asian", "/categories/asian-cam-models"],
  ["/asians", "/categories/asian-cam-models"],
  ["/blog", "/guides"],
  ["/br", "/categories/brazilian-cam-models"],
];

const gonePaths = [
  "/canela-canelasungirl-bio-cam-review",
  "/ashley-ashleysinnx-bio-cam-review",
  "/free-webcam-sex-with-chloe",
  "/bbw",
  "/feet",
  "/gay",
  "/trans",
  "/teens",
  "/elementor-448",
  "/comments/feed",
];

const forbiddenCopy = [
  /Phase\s+(?:1[0-6]|[1-9])/i,
  /internal redirect/i,
  /affiliate handling/i,
  /centralized affiliate/i,
  /direct affiliate URL/i,
  /Review schema/i,
  /AggregateRating schema/i,
  /feed logic/i,
  /feed fallback/i,
  /safe fallback/i,
  /best available feed/i,
  /fake personalization/i,
  /fake ratings/i,
  /no fake ratings/i,
  /fake model/i,
  /no fake model/i,
  /technical filter/i,
  /provider feed/i,
  /SEO-safe/i,
  /SEO rules/i,
  /Google-safe wording/i,
  /route handler/i,
];

const failures = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function assert(condition, message) {
  if (!condition) failures.push(message);
}

function read(relPath) {
  return fs.readFileSync(path.join(root, relPath), "utf8");
}

for (const file of publicCopyFiles) {
  const text = fs.readFileSync(file, "utf8");
  for (const pattern of forbiddenCopy) {
    assert(!pattern.test(text), `${path.relative(root, file)} contains ${pattern}`);
  }
}

const sitemapSource = read("app/sitemap.ts");
assert(!sitemapSource.includes("/go/"), "sitemap source includes /go/");
for (const [source] of legacyRedirects) {
  assert(!sitemapSource.includes(`path: "${source}"`), `sitemap includes legacy source ${source}`);
}
for (const source of gonePaths) {
  assert(!sitemapSource.includes(`path: "${source}"`), `sitemap includes 410 source ${source}`);
}
assert(!sitemapSource.includes("www."), "sitemap source includes www");
assert(!sitemapSource.includes("localhost"), "sitemap source includes localhost");

const footerSource = read("components/site/Footer.tsx");
for (const friend of [
  "https://sessochat.net",
  "https://webcamsex.site",
  "https://modellewebcam.com",
  "https://livecamitalia.it",
  "https://webcamsex.co.za",
]) {
  assert(footerSource.includes(friend), `footer missing ${friend}`);
}
assert(footerSource.includes('target="_blank"'), "friend sites missing target blank");
assert(footerSource.includes('rel="noopener noreferrer nofollow"'), "friend sites missing rel");

const affiliateSource = read("lib/affiliate.ts");
const visibleSource = publicCopyFiles.map((file) => fs.readFileSync(file, "utf8")).join("\n");
for (const token of ["ctwmsg.com", "psid=", "affil28"]) {
  assert(!visibleSource.includes(token), `visible source contains direct affiliate token ${token}`);
}

async function checkServer() {
  let sitemapResponse;
  try {
    sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
  } catch {
    console.log(`Server checks skipped: ${baseUrl} is not reachable.`);
    return;
  }

  assert(sitemapResponse.status === 200, "sitemap.xml did not return 200");
  const sitemapXml = await sitemapResponse.text();
  const urls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert(urls.length > 0, "sitemap has no URLs");
  for (const url of urls) {
    const parsedUrl = new URL(url);
    assert(parsedUrl.hostname === "webcamsex.me", `sitemap URL is not canonical host: ${url}`);
    assert(!parsedUrl.pathname.startsWith("/go/"), `sitemap contains /go URL: ${url}`);
    assert(!gonePaths.includes(parsedUrl.pathname), `sitemap contains 410 URL: ${url}`);
    assert(!legacyRedirects.some(([source]) => source === parsedUrl.pathname), `sitemap contains legacy source URL: ${url}`);
  }

  for (const url of urls) {
    const response = await fetch(url, { redirect: "manual" });
    assert(response.status === 200, `${url} returned ${response.status}`);
  }

  for (const [source, destination] of legacyRedirects) {
    const response = await fetch(`${baseUrl}${source}`, { redirect: "manual" });
    assert([301, 308].includes(response.status), `${source} did not return permanent redirect`);
    assert(response.headers.get("location")?.includes(destination), `${source} did not redirect to ${destination}`);
  }

  for (const source of gonePaths) {
    const response = await fetch(`${baseUrl}${source}`, { redirect: "manual" });
    assert(response.status === 410, `${source} did not return 410`);
  }

  const unknown = await fetch(`${baseUrl}/phase-16-random-missing-url`, { redirect: "manual" });
  assert(unknown.status === 404, "random unknown URL did not return 404");

  console.log(`Sitemap URL count: ${urls.length}`);
  await checkViewports();
}

async function checkViewports() {
  let chromium;
  try {
    ({ chromium } = await import("playwright"));
  } catch {
    console.log("Viewport checks skipped: Playwright is not installed.");
    return;
  }

  const widths = [1440, 1280, 1024, 768, 430, 390, 360];
  const routes = [
    "/",
    "/best",
    "/best/private-cam-sites",
    "/best/cam-sites-without-credit-card",
    "/compare",
    "/compare/private-cam-sites-vs-free-cam-sites",
    "/guides",
    "/models",
    "/categories",
    "/categories/latina-cam-models",
    "/categories/verified-cam-models",
    "/platforms",
    "/platforms/stripchat",
    "/alternatives",
    "/features",
    "/answers",
    "/tools",
    "/tools/cam-site-chooser",
    "/resources",
    "/site-map",
    "/become-a-webcam-model",
    "/about",
    "/contact",
    "/editorial-policy",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const browser = await chromium.launch();
  try {
    for (const width of widths) {
      const page = await browser.newPage({ viewport: { width, height: 1000 } });
      for (const route of routes) {
        await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        assert(overflow <= 1, `${route} overflows horizontally by ${overflow}px at ${width}px`);
      }
      await page.close();
    }
  } finally {
    await browser.close();
  }
}

await checkServer();

if (failures.length) {
  console.error("Phase 16 QA failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Phase 16 QA passed.");
