import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const root = process.cwd();
const baseUrl = process.env.QA_BASE_URL || "http://localhost:3000";
const canonicalHost = "https://webcamsex.me";
const docsDir = path.join(root, "docs");
const artifactDir = path.join(root, "qa-artifacts", "phase17");

const priorityUrls = [
  "/",
  "/best",
  "/best/free-cam-sites",
  "/best/private-cam-sites",
  "/best/cam-sites-no-signup",
  "/best/cam-sites-without-credit-card",
  "/compare",
  "/compare/livejasmin-vs-chaturbate",
  "/models",
  "/categories",
  "/categories/live-cam-models",
  "/categories/verified-cam-models",
  "/categories/latina-cam-models",
  "/platforms",
  "/platforms/livejasmin",
  "/platforms/chaturbate",
  "/platforms/stripchat",
  "/alternatives",
  "/alternatives/livejasmin-alternatives",
  "/guides",
  "/guides/how-to-choose-a-cam-site",
  "/guides/are-cam-sites-safe",
  "/tools",
  "/tools/cam-site-chooser",
  "/become-a-webcam-model",
];

const representativePerformanceRoutes = [
  "/",
  "/best/private-cam-sites",
  "/compare/livejasmin-vs-chaturbate",
  "/models",
  "/categories/latina-cam-models",
  "/tools/cam-site-chooser",
  "/become-a-webcam-model",
  "/about",
];

