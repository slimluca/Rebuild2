import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BestPageLayout } from "@/components/best/BestComponents";
import { bestPageOrder, getBestPage } from "@/lib/best-pages";
import { buildPageMetadata } from "@/lib/seo";

interface BestPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return bestPageOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BestPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getBestPage(slug);

  if (!page) {
    return {};
  }

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    type: "article",
    adult: true,
  });
}

export default async function BestPage({ params }: BestPageProps) {
  const { slug } = await params;
  const page = getBestPage(slug);

  if (!page) {
    notFound();
  }

  return <BestPageLayout page={page} />;
}
