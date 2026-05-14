import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PlatformPageLayout } from "@/components/platforms/PlatformComponents";
import { getPlatformPage, platformPageOrder } from "@/lib/platform-pages";
import { buildPageMetadata } from "@/lib/seo";

interface PlatformPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return platformPageOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PlatformPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPlatformPage(slug);

  if (!page) {
    return {};
  }

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
  });
}

export default async function PlatformPage({ params }: PlatformPageProps) {
  const { slug } = await params;
  const page = getPlatformPage(slug);

  if (!page) {
    notFound();
  }

  return <PlatformPageLayout page={page} />;
}
