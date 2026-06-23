import Link from "next/link";

import FeaturedModelsSection from "@/components/live/FeaturedModelsSection";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { bestPages, type BestPageSlug } from "@/lib/best-pages";
import {
  getRelatedCategoryLinks,
  type CategoryFaq,
  type CategoryPageData,
} from "@/lib/category-pages";
import { comparePages, type ComparePageSlug } from "@/lib/compare-pages";
import { guidePages, type GuidePageSlug } from "@/lib/guide-pages";
import {
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildWebPageJsonLd,
  SITE_NAME,
} from "@/lib/seo";

function CategoryFaqBlock({ faqs }: { faqs: CategoryFaq[] }) {
  return (
    <section className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-5 md:p-6">
      <JsonLd data={buildFaqJsonLd({ questions: faqs })} />
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
        FAQ
      </div>
      <h2 className="mt-3 text-3xl font-semibold text-white">
        Category Questions
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

function CategoryCtaPanel({ page }: { page: CategoryPageData }) {
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

function getRelatedLinks(page: CategoryPageData) {
  const bestLinks = page.relatedBest.map((slug) => {
    const bestPage = bestPages[slug as BestPageSlug];

    return {
      href: bestPage.path,
      label: bestPage.label,
      description: bestPage.description,
    };
  });

  const guideLinks = page.relatedGuides.map((slug) => {
    const guidePage = guidePages[slug as GuidePageSlug];

    return {
      href: guidePage.path,
      label: guidePage.label,
      description: guidePage.description,
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

  return [
    {
      href: "/categories",
      label: "Categories Hub",
      description: "Browse every live model category and discovery path.",
    },
    {
      href: "/models",
      label: "Live Models",
      description: "Preview live models before choosing a platform.",
    },
    ...getRelatedCategoryLinks(page),
    ...bestLinks,
    ...guideLinks,
    ...compareLinks,
    {
      href: "/resources",
      label: "Resources",
      description: "Use site resources for navigation and trust context.",
    },
  ];
}

export function CategoryPageLayout({ page }: { page: CategoryPageData }) {
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
          name: `${page.label} comparison points`,
          description: page.comparisonAngle,
          path: page.path,
          items: page.comparePoints.map((point) => ({
            href: page.path,
            label: point,
            description: page.availabilityNote,
          })),
        })}
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pt-16">
        <Breadcrumbs
          items={[
            { label: SITE_NAME, href: "/" },
            { label: "Categories", href: "/categories" },
            { label: page.label },
          ]}
        />
        <div className="max-w-5xl">
          <div className="mb-4 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Model category
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
        limit={8}
        seed={`category-${page.slug}`}
        title={`Explore ${page.label} While Comparing Platforms`}
        description="These live previews come from the existing feed. Use them as a current discovery signal while you compare filters, free access, mobile usability, HD quality, privacy, and signup expectations."
        categoryHint={page.feedHint}
        sortMode={page.sortMode}
      />

      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-16 pt-5">
        <section className="grid items-stretch gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-5 md:p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
              What to compare
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Use this category as a decision filter
            </h2>
            <p className="mt-4 text-base leading-7 text-white/68">
              {page.comparisonAngle}. A useful category page should help you
              compare the model preview, the platform interface, and the signup
              path before you decide where to spend time.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {page.comparePoints.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-6 text-white/66"
                >
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-[#7C5CFF]/22 bg-white/[0.035] p-5 md:p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
              Live feed note
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Availability changes live
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/66">
              {page.availabilityNote}
            </p>
            <p className="mt-4 text-sm leading-6 text-white/66">
              {page.safetyNote}
            </p>
          </article>
        </section>

        <section className="grid items-stretch gap-4 md:grid-cols-3">
          <article className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Free preview access
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Check what can be viewed before account creation and whether the
              platform separates free browsing from private or premium tools.
            </p>
          </article>
          <article className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Mobile and HD fit
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Compare how model cards, streams, menus, and prompts behave on
              desktop, tablet, and mobile before choosing a platform.
            </p>
          </article>
          <article className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Privacy and signup
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Use categories for discovery, then review privacy pages, account
              controls, and payment prompts directly on the destination site.
            </p>
          </article>
        </section>

        <CategoryCtaPanel page={page} />
        <CategoryFaqBlock faqs={page.faqs} />
        <LinkGrid title="Related categories and decision pages" links={getRelatedLinks(page)} />
      </section>
    </main>
  );
}

