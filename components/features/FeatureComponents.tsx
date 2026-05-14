import Link from "next/link";

import FeaturedModelsSection from "@/components/live/FeaturedModelsSection";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { alternativePages, type AlternativePageSlug } from "@/lib/alternative-pages";
import { bestPages, type BestPageSlug } from "@/lib/best-pages";
import { comparePages, type ComparePageSlug } from "@/lib/compare-pages";
import { featurePages, type FeatureFaq, type FeaturePageData, type FeaturePageSlug } from "@/lib/feature-pages";
import { guidePages, type GuidePageSlug } from "@/lib/guide-pages";
import { platformPages, type PlatformPageSlug } from "@/lib/platform-pages";
import {
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildWebPageJsonLd,
  SITE_NAME,
} from "@/lib/seo";

function FeatureFaqBlock({ faqs }: { faqs: FeatureFaq[] }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
      <JsonLd data={buildFaqJsonLd({ questions: faqs })} />
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
        FAQ
      </div>
      <h2 className="mt-3 text-3xl font-semibold text-white">
        Feature Questions
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

function FeatureCtaPanel({ page }: { page: FeaturePageData }) {
  return (
    <section className="rounded-3xl border border-[#7C5CFF]/24 bg-[linear-gradient(135deg,rgba(124,92,255,0.22),rgba(5,5,7,0.94)_50%,rgba(0,171,255,0.1))] p-6 md:p-8">
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

function getRelatedLinks(page: FeaturePageData) {
  const bestLinks = page.relatedBest.map((slug) => {
    const item = bestPages[slug as BestPageSlug];
    return { href: item.path, label: item.label, description: item.description };
  });

  const compareLinks = page.relatedCompare.map((slug) => {
    const item = comparePages[slug as ComparePageSlug];
    return { href: item.path, label: item.label, description: item.description };
  });

  const guideLinks = page.relatedGuides.map((slug) => {
    const item = guidePages[slug as GuidePageSlug];
    return { href: item.path, label: item.label, description: item.description };
  });

  const platformLinks = page.relatedPlatforms.map((slug) => {
    const item = platformPages[slug as PlatformPageSlug];
    return { href: item.path, label: item.label, description: item.description };
  });

  const alternativeLinks = page.relatedAlternatives.map((slug) => {
    const item = alternativePages[slug as AlternativePageSlug];
    return { href: item.path, label: item.label, description: item.description };
  });

  return [
    { href: "/features", label: "Features Hub", description: "Return to all live cam site feature guides." },
    ...bestLinks,
    ...compareLinks,
    ...guideLinks,
    ...platformLinks,
    ...alternativeLinks,
    { href: "/models", label: "Live Models", description: "Preview current live model availability." },
  ];
}

export function FeaturePageLayout({ page }: { page: FeaturePageData }) {
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
          name: `${page.label} comparison checklist`,
          description: page.quickAnswer,
          path: page.path,
          items: page.checks.map((check) => ({
            href: page.path,
            label: check,
          })),
        })}
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pt-16">
        <Breadcrumbs
          items={[
            { label: SITE_NAME, href: "/" },
            { label: "Features", href: "/features" },
            { label: page.label },
          ]}
        />
        <div className="max-w-5xl">
          <div className="mb-4 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Feature guide
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
        seed={`feature-${page.slug}`}
        title={`Preview Live Models While Comparing ${page.label}`}
        description="Use current live model previews as one practical signal while you compare platform features, privacy comfort, signup expectations, and mobile usability."
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

        <section className="grid items-stretch gap-4 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-2xl font-semibold text-white">
              What this feature means
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-white/64">
              {page.meaning.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-2xl font-semibold text-white">
              Why it matters when comparing cam sites
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-white/64">
              {page.matters.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <h2 className="text-3xl font-semibold text-white">
            What to check before signing up
          </h2>
          <div className="mt-6 grid items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {page.checks.map((check) => (
              <div
                key={check}
                className="rounded-2xl border border-white/10 bg-black/24 p-4 text-sm leading-6 text-white/66"
              >
                {check}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <h2 className="text-2xl font-semibold text-white">
            Privacy or payment considerations
          </h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-3">
            {page.privacy.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-black/24 p-4 text-sm leading-6 text-white/64"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <FeatureCtaPanel page={page} />
        <FeatureFaqBlock faqs={page.faqs} />
        <LinkGrid title="Related feature, guide, and decision pages" links={getRelatedLinks(page)} />
      </section>
    </main>
  );
}

export function getFeatureCards(slugs: readonly string[]) {
  return slugs.map((slug) => {
    const item = featurePages[slug as FeaturePageSlug];
    return { href: item.path, label: item.label, description: item.description };
  });
}
