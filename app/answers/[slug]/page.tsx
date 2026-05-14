import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AnswerPageLayout } from "@/components/answers/AnswerComponents";
import { answerPageOrder, getAnswerPage } from "@/lib/answer-pages";
import { buildPageMetadata } from "@/lib/seo";

interface AnswerPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return answerPageOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: AnswerPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getAnswerPage(slug);

  if (!page) {
    return {};
  }

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
  });
}

export default async function AnswerPage({ params }: AnswerPageProps) {
  const { slug } = await params;
  const page = getAnswerPage(slug);

  if (!page) {
    notFound();
  }

  return <AnswerPageLayout page={page} />;
}
