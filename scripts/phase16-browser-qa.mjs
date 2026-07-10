import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const root = process.cwd();
const baseUrl = process.env.QA_BASE_URL || "http://localhost:3000";
const artifactDir = path.join(root, "qa-artifacts", "phase16");

const widths = [1440, 1280, 1024, 768, 430, 390, 360];
const routes = [
  "/",
  "/best",
  "/best/private-cam-sites",
  "/best/cam-sites-without-credit-card",
  "/compare",
  "/compare/livejasmin-vs-chaturbate",
  "/guides",
  "/guides/how-to-choose-a-cam-site",
  "/models",
  "/categories",
  "/categories/latina-cam-models",
  "/categories/verified-cam-models",
  "/platforms",
  "/platforms/stripchat",
  "/alternatives",
  "/features",
  "/features/no-credit-card-browsing",
  "/answers",
  "/answers/can-you-watch-cam-sites-without-signup",
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
  "/random-old-test-url-that-should-not-exist",
];

const screenshotRoutes = [
  "/",
  "/best/private-cam-sites",
  "/compare/livejasmin-vs-chaturbate",
  "/models",
  "/categories/latina-cam-models",
  "/tools/cam-site-chooser",
  "/become-a-webcam-model",
  "/about",
  "/random-old-test-url-that-should-not-exist",
];
const screenshotWidths = [1440, 1024, 768, 430, 360];

const redirectMap = new Map([
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
]);

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

const modelRoutes = [
  "/",
  "/models",
  "/categories",
  "/categories/latina-cam-models",
  "/categories/verified-cam-models",
  "/best",
  "/compare",
  "/platforms/stripchat",
  "/alternatives",
  "/become-a-webcam-model",
];

const noModelGridRoutes = [
  "/about",
  "/contact",
  "/editorial-policy",
  "/privacy-policy",
  "/terms-of-service",
  "/resources",
  "/site-map",
  "/guides",
  "/answers",
  "/features",
  "/tools",
];

const report = {
  playwrightVersion: readPackageVersion("@playwright/test"),
  viewportWidths: widths,
  routesTested: routes.length,
  totalViewportChecks: 0,
  horizontalOverflowFailures: [],
  maxOverflowDelta: 0,
  elementOverflowFailures: [],
  clippedTextCandidates: [],
  rawBlueLinks: [],
  screenshots: [],
  visualIssuesFound: [],
  visualIssuesFixed: [],
  mobileMenu: [],
  interactiveTools: {},
  modelQa: [],
  modelRemovalQa: [],
  internalLinksChecked: 0,
  internalBrokenLinks: [],
  externalFriendSites: [],
  redirects: [],
  redirectChains: [],
  gone: [],
  notFound: null,
  consoleErrors: [],
  runtimeErrors: [],
  sitemapUrlCount: 0,
  sitemapValidation: [],
  robotsValidation: [],
  canonicalValidation: [],
  schemaValidation: [],
  affiliateValidation: [],
  warnings: [],
};

