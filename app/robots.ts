import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/go/"],
    },
    sitemap: "https://webcamsex.me/sitemap.xml",
    host: "https://webcamsex.me",
  };
}
