import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CategoryPageLayout } from "@/components/categories/CategoryComponents";
import { categoryPageOrder, getCategoryPage } from "@/lib/category-pages";
import { buildPageMetadata } from "@/lib/seo";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return categoryPageOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getCategoryPage(slug);

  if (!page) {
    return {};
  }

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    adult: true,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const page = getCategoryPage(slug);

  if (!page) {
    notFound();
  }

  return <CategoryPageLayout page={page} />;
}
