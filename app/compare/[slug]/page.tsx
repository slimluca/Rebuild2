import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ComparePageLayout } from "@/components/compare/CompareComponents";
import { comparePageOrder, getComparePage } from "@/lib/compare-pages";
import { buildPageMetadata } from "@/lib/seo";

interface ComparePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return comparePageOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ComparePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getComparePage(slug);

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

export default async function ComparePage({ params }: ComparePageProps) {
  const { slug } = await params;
  const page = getComparePage(slug);

  if (!page) {
    notFound();
  }

  return <ComparePageLayout page={page} />;
}
