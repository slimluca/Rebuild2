import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ToolPageLayout } from "@/components/tools/ToolComponents";
import { getToolPage, toolPageOrder } from "@/lib/tool-pages";
import { buildPageMetadata } from "@/lib/seo";

interface ToolPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return toolPageOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getToolPage(slug);

  if (!page) {
    return {};
  }

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
  });
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const page = getToolPage(slug);

  if (!page) {
    notFound();
  }

  return <ToolPageLayout page={page} />;
}
