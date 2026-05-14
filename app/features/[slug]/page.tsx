import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FeaturePageLayout } from "@/components/features/FeatureComponents";
import { featurePageOrder, getFeaturePage } from "@/lib/feature-pages";
import { buildPageMetadata } from "@/lib/seo";

interface FeaturePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return featurePageOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: FeaturePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getFeaturePage(slug);

  if (!page) {
    return {};
  }

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
  });
}

export default async function FeaturePage({ params }: FeaturePageProps) {
  const { slug } = await params;
  const page = getFeaturePage(slug);

  if (!page) {
    notFound();
  }

  return <FeaturePageLayout page={page} />;
}
