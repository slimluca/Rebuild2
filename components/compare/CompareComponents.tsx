import Link from "next/link";

import FeaturedModelsSection from "@/components/live/FeaturedModelsSection";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import type { ComparePageData, ComparePageFaq } from "@/lib/compare-pages";
import { getRelatedCompareLinks } from "@/lib/compare-pages";
import { bestPages, type BestPageSlug } from "@/lib/best-pages";
import {
  buildArticleJsonLd,
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildWebPageJsonLd,
  SITE_NAME,
} from "@/lib/seo";

export function ComparisonTable({ page }: { page: ComparePageData }) {
  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
      <div className="p-5 md:p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
          Side-by-side
        </div>
        <h2 className="mt-3 text-3xl font-semibold text-white">
          Side-by-side comparison table
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-t border-white/10 text-left text-sm">
          <thead className="bg-black/28 text-white/78">
            <tr>
              <th className="px-5 py-4 font-semibold">Factor</th>
              <th className="px-5 py-4 font-semibold">{page.options.left}</th>
              <th className="px-5 py-4 font-semibold">{page.options.right}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-white/64">
            {page.rows.map((row) => (
              <tr key={row.factor}>
                <td className="px-5 py-4 font-semibold text-white/82">
                  {row.factor}
                </td>
                <td className="px-5 py-4">{row.left}</td>
                <td className="px-5 py-4">{row.right}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function PlatformFitCards({ page }: { page: ComparePageData }) {
  return (
    <section className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-5 md:p-6">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
        Fit
      </div>
      <h2 className="mt-3 text-3xl font-semibold text-white">
        Who each option may suit
      </h2>
      <div className="mt-6 grid items-stretch gap-4 md:grid-cols-2">
        {page.fitCards.map((card) => (
          <article
            key={card.title}
            className="h-full rounded-2xl border border-white/10 bg-black/30 p-4 md:p-5"
          >
            <h3 className="text-lg font-semibold text-white">{card.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/64">{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DecisionTable({ page }: { page: ComparePageData }) {
  const rows = [
    {
      need: "Low-commitment browsing",
      compare: "What can be previewed before signup and how public room discovery works.",
      signup: "Usually compare what is visible before registration first.",
      payment: "Check whether payment appears only for premium, private, or credit-based features.",
      privacy: page.privacy[0],
      next: { href: "/best/free-cam-sites", label: "Free Cam Sites" },
    },
    {
      need: "More controlled access",
      compare: "Private feature clarity, confirmation prompts, verified signals, and account controls.",
      signup: "Expect signup to matter sooner when private or paid tools are involved.",
      payment: "Review credit, billing, and confirmation language before paying.",
      privacy: page.privacy[1] ?? page.privacy[0],
      next: { href: "/best/private-cam-sites", label: "Private Cam Sites" },
    },
    {
      need: "Platform-specific choice",
      compare: page.rows[0] ? `${page.rows[0].factor}: ${page.rows[0].left} ${page.rows[0].right}` : page.quickAnswer,
      signup: "Use the platform that explains account expectations most clearly for your use case.",
      payment: "Avoid paid steps until the feature and terms are clear.",
      privacy: "Use the editorial policy and safety guides when methodology or trust matters.",
      next: { href: "/tools/cam-site-chooser", label: "Cam Site Chooser" },
    },
  ];

  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
      <div className="p-5 md:p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
          Decision table
        </div>
        <h2 className="mt-3 text-3xl font-semibold text-white">
          Choose by need, not by a unsupported score
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] border-t border-white/10 text-left text-sm">
          <thead className="bg-black/28 text-white/78">
            <tr>
              <th className="px-5 py-4 font-semibold">User need</th>
              <th className="px-5 py-4 font-semibold">What to compare</th>
              <th className="px-5 py-4 font-semibold">Signup expectation</th>
              <th className="px-5 py-4 font-semibold">Payment expectation</th>
              <th className="px-5 py-4 font-semibold">Privacy note</th>
              <th className="px-5 py-4 font-semibold">Best next page</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-white/64">
            {rows.map((row) => (
              <tr key={row.need}>
                <td className="px-5 py-4 font-semibold text-white/82">
                  {row.need}
                </td>
                <td className="px-5 py-4">{row.compare}</td>
                <td className="px-5 py-4">{row.signup}</td>
                <td className="px-5 py-4">{row.payment}</td>
                <td className="px-5 py-4">{row.privacy}</td>
                <td className="px-5 py-4">
                  <Link
                    href={row.next.href}
                    className="font-semibold text-[#8FB7FF] transition hover:text-[#C8DAFF]"
                  >
                    {row.next.label}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function ComparisonFaqBlock({ faqs }: { faqs: ComparePageFaq[] }) {
  return (
    <section className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-5 md:p-6">
      <JsonLd data={buildFaqJsonLd({ questions: faqs })} />
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
        FAQ
      </div>
      <h2 className="mt-3 text-3xl font-semibold text-white">
        Comparison questions
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

export function ComparisonCtaPanel({ page }: { page: ComparePageData }) {
  return (
    <section className="rounded-[1.6rem] border border-[#7C5CFF]/24 bg-[linear-gradient(135deg,rgba(124,92,255,0.22),rgba(5,5,7,0.94)_48%,rgba(0,171,255,0.12))] p-6 md:p-8">
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

export function RelatedComparisonLinks({
  links,
  title = "Related comparison and best pages",
}: {
  links: {
    href: string;
    label: string;
    description?: string;
  }[];
  title?: string;
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

function CopySection({
  eyebrow,
  title,
  paragraphs,
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
}) {
  return (
    <section className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-5 md:p-6">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-semibold text-white">{title}</h2>
      <div className="mt-5 space-y-4 text-base leading-7 text-white/68">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export function ComparePageLayout({ page }: { page: ComparePageData }) {
  const bestLinks = page.relatedBest.map((slug) => {
    const bestPage = bestPages[slug as BestPageSlug];

    return {
      href: bestPage.path,
      label: bestPage.label,
      description: bestPage.description,
    };
  });

  const relatedLinks = [
    { href: "/compare", label: "Compare Hub", description: "Return to all live cam site comparisons." },
    ...getRelatedCompareLinks(page),
    ...bestLinks,
    {
      href: "/resources",
      label: "Resources",
      description: "Review site resources and comparison notes.",
    },
    {
      href: "/editorial-policy",
      label: "Editorial Policy",
      description: "See how comparison content and affiliate routes are handled.",
    },
  ];

  return (
    <main className="min-h-screen text-white">
      <JsonLd
        data={buildArticleJsonLd({
          title: page.h1,
          description: page.description,
          path: page.path,
          articleSection: "Live Cam Site Comparisons",
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
          name: `${page.label} comparison factors`,
          description: page.quickAnswer,
          path: page.path,
          items: page.rows.map((row) => ({
            href: page.path,
            label: row.factor,
            description: `${row.left} ${row.right}`,
          })),
        })}
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pt-16">
        <Breadcrumbs
          items={[
            { label: SITE_NAME, href: "/" },
            { label: "Compare", href: "/compare" },
            { label: page.label },
          ]}
        />
        <div className="max-w-5xl">
          <div className="mb-4 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Platform comparison
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
        seed={`compare-${page.slug}`}
        title="Preview Live Models Before Choosing a Platform"
        description="Use live previews as a current browsing signal only. Availability changes, and this section is not a ranking or review score."
      />

      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-16 pt-5">
        <section className="rounded-[1.6rem] border border-[#7C5CFF]/24 bg-[linear-gradient(180deg,rgba(124,92,255,0.12),rgba(255,255,255,0.028))] p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Quick answer
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Which option fits better?
          </h2>
          <p className="mt-4 text-base leading-7 text-white/68 md:text-lg">
            {page.quickAnswer}
          </p>
        </section>

        <ComparisonTable page={page} />
        <DecisionTable page={page} />
        <section className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-5 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Reading the comparison
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            How to apply this comparison to your signup decision
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-black/30 p-4 md:p-5">
              <h3 className="text-lg font-semibold text-white">
                Decision factors to compare
              </h3>
              <ul className="mt-3 space-y-3 text-sm leading-6 text-white/64">
                {page.rows.slice(0, 3).map((row) => (
                  <li key={row.factor}>
                    <span className="font-semibold text-white/82">{row.factor}:</span>{" "}
                    {row.left} {row.right}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-white/10 bg-black/30 p-4 md:p-5">
              <h3 className="text-lg font-semibold text-white">
                Privacy and usability checks
              </h3>
              <ul className="mt-3 space-y-3 text-sm leading-6 text-white/64">
                {[...page.privacy.slice(0, 2), ...page.mobile.slice(0, 1)].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
        <CopySection eyebrow="Style" title={page.style.title} paragraphs={page.style.body} />
        <CopySection
          eyebrow="Signup"
          title="Signup and browsing expectations"
          paragraphs={page.signup}
        />
        <CopySection
          eyebrow="Privacy"
          title="Privacy and safety considerations"
          paragraphs={page.privacy}
        />
        <CopySection
          eyebrow="Mobile"
          title="Mobile and usability comparison"
          paragraphs={page.mobile}
        />
        <PlatformFitCards page={page} />

        <ComparisonCtaPanel page={page} />
        <ComparisonFaqBlock faqs={page.faqs} />
        <RelatedComparisonLinks links={relatedLinks} />
      </section>
    </main>
  );
}