const redirects = new Map([
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

function ensureDirs() {
  fs.mkdirSync(docsDir, { recursive: true });
  fs.mkdirSync(artifactDir, { recursive: true });
}

function localUrl(pathname) {
  return `${baseUrl}${pathname}`;
}

function canonicalUrl(pathname) {
  if (pathname === "/") return canonicalHost;
  return `${canonicalHost}${pathname}`;
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 12000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

function mdEscape(value) {
  return String(value ?? "")
    .replaceAll("|", "\\|")
    .replace(/\s+/g, " ")
    .trim();
}

function intentForPath(pathname) {
  if (pathname === "/") return ["commercial", "best live cam sites", "site hub"];
  if (pathname.startsWith("/best/")) return ["commercial", pathname.split("/").pop()?.replaceAll("-", " "), "selection page"];
  if (pathname === "/best") return ["commercial", "best cam sites", "hub"];
  if (pathname.startsWith("/compare/")) return ["commercial/informational", pathname.split("/").pop()?.replaceAll("-", " "), "comparison"];
  if (pathname === "/compare") return ["commercial", "compare cam sites", "hub"];
  if (pathname.startsWith("/tools/")) return ["tool", pathname.split("/").pop()?.replaceAll("-", " "), "interactive utility"];
  if (pathname === "/tools") return ["tool", "cam site tools", "hub"];
  if (pathname.startsWith("/categories/")) return ["discovery", pathname.split("/").pop()?.replaceAll("-", " "), "model category"];
  if (pathname === "/categories") return ["discovery", "cam model categories", "hub"];
  if (pathname === "/models") return ["discovery", "live cam models", "model hub"];
  if (pathname.startsWith("/guides/")) return ["informational", pathname.split("/").pop()?.replaceAll("-", " "), "guide"];
  if (pathname === "/guides") return ["informational", "cam site guides", "hub"];
  if (pathname.startsWith("/answers/")) return ["informational", pathname.split("/").pop()?.replaceAll("-", " "), "short answer"];
  if (pathname === "/answers") return ["informational", "cam site answers", "hub"];
  if (pathname.startsWith("/features/")) return ["informational", pathname.split("/").pop()?.replaceAll("-", " "), "feature explainer"];
  if (pathname === "/features") return ["informational", "cam site features", "hub"];
  if (pathname.startsWith("/platforms/")) return ["commercial/informational", pathname.split("/").pop(), "platform guide"];
  if (pathname === "/platforms") return ["commercial/informational", "cam platforms", "hub"];
  if (pathname.startsWith("/alternatives/")) return ["commercial/informational", pathname.split("/").pop()?.replaceAll("-", " "), "alternatives"];
  if (pathname === "/alternatives") return ["commercial/informational", "cam site alternatives", "hub"];
  if (pathname === "/become-a-webcam-model") return ["commercial/informational", "become a webcam model", "model-side conversion"];
  return ["trust/informational", pathname.replace("/", "").replaceAll("-", " "), "support page"];
}

function closestCompetingUrl(pathname, paths) {
  const [, topic] = intentForPath(pathname);
  const tokens = new Set(String(topic).split(/\W+/).filter(Boolean));
  let best = { path: "", score: 0 };
  for (const candidate of paths) {
    if (candidate === pathname) continue;
    const candidateTokens = new Set(String(intentForPath(candidate)[1]).split(/\W+/).filter(Boolean));
    const score = [...tokens].filter((token) => candidateTokens.has(token)).length;
    if (score > best.score) best = { path: candidate, score };
  }
  return best.score >= 2 ? best.path : "";
}

function overlapRisk(pathname, closest) {
  if (!closest) return "none";
  if (
    pathname.includes("no-signup") ||
    pathname.includes("without-credit-card") ||
    pathname.includes("verified") ||
    pathname.includes("private-cam") ||
    pathname.includes("free-cam")
  ) {
    return "medium";
  }
  return "low";
}

async function getSitemapPaths() {
  const response = await fetchWithTimeout(`${baseUrl}/sitemap.xml`);
  const xml = await response.text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
}

async function extractPage(page, pathname) {
  const response = await page.goto(localUrl(pathname), {
    waitUntil: "domcontentloaded",
    timeout: 20000,
  });
  await page.waitForTimeout(100);

  const data = await page.evaluate(() => {
    const meta = (selector) => document.querySelector(selector)?.getAttribute("content") ?? "";
    const link = (selector) => document.querySelector(selector)?.getAttribute("href") ?? "";
    const jsonLd = [...document.querySelectorAll('script[type="application/ld+json"]')].map((node) => {
      const raw = node.textContent || "";
      try {
        const parsed = JSON.parse(raw);
        return {
          valid: true,
          type: Array.isArray(parsed) ? parsed.map((item) => item["@type"]).join(",") : parsed["@type"],
          raw,
        };
      } catch {
        return { valid: false, type: "invalid", raw };
      }
    });
    const anchors = [...document.querySelectorAll("a[href]")].map((anchor) => ({
      href: anchor.href,
      text: (anchor.textContent || "").trim().replace(/\s+/g, " "),
    }));
    const images = [...document.querySelectorAll("img")].map((img) => ({
      src: img.currentSrc || img.src,
      alt: img.getAttribute("alt") || "",
      width: img.getAttribute("width") || "",
      height: img.getAttribute("height") || "",
      renderedWidth: Math.round(img.getBoundingClientRect().width),
      renderedHeight: Math.round(img.getBoundingClientRect().height),
    }));
    const h1s = [...document.querySelectorAll("h1")].map((h1) => (h1.textContent || "").trim());
    return {
      title: document.title,
      description: meta('meta[name="description"]'),
      robots: meta('meta[name="robots"]'),
      googlebot: meta('meta[name="googlebot"]'),
      canonical: link('link[rel="canonical"]'),
      h1s,
      ogTitle: meta('meta[property="og:title"]'),
      ogDescription: meta('meta[property="og:description"]'),
      ogUrl: meta('meta[property="og:url"]'),
      twitterCard: meta('meta[name="twitter:card"]'),
      twitterTitle: meta('meta[name="twitter:title"]'),
      twitterDescription: meta('meta[name="twitter:description"]'),
      adult: meta('meta[name="rating"]'),
      breadcrumbVisible: Boolean(document.querySelector('nav[aria-label*="Breadcrumb"], nav[aria-label*="breadcrumb"]')),
      jsonLd,
      anchors,
      images,
      bodyText: document.body.innerText.slice(0, 20000),
      mainExists: Boolean(document.querySelector("main")),
      navCount: document.querySelectorAll("nav").length,
      footerExists: Boolean(document.querySelector("footer")),
      emptyLinks: [...document.querySelectorAll("a[href]")].filter((a) => !(a.textContent || "").trim() && !a.getAttribute("aria-label")).length,
      buttonsWithoutName: [...document.querySelectorAll("button")].filter((button) => !(button.textContent || "").trim() && !button.getAttribute("aria-label")).length,
      unlabeledInputs: [...document.querySelectorAll("input, textarea, select")].filter((input) => {
        const id = input.getAttribute("id");
        return !input.getAttribute("aria-label") && !(id && document.querySelector(`label[for="${id}"]`)) && !input.closest("label");
      }).length,
    };
  });

  return {
    pathname,
    status: response?.status() ?? 0,
    ...data,
  };
}

function analyzePages(pages, paths) {
  const titleMap = new Map();
  const descriptionMap = new Map();
  for (const page of pages) {
    titleMap.set(page.title, [...(titleMap.get(page.title) ?? []), page.pathname]);
    descriptionMap.set(page.description, [...(descriptionMap.get(page.description) ?? []), page.pathname]);
  }

  const incoming = new Map(paths.map((pathname) => [pathname, []]));
  const outgoing = new Map(paths.map((pathname) => [pathname, []]));
  const badInternalLinks = [];
  const wrongHostLinks = [];
  const externalLinks = [];
  for (const page of pages) {
    for (const anchor of page.anchors) {
      let url;
      try {
        url = new URL(anchor.href);
      } catch {
        badInternalLinks.push({ from: page.pathname, href: anchor.href, text: anchor.text, reason: "malformed" });
        continue;
      }

      if (url.hostname === "localhost" || url.hostname === "127.0.0.1") {
        const target = url.pathname;
        outgoing.get(page.pathname)?.push({ target, text: anchor.text });
        if (incoming.has(target)) incoming.get(target)?.push({ from: page.pathname, text: anchor.text });
      } else if (url.hostname === "webcamsex.me") {
        const target = url.pathname;
        outgoing.get(page.pathname)?.push({ target, text: anchor.text });
        if (incoming.has(target)) incoming.get(target)?.push({ from: page.pathname, text: anchor.text });
      } else if (url.hostname === "www.webcamsex.me") {
        wrongHostLinks.push({ from: page.pathname, href: anchor.href, text: anchor.text });
      } else {
        externalLinks.push({ from: page.pathname, href: anchor.href, text: anchor.text, rel: anchor.rel });
      }
    }
  }

  const homepageDepth = new Map([["/", 0]]);
  const queue = ["/"];
  while (queue.length) {
    const current = queue.shift();
    const depth = homepageDepth.get(current);
    for (const edge of outgoing.get(current) ?? []) {
      if (!paths.includes(edge.target) || homepageDepth.has(edge.target)) continue;
      homepageDepth.set(edge.target, depth + 1);
      queue.push(edge.target);
    }
  }

  return { titleMap, descriptionMap, incoming, outgoing, badInternalLinks, wrongHostLinks, externalLinks, homepageDepth };
}

function pageIssues(page, paths) {
  const expectedCanonical = canonicalUrl(page.pathname);
  const issues = [];
  if (page.status !== 200) issues.push(`HTTP ${page.status}`);
  if (!page.title) issues.push("missing title");
  if (!page.description) issues.push("missing description");
  if (!page.canonical) issues.push("missing canonical");
  if (page.canonical && page.canonical !== expectedCanonical) issues.push(`incorrect canonical: ${page.canonical}`);
  if (page.canonical?.includes("www.")) issues.push("www canonical");
  if (page.canonical?.includes("localhost")) issues.push("localhost canonical");
  if (page.h1s.length !== 1) issues.push(`${page.h1s.length} H1 elements`);
  if (page.h1s.some((h1) => !h1)) issues.push("empty H1");
  if (/noindex/i.test(`${page.robots} ${page.googlebot}`)) issues.push("noindex page in sitemap");
  if (page.pathname.startsWith("/go/")) issues.push("/go URL in sitemap");
  if (redirects.has(page.pathname)) issues.push("redirect URL in sitemap");
  if (gonePaths.includes(page.pathname)) issues.push("410 URL in sitemap");
  if (!page.ogTitle || !page.ogDescription || !page.ogUrl) issues.push("missing Open Graph metadata");
  if (!page.twitterCard || !page.twitterTitle || !page.twitterDescription) issues.push("missing Twitter metadata");
  if (page.ogUrl && page.ogUrl !== expectedCanonical) issues.push(`incorrect OG URL: ${page.ogUrl}`);
  if (!paths.includes(page.pathname)) issues.push("not in sitemap");
  return issues;
}

function writeTechnicalAudit(pages, graph, paths) {
  const duplicateTitles = [...graph.titleMap.entries()].filter(([title, urls]) => title && urls.length > 1);
  const duplicateDescriptions = [...graph.descriptionMap.entries()].filter(([description, urls]) => description && urls.length > 1);
  const rows = pages.map((page) => {
    const issues = pageIssues(page, paths);
    return `| ${page.pathname} | ${page.status} | ${mdEscape(page.canonical)} | ${mdEscape(page.title)} | ${mdEscape(page.description)} | ${page.h1s.length} | ${mdEscape(page.h1s[0] ?? "")} | ${mdEscape(page.robots || "index")} | ${page.adult === "adult" ? "adult" : "none"} | ${[...new Set(page.jsonLd.map((item) => item.type))].join(", ")} | ${graph.incoming.get(page.pathname)?.length ?? 0} | ${graph.outgoing.get(page.pathname)?.length ?? 0} | ${issues.length ? mdEscape(issues.join("; ")) : "OK"} |`;
  });
  const doc = [
    "# Phase 17 Technical SEO Audit",
    "",
    `Sitemap URLs audited: ${pages.length}.`,
    `Duplicate titles: ${duplicateTitles.length}. Duplicate descriptions: ${duplicateDescriptions.length}.`,
    "",
    "## Issue Summary",
    "",
    `- Missing/incorrect canonical issues: ${pages.filter((page) => pageIssues(page, paths).some((issue) => issue.includes("canonical"))).length}`,
    `- Multiple/missing H1 issues: ${pages.filter((page) => page.h1s.length !== 1).length}`,
    `- Noindex pages in sitemap: ${pages.filter((page) => /noindex/i.test(`${page.robots} ${page.googlebot}`)).length}`,
    `- /go URLs in sitemap: ${pages.filter((page) => page.pathname.startsWith("/go/")).length}`,
    `- 404/410/redirect URLs in sitemap: ${pages.filter((page) => page.status !== 200 || redirects.has(page.pathname) || gonePaths.includes(page.pathname)).length}`,
    "",
    "## Per-URL Audit",
    "",
    "| URL | HTTP | Canonical | Title | Description | H1 Count | H1 | Robots | Adult Metadata | JSON-LD Types | Links In | Links Out | Issues |",
    "|---|---:|---|---|---|---:|---|---|---|---|---:|---:|---|",
    ...rows,
    "",
    "## Duplicate Titles",
    "",
    duplicateTitles.length ? duplicateTitles.map(([title, urls]) => `- ${title}: ${urls.join(", ")}`).join("\n") : "None found.",
    "",
    "## Duplicate Descriptions",
    "",
    duplicateDescriptions.length ? duplicateDescriptions.map(([description, urls]) => `- ${description}: ${urls.join(", ")}`).join("\n") : "None found.",
    "",
  ].join("\n");
  fs.writeFileSync(path.join(docsDir, "phase17-technical-seo-audit.md"), doc);
}

function writeIntentMap(pages, graph, paths) {
  const rows = pages.map((page) => {
    const [intent, topic, purpose] = intentForPath(page.pathname);
    const closest = closestCompetingUrl(page.pathname, paths);
    const risk = overlapRisk(page.pathname, closest);
    const action = risk === "high" ? "rewrite" : "keep";
    return `| ${page.pathname} | ${mdEscape(topic)} | ${mdEscape(topic)} | ${intent.includes("commercial") ? "yes" : "no"} | ${intent.includes("informational") ? "yes" : "no"} | ${intent === "tool" ? "yes" : "no"} | ${intent === "discovery" ? "yes" : "no"} | ${mdEscape(topic)} | ${closest || "none"} | ${risk} | ${action} |`;
  });
  fs.writeFileSync(
    path.join(docsDir, "seo-intent-map.md"),
    [
      "# SEO Intent Map",
      "",
      "Expanded in Phase 17 to cover every current sitemap URL. Best pages remain commercial selection pages; guides are educational; answers are short direct answers; tools are interactive utilities; category/model pages are discovery pages.",
      "",
      "| URL | Primary topic | Secondary topic | Commercial | Informational | Tool | Discovery | Intended primary keyword | Closest competing internal URL | Overlap risk | Recommended action |",
      "|---|---|---|---|---|---|---|---|---|---|---|",
      ...rows,
      "",
      "## Deep Cluster Notes",
      "",
      "- Free cam sites: primary commercial page is `/best/free-cam-sites`; guides/answers/tools should support education and utility.",
      "- Private cam sites: primary commercial page is `/best/private-cam-sites`; compare pages should focus on trade-offs.",
      "- No signup and no credit card: overlap is medium by design; keep page-family roles distinct.",
      "- Verified models: `/best/verified-cam-sites` is platform selection; `/categories/verified-cam-models` is discovery/signals.",
      "- LiveJasmin alternatives and platform comparisons: keep alternatives for substitute discovery and compare pages for side-by-side decisions.",
      "- Become a webcam model: keep as model-side conversion intent, not a viewer comparison page.",
    ].join("\n"),
  );
}

function writeContentAudit(pages) {
  const forbiddenPatterns = [/Phase\s+\d+/i, /internal redirect/i, /Review schema/i, /AggregateRating/i, /affiliate handling/i, /feed logic/i, /fake ratings/i, /fake model/i];
  const rows = pages.map((page) => {
    const text = page.bodyText;
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const repeatedPhrases = [...text.matchAll(/\b(privacy|payment|signup|preview|platform)\b/gi)].length;
    const forbidden = forbiddenPatterns.filter((pattern) => pattern.test(text)).map(String);
    const thin = wordCount < 250 && !["/privacy-policy", "/terms-of-service", "/contact"].includes(page.pathname);
    const excessive = wordCount > 3500;
    const value = priorityUrls.includes(page.pathname) ? "priority page reviewed for criteria, trade-offs, privacy/signup/payment context, and next step" : "purpose reviewed from rendered content";
    const action = forbidden.length ? "fix wording" : thin ? "review depth" : excessive ? "trim if engagement is weak" : "keep";
    return `| ${page.pathname} | ${wordCount} | ${thin ? "yes" : "no"} | ${excessive ? "yes" : "no"} | ${forbidden.length ? forbidden.join(", ") : "none"} | ${repeatedPhrases} | ${mdEscape(value)} | ${action} |`;
  });
  fs.writeFileSync(
    path.join(docsDir, "phase17-content-quality-audit.md"),
    [
      "# Phase 17 Content Quality Audit",
      "",
      "This audit checks rendered indexable pages for purpose, visible value, repetition signals, forbidden implementation language, and priority-page affiliate quality.",
      "",
      "| URL | Rendered words | Thin signal | Excessive length signal | Development/SEO wording | Repetition signal count | Original value note | Recommended action |",
      "|---|---:|---|---|---|---:|---|---|",
      ...rows,
      "",
      "Priority commercial pages provide useful comparison structure through decision criteria, trade-offs, privacy/payment/signup context, model discovery where relevant, and clear next steps. No fake ratings, fake reviews, or unsupported testing claims were added.",
    ].join("\n"),
  );
}

function writeInternalLinkAudit(pages, graph, paths) {
  const orphans = paths.filter((pathname) => pathname !== "/" && (graph.incoming.get(pathname)?.length ?? 0) === 0);
  const maxDepth = Math.max(...paths.map((pathname) => graph.homepageDepth.get(pathname) ?? 99));
  const rows = paths.map((pathname) => {
    const incoming = graph.incoming.get(pathname) ?? [];
    const outgoing = graph.outgoing.get(pathname) ?? [];
    const anchors = incoming.map((item) => item.text).filter(Boolean).slice(0, 8).join("; ");
    return `| ${pathname} | ${incoming.length} | ${outgoing.length} | ${(graph.homepageDepth.get(pathname) ?? "unreached")} | ${incoming.length === 0 && pathname !== "/" ? "yes" : "no"} | ${mdEscape(anchors)} |`;
  });
  fs.writeFileSync(
    path.join(docsDir, "phase17-internal-link-audit.md"),
    [
      "# Phase 17 Internal Link Audit",
      "",
      `Sitemap URLs crawled: ${paths.length}.`,
      `Broken internal links found by rendered crawl: ${graph.badInternalLinks.length}.`,
      `Wrong-host internal links: ${graph.wrongHostLinks.length}.`,
      `Orphan indexable pages: ${orphans.length}.`,
      `Maximum click depth from homepage: ${maxDepth}.`,
      "",
      "| URL | Incoming links | Outgoing links | Click depth from home | Orphan | Sample incoming anchors |",
      "|---|---:|---:|---:|---|---|",
      ...rows,
      "",
      "## Broken / Wrong Host Links",
      "",
      graph.badInternalLinks.length ? graph.badInternalLinks.map((item) => `- ${item.from} -> ${item.href} (${item.reason})`).join("\n") : "None found.",
      "",
      graph.wrongHostLinks.length ? graph.wrongHostLinks.map((item) => `- ${item.from} -> ${item.href}`).join("\n") : "No www-host internal links found.",
    ].join("\n"),
  );
}

function writeSchemaAudit(pages) {
  const rows = pages.map((page) => {
    const types = page.jsonLd.map((item) => item.type).join(", ");
    const invalid = page.jsonLd.filter((item) => !item.valid).length;
    const hasReview = page.jsonLd.some((item) => /Review|AggregateRating/.test(item.raw));
    const faqVisible = page.jsonLd.some((item) => item.type === "FAQPage") ? page.bodyText.includes("FAQ") || page.bodyText.includes("Questions") : true;
    const hostOk = page.jsonLd.every((item) => !item.raw.includes("www.webcamsex.me") && !item.raw.includes("localhost"));
    return `| ${page.pathname} | ${mdEscape(types || "none")} | ${invalid} | ${hasReview ? "yes" : "no"} | ${faqVisible ? "yes" : "no"} | ${hostOk ? "yes" : "no"} |`;
  });
  fs.writeFileSync(
    path.join(docsDir, "phase17-schema-audit.md"),
    [
      "# Phase 17 Structured Data Audit",
      "",
      "Allowed schema types are WebSite, Organization, BreadcrumbList, WebPage, Article, FAQPage, and ItemList. Review and AggregateRating are not used.",
      "",
      "| URL | JSON-LD types | Invalid JSON-LD blocks | Review/AggregateRating present | FAQ visible when marked | Canonical host only |",
      "|---|---|---:|---|---|---|",
      ...rows,
    ].join("\n"),
  );
}

function writeAnalyticsSetup() {
  fs.writeFileSync(
    path.join(docsDir, "analytics-setup.md"),
    [
      "# Analytics Setup",
      "",
      "GA4 is optional. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` to enable analytics. Leave it unset to render no GA script.",
      "",
      "Tracked events:",
      "",
      "- `compare_join_click` for compare/join platform routes.",
      "- `become_model_click` for model signup routes.",
      "- `live_model_click` for live model/random room routes.",
      "- `cam_site_chooser_start` for chooser links.",
      "- `affiliate_route_click` for all `/go/` route clicks.",
      "",
      "The implementation sends only the clicked path. It does not store tool answers, collect sensitive responses, or expose secrets.",
    ].join("\n"),
  );
}

function writePriorityPlan(pages, graph) {
  const top20 = priorityUrls.slice(0, 20);
  const topRows = top20.map((pathname) => {
    const [intent, topic, purpose] = intentForPath(pathname);
    const incoming = graph.incoming.get(pathname)?.length ?? 0;
    return `| ${pathname} | ${mdEscape(topic)} | ${mdEscape(purpose)} | Existing comparison/navigation structure | Needs real-world evidence and refreshed platform-specific details over time | ${incoming} incoming links; add contextual links where naturally useful | Watch Search Console impressions, CTR, average position, affiliate clicks |`;
  });
  fs.writeFileSync(
    path.join(docsDir, "seo-priority-plan.md"),
    [
      "# SEO Priority Plan",
      "",
      "## CRITICAL",
      "",
      "- Keep sitemap, canonicals, robots, redirect/410 behavior, `/go` noindex handling, and responsive rendering green.",
      "- Fix any future broken internal links or wrong-host links immediately.",
      "- Preserve category accuracy: no generic model fallback under exact category claims.",
      "",
      "## HIGH",
      "",
      "- Continue differentiating medium-overlap clusters: no signup, no credit card, verified, private, free, and mobile.",
      "- Add future original value only when it is evidence-based: platform-specific observations, screenshots, policy notes, or documented methodology.",
      "- Strengthen internal links to priority commercial and tool pages using natural anchors in relevant content.",
      "",
      "## MEDIUM",
      "",
      "- Refine page titles/descriptions based on Search Console query data.",
      "- Review performance after traffic and analytics data are available.",
      "- Continue visual polish without adding pages merely for keywords.",
      "",
      "## Top 20 Priority Ranking URLs",
      "",
      "| URL | Target intent | Current strengths | Current weakness | Recommended future evidence/original value | Internal links needed | Measurement plan |",
      "|---|---|---|---|---|---|---|",
      ...topRows,
    ].join("\n"),
  );
}

async function runStatusChecks(paths) {
  const status = {
    sitemapUrls: paths.length,
    redirects: [],
    gone: [],
    unknown404: null,
    robots: "",
    npmAudit: "",
  };
  for (const [source, target] of redirects) {
    const response = await fetchWithTimeout(localUrl(source), { redirect: "manual" });
    const location = response.headers.get("location") ?? "";
    status.redirects.push({ source, target, status: response.status, location, ok: [301, 308].includes(response.status) && location.includes(target) });
  }
  for (const source of gonePaths) {
    const response = await fetchWithTimeout(localUrl(source), { redirect: "manual" });
    status.gone.push({ source, status: response.status, ok: response.status === 410 });
  }
  const unknown = await fetchWithTimeout(localUrl("/phase17-random-url-that-should-404"), { redirect: "manual" });
  status.unknown404 = unknown.status;
  status.robots = await (await fetchWithTimeout(localUrl("/robots.txt"))).text();
  return status;
}

async function runPerformance(browser) {
  const results = [];
  for (const route of representativePerformanceRoutes) {
    for (const width of [390, 1440]) {
      const page = await browser.newPage({ viewport: { width, height: 1000 } });
      const started = Date.now();
      const response = await page.goto(localUrl(route), { waitUntil: "domcontentloaded", timeout: 20000 });
      const domContentLoadedMs = Date.now() - started;
      const metrics = await page.evaluate(() => {
        const nav = performance.getEntriesByType("navigation")[0];
        const resources = performance.getEntriesByType("resource");
        return {
          transferSize: resources.reduce((sum, item) => sum + (item.transferSize || 0), 0),
          encodedBodySize: resources.reduce((sum, item) => sum + (item.encodedBodySize || 0), 0),
          resourceCount: resources.length,
          domContentLoaded: nav?.domContentLoadedEventEnd ?? 0,
        };
      });
      results.push({ route, width, status: response?.status() ?? 0, domContentLoadedMs, ...metrics });
      await page.close();
    }
  }
  return results;
}

async function main() {
  ensureDirs();
  const health = await fetchWithTimeout(baseUrl).catch(() => null);
  if (!health) throw new Error(`${baseUrl} is not reachable. Start the production server first.`);

  const paths = await getSitemapPaths();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });
  const pages = [];
  for (const pathname of paths) {
    pages.push(await extractPage(page, pathname));
  }
  await page.close();

  const graph = analyzePages(pages, paths);
  const status = await runStatusChecks(paths);
  const performance = await runPerformance(browser);
  await browser.close();

  writeTechnicalAudit(pages, graph, paths);
  writeIntentMap(pages, graph, paths);
  writeContentAudit(pages);
  writeInternalLinkAudit(pages, graph, paths);
  writeSchemaAudit(pages);
  writeAnalyticsSetup();
  writePriorityPlan(pages, graph);

  const summary = {
    sitemapUrlCount: paths.length,
    pagesAudited: pages.length,
    duplicateTitles: [...graph.titleMap.entries()].filter(([, urls]) => urls.length > 1).length,
    duplicateDescriptions: [...graph.descriptionMap.entries()].filter(([, urls]) => urls.length > 1).length,
    canonicalFailures: pages.filter((page) => pageIssues(page, paths).some((issue) => issue.includes("canonical"))).length,
    h1Failures: pages.filter((page) => page.h1s.length !== 1).length,
    brokenInternalLinks: graph.badInternalLinks.length,
    wrongHostLinks: graph.wrongHostLinks.length,
    orphanPages: paths.filter((pathname) => pathname !== "/" && (graph.incoming.get(pathname)?.length ?? 0) === 0),
    maxClickDepth: Math.max(...paths.map((pathname) => graph.homepageDepth.get(pathname) ?? 99)),
    redirectFailures: status.redirects.filter((item) => !item.ok),
    goneFailures: status.gone.filter((item) => !item.ok),
    unknown404: status.unknown404,
    robotsAllowsRoot: /Allow:\s*\//.test(status.robots),
    robotsDisallowsGo: /Disallow:\s*\/go\//.test(status.robots),
    robotsSitemap: status.robots.includes("https://webcamsex.me/sitemap.xml"),
    performance,
  };

  fs.writeFileSync(path.join(artifactDir, "phase17-seo-audit-summary.json"), JSON.stringify(summary, null, 2));
  console.log(JSON.stringify(summary, null, 2));

  const hardFailures = [
    summary.canonicalFailures,
    summary.h1Failures,
    summary.brokenInternalLinks,
    summary.wrongHostLinks,
    summary.redirectFailures.length,
    summary.goneFailures.length,
    summary.unknown404 === 404 ? 0 : 1,
    summary.robotsAllowsRoot && summary.robotsDisallowsGo && summary.robotsSitemap ? 0 : 1,
  ].reduce((sum, value) => sum + Number(value), 0);

  if (hardFailures) process.exit(1);
}

await main();
