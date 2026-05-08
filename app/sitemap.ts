import type { MetadataRoute } from "next";

import { bestPageLinks } from "@/lib/best-pages";
import { buildSitemapEntry } from "@/lib/seo";

const staticRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/best", changeFrequency: "weekly" as const, priority: 0.9 },
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
  ];
}
