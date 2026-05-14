import type { MetadataRoute } from "next";

import { alternativePageLinks } from "@/lib/alternative-pages";
import { answerPageLinks } from "@/lib/answer-pages";
import { bestPageLinks } from "@/lib/best-pages";
import { categoryPageLinks } from "@/lib/category-pages";
import { comparePageLinks } from "@/lib/compare-pages";
import { featurePageLinks } from "@/lib/feature-pages";
import { guidePageLinks } from "@/lib/guide-pages";
import { platformPageLinks } from "@/lib/platform-pages";
import { buildSitemapEntry } from "@/lib/seo";

const staticRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/best", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/compare", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/guides", changeFrequency: "weekly" as const, priority: 0.88 },
  { path: "/models", changeFrequency: "weekly" as const, priority: 0.86 },
  { path: "/categories", changeFrequency: "weekly" as const, priority: 0.86 },
  { path: "/platforms", changeFrequency: "weekly" as const, priority: 0.84 },
  { path: "/alternatives", changeFrequency: "weekly" as const, priority: 0.84 },
  { path: "/features", changeFrequency: "weekly" as const, priority: 0.84 },
  { path: "/answers", changeFrequency: "weekly" as const, priority: 0.84 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.72 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.62 },
  {
    path: "/editorial-policy",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    path: "/privacy-policy",
    changeFrequency: "monthly" as const,
    priority: 0.42,
  },
  {
    path: "/terms-of-service",
    changeFrequency: "monthly" as const,
    priority: 0.42,
  },
  { path: "/resources", changeFrequency: "monthly" as const, priority: 0.74 },
  { path: "/site-map", changeFrequency: "monthly" as const, priority: 0.72 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => buildSitemapEntry(route)),
    ...bestPageLinks.map((link) =>
      buildSitemapEntry({
        path: link.href,
        changeFrequency: "monthly",
        priority: 0.82,
      }),
    ),
    ...comparePageLinks.map((link) =>
      buildSitemapEntry({
        path: link.href,
        changeFrequency: "monthly",
        priority: 0.82,
      }),
    ),
    ...guidePageLinks.map((link) =>
      buildSitemapEntry({
        path: link.href,
        changeFrequency: "monthly",
        priority: 0.8,
      }),
    ),
    ...categoryPageLinks.map((link) =>
      buildSitemapEntry({
        path: link.href,
        changeFrequency: "weekly",
        priority: 0.78,
      }),
    ),
    ...platformPageLinks.map((link) =>
      buildSitemapEntry({
        path: link.href,
        changeFrequency: "monthly",
        priority: 0.78,
      }),
    ),
    ...alternativePageLinks.map((link) =>
      buildSitemapEntry({
        path: link.href,
        changeFrequency: "monthly",
        priority: 0.78,
      }),
    ),
    ...featurePageLinks.map((link) =>
      buildSitemapEntry({
        path: link.href,
        changeFrequency: "monthly",
        priority: 0.78,
      }),
    ),
    ...answerPageLinks.map((link) =>
      buildSitemapEntry({
        path: link.href,
        changeFrequency: "monthly",
        priority: 0.78,
      }),
    ),
  ];
}
