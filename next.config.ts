import type { NextConfig } from "next";

const oldSitemapPaths = [
  "/wp-sitemap.xml",
  "/wp-sitemap-posts-page-1.xml",
  "/page-sitemap.xml",
  "/post-sitemap.xml",
  "/category-sitemap.xml",
  "/site-map.xml",
];

const legacyRedirects = [
  { source: "/sophia-medina-sweet-sophia-athletic-latin-model", destination: "/categories/latina-cam-models" },
  { source: "/katherin-cruzz-slim-colombian-webcam", destination: "/categories/latina-cam-models" },
  { source: "/sophia-medina-athletic-latin-model", destination: "/categories/latina-cam-models" },
  { source: "/ebony", destination: "/categories/ebony-cam-models" },
  { source: "/fitness", destination: "/categories/fitness-cam-models" },
  { source: "/latina", destination: "/categories/latina-cam-models" },
  { source: "/latin", destination: "/categories/latina-cam-models" },
  { source: "/couples", destination: "/categories/couple-cam-models" },
  { source: "/petite", destination: "/categories/petite-cam-models" },
  { source: "/milfs", destination: "/categories/milf-cam-models" },
  { source: "/milf", destination: "/categories/milf-cam-models" },
  { source: "/asian", destination: "/categories/asian-cam-models" },
  { source: "/asians", destination: "/categories/asian-cam-models" },
  { source: "/blog", destination: "/guides" },
  { source: "/br", destination: "/categories/brazilian-cam-models" },
  { source: "/blonde", destination: "/categories/blonde-cam-models" },
  { source: "/brunette", destination: "/categories/brunette-cam-models" },
  { source: "/mature", destination: "/categories/milf-cam-models" },
  { source: "/hd", destination: "/categories/hd-cam-models" },
  { source: "/mobile", destination: "/categories/mobile-cam-models" },
  { source: "/verified", destination: "/categories/verified-cam-models" },
  { source: "/private", destination: "/categories/private-show-models" },
  { source: "/trending", destination: "/categories/trending-cam-models" },
  { source: "/popular", destination: "/categories/trending-cam-models" },
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
      ...legacyRedirects.map((redirect) => ({
        ...redirect,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
