import type { NextConfig } from "next";

const oldSitemapPaths = [
  "/wp-sitemap.xml",
  "/wp-sitemap-posts-page-1.xml",
  "/page-sitemap.xml",
  "/post-sitemap.xml",
  "/category-sitemap.xml",
  "/site-map.xml",
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.vcmdiawe.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.webcamsex.me",
          },
        ],
        destination: "https://webcamsex.me/:path*",
        permanent: true,
      },
      ...oldSitemapPaths.map((source) => ({
        source,
        destination: "/sitemap.xml",
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
