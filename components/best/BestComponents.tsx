import { Suspense, type ReactNode } from "react";
import Link from "next/link";

import LiveModelGrid, { LiveModelGridSkeleton } from "@/components/live/LiveModelGrid";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import type { BestPageData, BestPageFaq } from "@/lib/best-pages";
import { getRelatedBestLinks } from "@/lib/best-pages";
import {
  buildArticleJsonLd,
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildWebPageJsonLd,
  SITE_NAME,
} from "@/lib/seo";

export function DecisionCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-[#7C5CFF]/24 bg-white/[0.035] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)] md:p-6">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
        Decision summary
      </div>
      <h2 className="mt-3 text-2xl font-semibold text-white">{title}</h2>
      <div className="mt-4 text-base leading-7 text-white/68">{children}</div>
    </div>
  );
}

export function ComparisonCriteria({
  criteria,
}: {
  criteria: BestPageData["criteria"];
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
        What to compare
      </div>
      <h2 className="mt-3 text-3xl font-semibold text-white">
        Comparison criteria that matter
      </h2>
      <div className="mt-6 grid items-stretch gap-4 md:grid-cols-2">
        {criteria.map((item) => (
          <article
            key={item.label}
            className="h-full rounded-2xl border border-white/10 bg-black/24 p-5"
          >
            <h3 className="text-lg font-semibold text-white">{item.label}</h3>
            <p className="mt-2 text-sm leading-6 text-white/64">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function RelatedLinks({
  links,
  title = "Related best cam site guides",
}: {
  links: {
    href: string;
    label: string;
    description?: string;
  }[];
  title?: string;
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="mt-5 grid items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="h-full rounded-2xl border border-white/10 bg-black/24 p-4 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.045]"
          >
            <h3 className="text-base font-semibold text-white">{link.label}</h3>
            {link.description ? (
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-white/60">
                {link.description}
              </p>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function FaqBlock({ faqs }: { faqs: BestPageFaq[] }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
      <JsonLd data={buildFaqJsonLd({ questions: faqs })} />
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
        FAQ
      </div>
      <h2 className="mt-3 text-3xl font-semibold text-white">
        Common questions
      </h2>
      <div className="mt-6 grid gap-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="rounded-2xl border border-white/10 bg-black/24 p-5"
          >
            <summary className="cursor-pointer text-base font-semibold text-white">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-white/64">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CtaPanel({ page }: { page: BestPageData }) {
  return (
    <section className="rounded-3xl border border-[#7C5CFF]/24 bg-[linear-gradient(135deg,rgba(124,92,255,0.22),rgba(5,5,7,0.94)_48%,rgba(0,171,255,0.12))] p-6 md:p-8">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
        Next step
      </div>
      <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white">
        {page.cta.title}
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
        {page.cta.body}
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Link
          href={page.cta.primaryHref}
          prefetch={false}
          className="inline-flex justify-center rounded-full bg-[#7C5CFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(124,92,255,0.38)] transition hover:bg-[#8B70FF]"
        >
          {page.cta.primaryLabel}
        </Link>
        <Link
          href={page.cta.secondaryHref}
          prefetch={false}
          className="inline-flex justify-center rounded-full border border-[#8FB7FF]/32 bg-[#8FB7FF]/10 px-6 py-3 text-sm font-semibold text-[#C8DAFF] transition hover:border-[#8FB7FF]/52 hover:bg-[#8FB7FF]/15"
        >
          {page.cta.secondaryLabel}
        </Link>
      </div>
    </section>
  );
}

export function BestPageLayout({ page }: { page: BestPageData }) {
  const relatedLinks = [
    { href: "/best", label: "Best Cam Sites Hub", description: "Compare all Phase 2 best cam site decision guides." },
    ...getRelatedBestLinks(page),
    {
      href: "/resources",
      label: "Resources",
      description: "Review site resources, trust notes, and Phase 1 navigation.",
    },
    {
      href: "/editorial-policy",
      label: "Editorial Policy",
      description: "See how WebcamSex.me frames comparison content and affiliate links.",
    },
  ];

  return (
    <main className="min-h-screen text-white">
      <JsonLd
        data={buildArticleJsonLd({
          title: page.h1,
          description: page.description,
          path: page.path,
        })}
      />
      <JsonLd
        data={buildWebPageJsonLd({
          title: page.h1,
          description: page.description,
          path: page.path,
        })}
      />
      <JsonLd
        data={buildItemListJsonLd({
          name: `${page.label} comparison criteria`,
          description: page.summary,
          path: page.path,
          items: page.criteria.map((criterion) => ({
            href: page.path,
            label: criterion.label,
            description: criterion.detail,
          })),
        })}
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pt-16">
        <Breadcrumbs
          items={[
            { label: SITE_NAME, href: "/" },
            { label: "Best Cam Sites", href: "/best" },
            { label: page.label },
          ]}
        />
        <div className="max-w-5xl">
          <div className="mb-4 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Best cam sites by need
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            {page.h1}
          </h1>
          <div className="mt-6 space-y-4 text-base leading-7 text-white/72 md:text-lg md:leading-8">
            {page.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {page.includeLivePreview ? (
        <section className="mx-auto max-w-7xl px-4 pb-8 pt-2 md:pb-10">
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
              Live preview
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Preview live availability while comparing
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-white/66">
              Use current live room previews as one comparison signal. The grid
              is not a ranking and availability can change while you browse.
            </p>
            <div className="mt-6">
              <Suspense fallback={<LiveModelGridSkeleton />}>
                <LiveModelGrid limit={4} seed={`best-${page.slug}`} />
              </Suspense>
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 pt-6">
        <DecisionCard title="How to make this decision">
          <p>{page.summary}</p>
        </DecisionCard>

        <ComparisonCriteria criteria={page.criteria} />

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Best for
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Use cases this category fits best
          </h2>
          <div className="mt-6 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.bestFor.map((section) => (
              <article
                key={section.title}
                className="h-full rounded-2xl border border-white/10 bg-black/24 p-5"
              >
                <h3 className="text-lg font-semibold text-white">
                  {section.title}
                </h3>
                <div className="mt-3 space-y-3 text-sm leading-6 text-white/64">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul className="list-inside list-disc space-y-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Safety and privacy
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Safety and privacy considerations
          </h2>
          <div className="mt-6 grid gap-3">
            {page.safety.map((item) => (
              <p
                key={item}
                className="rounded-2xl border border-white/10 bg-black/24 p-4 text-sm leading-6 text-white/66"
              >
                {item}
              </p>
            ))}
          </div>
        </section>

        <CtaPanel page={page} />
        <FaqBlock faqs={page.faqs} />
        <RelatedLinks links={relatedLinks} />
      </section>
    </main>
  );
}
