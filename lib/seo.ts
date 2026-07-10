import type { Metadata, MetadataRoute } from "next";

export const SITE_NAME = "WebcamSex.me";
export const SITE_TAGLINE = "Compare the Best Live Cam Sites Before You Join";
export const SITE_URL = "https://webcamsex.me";
export const EDITORIAL_TEAM_NAME = "WebcamSex.me Editorial Team";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  adult?: boolean;
}

interface WebPageSchemaOptions {
  title: string;
  description: string;
  path: string;
}

interface ArticleSchemaOptions {
  title: string;
  description: string;
  path: string;
  articleSection?: string;
}

interface FaqSchemaOptions {
  questions: {
    question: string;
    answer: string;
  }[];
}

interface ItemListSchemaOptions {
  name: string;
  description: string;
  path: string;
  items: {
    href: string;
    label: string;
    description?: string;
  }[];
}

interface SitemapEntryOptions {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}

function normalizePath(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

export function absoluteUrl(path: string) {
  return `${SITE_URL}${normalizePath(path)}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
  adult = false,
}: PageMetadataOptions): Metadata {
  const canonicalPath = normalizePath(path);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(canonicalPath),
      siteName: SITE_NAME,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(adult ? { other: { rating: "adult" } } : {}),
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    slogan: SITE_TAGLINE,
    publishingPrinciples: absoluteUrl("/editorial-policy"),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "editorial contact",
      url: absoluteUrl("/contact"),
    },
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_TAGLINE,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: absoluteUrl("/about"),
  };
}

export function buildWebPageJsonLd({
  title,
  description,
  path,
}: WebPageSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function buildArticleJsonLd({
  title,
  description,
  path,
  articleSection = "Best Cam Sites",
}: ArticleSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    articleSection,
    mainEntityOfPage: absoluteUrl(path),
    url: absoluteUrl(path),
    author: {
      "@type": "Organization",
      name: EDITORIAL_TEAM_NAME,
      url: absoluteUrl("/editorial-policy"),
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function buildFaqJsonLd({ questions }: FaqSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildItemListJsonLd({
  name,
  description,
  path,
  items,
}: ItemListSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    url: absoluteUrl(path),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "WebPage",
        name: item.label,
        url: absoluteUrl(item.href),
        ...(item.description ? { description: item.description } : {}),
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const listItem: {
        "@type": "ListItem";
        position: number;
        name: string;
        item?: string;
      } = {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
      };

      if (item.href) {
        listItem.item = absoluteUrl(item.href);
      }

      return listItem;
    }),
  };
}

export function buildSitemapEntry({
  path,
  priority,
  changeFrequency,
}: SitemapEntryOptions): MetadataRoute.Sitemap[number] {
  return {
    url: absoluteUrl(path),
    changeFrequency,
    priority,
  };
}
