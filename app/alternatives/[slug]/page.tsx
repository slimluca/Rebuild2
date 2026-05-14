import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AlternativePageLayout } from "@/components/alternatives/AlternativeComponents";
import { alternativePageOrder, getAlternativePage } from "@/lib/alternative-pages";
import { buildPageMetadata } from "@/lib/seo";

interface AlternativePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return alternativePageOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: AlternativePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getAlternativePage(slug);

  if (!page) {
    return {};
  }

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
  });
}

export default async function AlternativePage({ params }: AlternativePageProps) {
  const { slug } = await params;
  const page = getAlternativePage(slug);

  if (!page) {
    notFound();
  }

  return <AlternativePageLayout page={page} />;
}
