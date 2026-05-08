import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GuidePageLayout } from "@/components/guides/GuideComponents";
import { getGuidePage, guidePageOrder } from "@/lib/guide-pages";
import { buildPageMetadata } from "@/lib/seo";

interface GuidePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return guidePageOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getGuidePage(slug);

  if (!page) {
    return {};
  }

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    type: "article",
  });
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const page = getGuidePage(slug);

  if (!page) {
    notFound();
  }

  return <GuidePageLayout page={page} />;
}
