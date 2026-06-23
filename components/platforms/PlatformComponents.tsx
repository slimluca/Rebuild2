import Link from "next/link";

import FeaturedModelsSection from "@/components/live/FeaturedModelsSection";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { alternativePages, type AlternativePageSlug } from "@/lib/alternative-pages";
import { bestPages, type BestPageSlug } from "@/lib/best-pages";
import { comparePages, type ComparePageSlug } from "@/lib/compare-pages";
import {
  platformPages,
  type PlatformFaq,
  type PlatformPageData,
  type PlatformPageSlug,
} from "@/lib/platform-pages";
import {
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildWebPageJsonLd,
  SITE_NAME,
} from "@/lib/seo";

function FaqBlock({ faqs }: { faqs: PlatformFaq[] }) {
  return (
    <section className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-5 md:p-6">
      <JsonLd data={buildFaqJsonLd({ questions: faqs })} />
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
        FAQ
      </div>
      <h2 className="mt-3 text-3xl font-semibold text-white">
        Platform Guide Questions
      </h2>
      <div className="mt-6 grid gap-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="rounded-2xl border border-white/10 bg-black/30 p-4 md:p-5"
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

function CtaPanel({ page }: { page: PlatformPageData }) {
  return (
    <section className="rounded-[1.6rem] border border-[#7C5CFF]/24 bg-[linear-gradient(135deg,rgba(124,92,255,0.22),rgba(5,5,7,0.94)_50%,rgba(0,171,255,0.1))] p-6 md:p-8">
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
    <section className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-5 md:p-6">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="mt-5 grid items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="h-full rounded-2xl border border-white/10 bg-black/30 p-4 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.045]"
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

function getRelatedLinks(page: PlatformPageData) {
  const platformLinks = page.relatedPlatforms.map((slug) => {
    const related = platformPages[slug as PlatformPageSlug];

    return { href: related.path, label: related.label, description: related.description };
  });

  const alternativeLinks = page.relatedAlternatives.map((slug) => {
    const related = alternativePages[slug as AlternativePageSlug];

    return { href: related.path, label: related.label, description: related.description };
  });

  const bestLinks = page.relatedBest.map((slug) => {
    const related = bestPages[slug as BestPageSlug];

    return { href: related.path, label: related.label, description: related.description };
  });

  const compareLinks = page.relatedCompare.map((slug) => {
    const related = comparePages[slug as ComparePageSlug];

    return { href: related.path, label: related.label, description: related.description };
  });

  return [
    { href: "/platforms", label: "Platform Guides", description: "Return to all platform guides." },
    { href: "/alternatives", label: "Alternatives", description: "Compare alternatives by user need." },
    ...platformLinks,
    ...alternativeLinks,
    ...bestLinks,
    ...compareLinks,
    { href: "/models", label: "Live Models", description: "Preview current live model availability." },
  ];
}

export function PlatformPageLayout({ page }: { page: PlatformPageData }) {
  return (
    <main className="min-h-screen text-white">
      <JsonLd
        data={buildWebPageJsonLd({
          title: page.h1,
          description: page.description,
          path: page.path,
        })}
      />
      <JsonLd
        data={buildItemListJsonLd({
          name: `${page.label} decision criteria`,
          description: page.quickAnswer,
          path: page.path,
          items: page.criteria.map((item) => ({
            href: page.path,
            label: item.label,
            description: item.detail,
          })),
        })}
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pt-16">
        <Breadcrumbs
          items={[
            { label: SITE_NAME, href: "/" },
            { label: "Platforms", href: "/platforms" },
            { label: page.label },
          ]}
        />
        <div className="max-w-5xl">
          <div className="mb-4 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Platform guide
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
        seed={`platform-${page.slug}`}
        title={`Preview Live Models While Reading the ${page.label} Guide`}
        description="Use current live model previews as one comparison signal while you evaluate platform style, signup expectations, mobile usability, privacy, and alternatives."
      />

      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-16 pt-5">
        <section className="rounded-[1.6rem] border border-[#7C5CFF]/24 bg-[linear-gradient(180deg,rgba(124,92,255,0.12),rgba(255,255,255,0.028))] p-5 md:p-6">
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

        <section className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-5 md:p-6">
          <h2 className="text-3xl font-semibold text-white">
            What to compare before joining
          </h2>
          <div className="mt-6 grid items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {page.criteria.map((item) => (
              <article
                key={item.label}
                className="h-full rounded-2xl border border-white/10 bg-black/30 p-4"
              >
                <h3 className="text-base font-semibold text-white">{item.label}</h3>
                <p className="mt-2 text-sm leading-6 text-white/62">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid items-stretch gap-4 md:grid-cols-3">
          {page.suitCards.map((card) => (
            <article
              key={card.title}
              className="h-full rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-5 md:p-6"
            >
              <h2 className="text-xl font-semibold text-white">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/64">{card.body}</p>
            </article>
          ))}
        </section>

        <section className="grid items-stretch gap-4 md:grid-cols-2">
          <article className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-5 md:p-6">
            <h2 className="text-2xl font-semibold text-white">
              Privacy, signup, and payment
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/64">
              {page.privacy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-5 md:p-6">
            <h2 className="text-2xl font-semibold text-white">
              Mobile usability
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/64">
              {page.mobile.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <CtaPanel page={page} />
        <FaqBlock faqs={page.faqs} />
        <LinkGrid title="Related platform, alternative, and comparison pages" links={getRelatedLinks(page)} />
      </section>
    </main>
  );
}