async function fetchWithTimeout(url, options = {}, timeoutMs = 15000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

function readPackageVersion(name) {
  const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
  return packageJson.devDependencies?.[name] || packageJson.dependencies?.[name] || "not installed";
}

function routeToName(route) {
  return route === "/" ? "home" : route.replace(/^\/+/, "").replaceAll("/", "__");
}

function ensureArtifactDir() {
  fs.mkdirSync(artifactDir, { recursive: true });
}

function sameOriginUrl(href) {
  try {
    const url = new URL(href, baseUrl);
    return url.origin === new URL(baseUrl).origin ? url : null;
  } catch {
    return null;
  }
}

async function collectConsole(page, route) {
  page.on("console", (message) => {
    const text = message.text();
    if (message.type() === "error") {
      if (route.includes("random-old-test") && text.includes("404")) {
        report.warnings.push({ route, text: "Expected 404 console resource message on custom 404 test route" });
        return;
      }
      report.consoleErrors.push({ route, text });
    }
  });
  page.on("pageerror", (error) => {
    report.runtimeErrors.push({ route, text: error.message });
  });
}

async function inspectLayout(page, route, width) {
  const result = await page.evaluate(() => {
    const viewportWidth = window.innerWidth;
    const overflowDelta = document.documentElement.scrollWidth - viewportWidth;
    const elements = [...document.body.querySelectorAll("*")];

    function visible(element) {
      const style = window.getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
    }

    function hasHorizontalScrollAncestor(element) {
      let current = element.parentElement;
      while (current && current !== document.body) {
        const style = window.getComputedStyle(current);
        if ((style.overflowX === "auto" || style.overflowX === "scroll") && current.scrollWidth > current.clientWidth) {
          return true;
        }
        current = current.parentElement;
      }
      return false;
    }

    const overflowing = [];
    const clipped = [];
    const rawBlue = [];
    const defaultWhitePage = window.getComputedStyle(document.body).backgroundColor === "rgb(255, 255, 255)";

    for (const element of elements) {
      if (!visible(element)) continue;
      const rect = element.getBoundingClientRect();
      const tag = element.tagName.toLowerCase();
      if ((rect.right > viewportWidth + 1 || rect.left < -1) && !hasHorizontalScrollAncestor(element)) {
        overflowing.push({
          tag,
          text: (element.textContent || "").trim().slice(0, 80),
          left: Math.round(rect.left),
          right: Math.round(rect.right),
        });
      }
      if ((element.scrollWidth - element.clientWidth > 2 || element.scrollHeight - element.clientHeight > 2) && ["a", "button", "h1", "h2", "h3", "p", "span"].includes(tag)) {
        const style = window.getComputedStyle(element);
        if (style.overflow === "hidden" || style.textOverflow === "ellipsis") {
          clipped.push({ tag, text: (element.textContent || "").trim().slice(0, 80) });
        }
      }
      if (tag === "a" && window.getComputedStyle(element).color === "rgb(0, 0, 238)") {
        rawBlue.push((element.textContent || element.getAttribute("href") || "").trim().slice(0, 80));
      }
    }

    return { overflowDelta, overflowing, clipped, rawBlue, defaultWhitePage };
  });

  report.totalViewportChecks += 1;
  report.maxOverflowDelta = Math.max(report.maxOverflowDelta, result.overflowDelta);
  if (result.overflowDelta > 0) {
    report.horizontalOverflowFailures.push({ route, width, delta: result.overflowDelta });
  }
  if (result.overflowing.length) {
    report.elementOverflowFailures.push({ route, width, elements: result.overflowing.slice(0, 10) });
  }
  if (result.clipped.length) {
    report.clippedTextCandidates.push({ route, width, elements: result.clipped.slice(0, 10) });
  }
  if (result.rawBlue.length) {
    report.rawBlueLinks.push({ route, width, links: result.rawBlue.slice(0, 10) });
  }
  if (result.defaultWhitePage) {
    report.visualIssuesFound.push({ route, width, issue: "Default white body background detected" });
  }
}

async function runViewportQa(browser) {
  for (const width of widths) {
    const context = await browser.newContext({ viewport: { width, height: 1000 } });
    for (const route of routes) {
      const page = await context.newPage();
      await collectConsole(page, route);
      const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded", timeout: 20000 });
      const expected = route.includes("random-old-test") ? 404 : 200;
      if (response?.status() !== expected) {
        report.runtimeErrors.push({ route, text: `Expected ${expected}, got ${response?.status()}` });
      }
      await inspectLayout(page, route, width);
      await page.close();
    }
    await context.close();
  }
}

async function runScreenshots(browser) {
  ensureArtifactDir();
  for (const width of screenshotWidths) {
    const context = await browser.newContext({ viewport: { width, height: 1200 } });
    for (const route of screenshotRoutes) {
      const page = await context.newPage();
      await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded", timeout: 20000 });
      const file = `${width}__${routeToName(route)}.png`;
      const fullPath = path.join(artifactDir, file);
      await page.screenshot({ path: fullPath, fullPage: true });
      report.screenshots.push(fullPath);
    }
    await context.close();
  }
}

async function runMobileMenuQa(browser) {
  for (const width of [768, 430, 390, 360]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded", timeout: 20000 });
    const menu = page.locator("summary", { hasText: "Menu" });
    const menuCount = await menu.count();
    if (width >= 768) {
      report.mobileMenu.push({ width, result: "desktop/tablet nav visible; mobile summary not required" });
      await page.close();
      continue;
    }
    if (!menuCount) {
      report.mobileMenu.push({ width, result: "failed: menu summary not visible" });
      await page.close();
      continue;
    }
    await menu.first().click();
    const labels = ["Best", "Compare", "Guides", "Models", "Categories", "Resources", "Compare & Join", "Become a Model"];
    const visible = {};
    for (const label of labels) {
      visible[label] = await page.locator("details[open]").getByText(label, { exact: true }).first().isVisible().catch(() => false);
    }
    await inspectLayout(page, "/", width);
    await menu.first().click();
    const closed = !(await page.locator("details[open]").count());
    report.mobileMenu.push({ width, visible, closes: closed });
    await page.close();
  }
}

async function runToolQa(browser) {
  const page = await browser.newPage({ viewport: { width: 390, height: 1000 } });
  await collectConsole(page, "/tools/cam-site-chooser");
  await page.goto(`${baseUrl}/tools/cam-site-chooser`, { waitUntil: "domcontentloaded", timeout: 20000 });
  const initialLinks = await page.locator('section:has-text("Choose the needs") a').count();
  await page.getByLabel("I want private cam options").check();
  const privateVisible = await page.getByText("Private experience focused").first().isVisible();
  await page.getByLabel("I want free preview access").uncheck();
  const freeChecked = await page.getByLabel("I want free preview access").isChecked();
  const resultHref = await page.locator('section:has-text("Choose the needs") a').first().getAttribute("href");
  const localStorageKeys = await page.evaluate(() => Object.keys(window.localStorage));
  await inspectLayout(page, "/tools/cam-site-chooser", 390);
  report.interactiveTools.camSiteChooser = {
    initialResultLinks: initialLinks,
    selectionUpdates: privateVisible && !freeChecked,
    firstResultHref: resultHref,
    localStorageKeys,
  };
  await page.close();
}

async function runModelQa(browser) {
  const page = await browser.newPage({ viewport: { width: 430, height: 1000 } });
  for (const route of modelRoutes) {
    await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded", timeout: 20000 });
    const cards = await page.locator('a[href*="/go/model/"]').count();
    const fallback = await page.getByText("Live model previews are temporarily unavailable").count();
    const section = await page.getByText("Live preview").count();
    report.modelQa.push({ route, cards, fallback: fallback > 0, livePreviewLabels: section });
  }
  for (const route of noModelGridRoutes) {
    await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded", timeout: 20000 });
    const cards = await page.locator('a[href*="/go/model/"]').count();
    const modelLink = await page.locator('a[href="/models"]').count();
    report.modelRemovalQa.push({ route, modelCards: cards, modelsLinkPresent: modelLink > 0 });
  }
  await page.close();
}

async function runLinkCrawl(browser) {
  const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
  const sitemapXml = await sitemapResponse.text();
  const urls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  report.sitemapUrlCount = urls.length;

  const internalLinks = new Set();
  const externalLinks = new Set();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  for (const url of urls) {
    await page.goto(url.replace("https://webcamsex.me", baseUrl), { waitUntil: "domcontentloaded", timeout: 20000 });
    const hrefs = await page.locator("a[href]").evaluateAll((anchors) => anchors.map((a) => a.href));
    for (const href of hrefs) {
      const internal = sameOriginUrl(href);
      if (internal) internalLinks.add(internal.pathname + internal.search);
      else externalLinks.add(href);
    }
  }
  await page.close();

  for (const href of internalLinks) {
    if (href.startsWith("/go/")) continue;
      const response = await fetchWithTimeout(`${baseUrl}${href}`, { redirect: "manual" });
    report.internalLinksChecked += 1;
    if ([404, 410, 500].includes(response.status) || response.status >= 500) {
      report.internalBrokenLinks.push({ href, status: response.status });
    }
    if (response.status >= 300 && response.status < 400) {
      const nextLocation = response.headers.get("location");
      if (nextLocation) {
        const second = await fetchWithTimeout(new URL(nextLocation, baseUrl), { redirect: "manual" });
        if (second.status >= 300 && second.status < 400) {
          report.redirectChains.push({ href, first: response.status, second: second.status });
        }
      }
    }
    if (href.includes("localhost") || href.includes("www.webcamsex.me")) {
      report.internalBrokenLinks.push({ href, status: "bad-host-reference" });
    }
  }

  const friendSites = [
    "https://sessochat.net",
    "https://webcamsex.site",
    "https://modellewebcam.com",
    "https://livecamitalia.it",
    "https://webcamsex.co.za",
  ];
  for (const href of friendSites) {
    let reachable = false;
    let status = "request-failed";
    try {
      const response = await fetchWithTimeout(href, { redirect: "manual" }, 10000);
      status = response.status;
      reachable = response.status < 500;
    } catch (error) {
      status = error.message;
    }
    report.externalFriendSites.push({ href, reachable, status, presentInPageLinks: externalLinks.has(href) || externalLinks.has(`${href}/`) });
  }
}

async function runStatusQa() {
  for (const [source, target] of redirectMap) {
    const response = await fetchWithTimeout(`${baseUrl}${source}`, { redirect: "manual" });
    const location = response.headers.get("location") || "";
    const second = await fetchWithTimeout(new URL(location, baseUrl), { redirect: "manual" }).catch(() => null);
    report.redirects.push({ source, status: response.status, location, target, direct: location.includes(target) });
    if (second && second.status >= 300 && second.status < 400) {
      report.redirectChains.push({ href: source, first: response.status, second: second.status });
    }
  }
  for (const source of gonePaths) {
    const response = await fetchWithTimeout(`${baseUrl}${source}`, { redirect: "manual" });
    report.gone.push({ source, status: response.status });
  }
  const notFoundResponse = await fetchWithTimeout(`${baseUrl}/random-old-test-url-that-should-not-exist`, { redirect: "manual" });
  report.notFound = { source: "/random-old-test-url-that-should-not-exist", status: notFoundResponse.status };
}

async function runSeoQa(browser) {
  const sitemap = await (await fetchWithTimeout(`${baseUrl}/sitemap.xml`)).text();
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  const robots = await (await fetchWithTimeout(`${baseUrl}/robots.txt`)).text();
  report.sitemapValidation.push({ check: "no /go", passed: !sitemap.includes("/go/") });
  report.sitemapValidation.push({ check: "no friend sites", passed: !/sessochat|webcamsex\.site|modellewebcam|livecamitalia|webcamsex\.co\.za/.test(sitemap) });
  report.sitemapValidation.push({ check: "canonical hosts", passed: urls.every((url) => new URL(url).hostname === "webcamsex.me") });
  report.robotsValidation.push({ check: "allows root", passed: /Allow:\s*\//.test(robots) });
  report.robotsValidation.push({ check: "disallows go", passed: /Disallow:\s*\/go\//.test(robots) });
  report.robotsValidation.push({ check: "sitemap", passed: robots.includes("https://webcamsex.me/sitemap.xml") });

  const page = await browser.newPage();
  for (const route of ["/", "/best/private-cam-sites", "/guides", "/tools/cam-site-chooser", "/about"]) {
    await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded", timeout: 20000 });
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href").catch(() => null);
    report.canonicalValidation.push({ route, canonical, passed: Boolean(canonical && canonical.startsWith("https://webcamsex.me") && !canonical.includes("www.") && !canonical.includes("localhost")) });
    const scripts = await page.locator('script[type="application/ld+json"]').evaluateAll((nodes) => nodes.map((node) => node.textContent || ""));
    report.schemaValidation.push({
      route,
      noReviewSchema: !scripts.some((text) => /"Review"|"AggregateRating"/.test(text)),
      faqOnlyVisible: scripts.some((text) => text.includes("FAQPage")) ? await page.locator("details").count() > 0 : true,
    });
  }
  await page.close();

  const visibleFiles = ["app", "components", "lib"]
    .flatMap((dir) => walk(path.join(root, dir)))
    .filter((file) => /\.(tsx|ts)$/.test(file))
    .filter((file) => !file.includes(`${path.sep}app${path.sep}go${path.sep}`))
    .filter((file) => !file.endsWith(`${path.sep}lib${path.sep}affiliate.ts`))
    .filter((file) => !file.endsWith(`${path.sep}lib${path.sep}seo.ts`))
    .filter((file) => !file.includes(`${path.sep}lib${path.sep}livejasmin${path.sep}`))
    .map((file) => fs.readFileSync(file, "utf8"))
    .join("\n");
  report.affiliateValidation.push({ check: "no direct affiliate tokens in visible files", passed: !/ctwmsg\.com|psid=|affil28/.test(visibleFiles) });
  report.affiliateValidation.push({ check: "/go prefetch false present", passed: !/href=["']\/go\//.test(visibleFiles) || /prefetch=\{false\}/.test(visibleFiles) });
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

async function main() {
  const health = await fetchWithTimeout(baseUrl).catch(() => null);
  if (!health || health.status >= 500) {
    throw new Error(`${baseUrl} is not reachable. Start npm run start first.`);
  }

  const browser = await chromium.launch();
  try {
    await runViewportQa(browser);
    await runScreenshots(browser);
    await runMobileMenuQa(browser);
    await runToolQa(browser);
    await runModelQa(browser);
    await runLinkCrawl(browser);
    await runStatusQa();
    await runSeoQa(browser);
  } finally {
    await browser.close();
  }

  ensureArtifactDir();
  const reportPath = path.join(artifactDir, "browser-qa-report.json");
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  const hardFailures = [
    ...report.horizontalOverflowFailures,
    ...report.elementOverflowFailures,
    ...report.internalBrokenLinks,
    ...report.redirectChains,
    ...report.redirects.filter((item) => ![301, 308].includes(item.status) || !item.direct),
    ...report.gone.filter((item) => item.status !== 410),
    ...(report.notFound?.status === 404 ? [] : [report.notFound]),
    ...report.runtimeErrors,
  ].filter(Boolean);

  console.log(`Browser QA report: ${reportPath}`);
  console.log(`Screenshots: ${report.screenshots.length}`);
  console.log(`Viewport checks: ${report.totalViewportChecks}`);
  console.log(`Internal links checked: ${report.internalLinksChecked}`);
  console.log(`Max overflow delta: ${report.maxOverflowDelta}`);

  if (hardFailures.length) {
    console.error(JSON.stringify(hardFailures.slice(0, 20), null, 2));
    process.exit(1);
  }
}

await main();
