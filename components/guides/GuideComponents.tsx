import Link from "next/link";

import FeaturedModelsSection from "@/components/live/FeaturedModelsSection";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { bestPages, type BestPageSlug } from "@/lib/best-pages";
import { comparePages, type ComparePageSlug } from "@/lib/compare-pages";
import type { GuideFaq, GuidePageData } from "@/lib/guide-pages";
import { getRelatedGuideLinks } from "@/lib/guide-pages";
import {
  buildArticleJsonLd,
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildWebPageJsonLd,
  SITE_NAME,
} from "@/lib/seo";

function GuideFaqBlock({ faqs }: { faqs: GuideFaq[] }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
      <JsonLd data={buildFaqJsonLd({ questions: faqs })} />
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
        FAQ
      </div>
      <h2 className="mt-3 text-3xl font-semibold text-white">
        Common guide questions
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

function GuideCtaPanel({ page }: { page: GuidePageData }) {
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

function LinkGrid({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string; description?: string }[];
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
              <p className="mt-2 text-sm leading-6 text-white/60">
                {link.description}
              </p>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}

function GuideDecisionGrid({ page }: { page: GuidePageData }) {
  const cards = [
    {
      title: "Best for users who want",
      body: page.quickAnswer,
    },
    {
      title: "What to compare first",
      body: page.sections[0]?.body[0] ?? "Access, privacy, mobile usability, and payment expectations.",
    },
    {
      title: "What to check before signing up",
      body: page.privacy[0] ?? "Review privacy, account, and payment prompts before joining.",
    },
    {
      title: "Good next step",
      body: "Use a related Best page, Answer page, or decision tool before opening a platform route.",
    },
  ];

  return (
    <section className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <article
          key={card.title}
          className="rounded-3xl border border-white/10 bg-white/[0.035] p-5"
        >
          <h2 className="text-base font-semibold text-white">{card.title}</h2>
          <p className="mt-3 line-clamp-5 text-sm leading-6 text-white/64">
            {card.body}
          </p>
        </article>
      ))}
    </section>
  );
}

export function GuidePageLayout({ page }: { page: GuidePageData }) {
  const bestLinks = page.relatedBest.map((slug) => {
    const bestPage = bestPages[slug as BestPageSlug];

    return {
      href: bestPage.path,
      label: bestPage.label,
      description: bestPage.description,
    };
  });

  const compareLinks = page.relatedCompare.map((slug) => {
    const comparePage = comparePages[slug as ComparePageSlug];

    return {
      href: comparePage.path,
      label: comparePage.label,
      description: comparePage.description,
    };
  });

  const relatedLinks = [
    { href: "/guides", label: "Guides Hub", description: "Return to all live cam site guides." },
    ...getRelatedGuideLinks(page),
    ...bestLinks,
    ...compareLinks,
    {
      href: "/resources",
      label: "Resources",
      description: "Review site resources and trust notes.",
    },
    {
      href: "/editorial-policy",
      label: "Editorial Policy",
      description: "See how guide content and affiliate routes are handled.",
    },
  ];

  return (
    <main className="min-h-screen text-white">
      <JsonLd
        data={buildArticleJsonLd({
          title: page.h1,
          description: page.description,
          path: page.path,
          articleSection: "Live Cam Site Guides",
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
          name: `${page.label} guide sections`,
          description: page.quickAnswer,
          path: page.path,
          items: page.sections.map((section) => ({
            href: page.path,
            label: section.title,
            description: section.body[0],
          })),
        })}
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pt-16">
        <Breadcrumbs
          items={[
            { label: SITE_NAME, href: "/" },
            { label: "Guides", href: "/guides" },
            { label: page.label },
          ]}
        />
        <div className="max-w-5xl">
          <div className="mb-4 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Live cam guide
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

      <FeaturedModelsSection
        compact
        limit={4}
        seed={`guide-${page.slug}`}
        title="Explore Live Models While Reading This Guide"
        description="Preview current live model availability near the top of the guide while you compare platform access, signup expectations, privacy, and usability."
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 pt-6">
        <section className="rounded-3xl border border-[#7C5CFF]/24 bg-white/[0.035] p-5 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Quick answer
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Short version
          </h2>
          <p className="mt-4 text-base leading-7 text-white/68 md:text-lg">
            {page.quickAnswer}
          </p>
        </section>

        <GuideDecisionGrid page={page} />

        {page.sections.map((section) => (
          <section
            key={section.title}
            className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6"
          >
            <h2 className="text-3xl font-semibold text-white">{section.title}</h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-white/68">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul className="grid gap-3 sm:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-2xl border border-white/10 bg-black/24 p-4 text-sm leading-6 text-white/66"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>
        ))}

        <section className="grid items-stretch gap-4 md:grid-cols-2">
          <div className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-2xl font-semibold text-white">
              Mistakes to avoid
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/64">
              {page.mistakes.map((mistake) => (
                <li key={mistake}>{mistake}</li>
              ))}
            </ul>
          </div>
          <div className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-2xl font-semibold text-white">
              Privacy and safety considerations
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/64">
              {page.privacy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <GuideCtaPanel page={page} />
        <GuideFaqBlock faqs={page.faqs} />
        <LinkGrid title="Related guide, best, and comparison pages" links={relatedLinks} />
      </section>
    </main>
  );
}
