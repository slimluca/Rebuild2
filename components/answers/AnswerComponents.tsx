import Link from "next/link";

import FeaturedModelsSection from "@/components/live/FeaturedModelsSection";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { type AnswerFaq, type AnswerPageData } from "@/lib/answer-pages";
import { bestPages, type BestPageSlug } from "@/lib/best-pages";
import { comparePages, type ComparePageSlug } from "@/lib/compare-pages";
import { featurePages, type FeaturePageSlug } from "@/lib/feature-pages";
import { guidePages, type GuidePageSlug } from "@/lib/guide-pages";
import { platformPages, type PlatformPageSlug } from "@/lib/platform-pages";
import {
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildWebPageJsonLd,
  SITE_NAME,
} from "@/lib/seo";

function AnswerFaqBlock({ faqs }: { faqs: AnswerFaq[] }) {
  return (
    <section className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-5 md:p-6">
      <JsonLd data={buildFaqJsonLd({ questions: faqs })} />
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
        FAQ
      </div>
      <h2 className="mt-3 text-3xl font-semibold text-white">
        Related Questions
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

function AnswerCtaPanel({ page }: { page: AnswerPageData }) {
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

function AnswerDecisionTable({ page }: { page: AnswerPageData }) {
  const rows = [
    {
      need: page.label,
      compare: page.compare[0] ?? page.directAnswer,
      signup: "Check whether the answer changes once registration, interaction, or saved preferences are involved.",
      payment: "Separate free browsing from private, premium, credit, or upgrade prompts.",
      privacy: page.considerations[0],
      next: page.relatedBest[0]
        ? {
            href: bestPages[page.relatedBest[0] as BestPageSlug].path,
            label: bestPages[page.relatedBest[0] as BestPageSlug].label,
          }
        : { href: "/answers", label: "Answers Hub" },
    },
    {
      need: "Before signup",
      compare: page.compare[1] ?? "Privacy, payment, mobile usability, and platform transparency.",
      signup: "Do not create an account until the platform explains why it is needed.",
      payment: "Avoid entering payment details before the paid feature and terms are clear.",
      privacy: page.considerations[1] ?? page.considerations[0],
      next: { href: "/tools/cam-site-chooser", label: "Cam Site Chooser" },
    },
  ];

  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
      <div className="p-5 md:p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
          Quick decision
        </div>
        <h2 className="mt-3 text-3xl font-semibold text-white">
          What this answer means for your next step
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border-t border-white/10 text-left text-sm">
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

function getRelatedLinks(page: AnswerPageData) {
  const bestLinks = page.relatedBest.map((slug) => {
    const item = bestPages[slug as BestPageSlug];
    return { href: item.path, label: item.label, description: item.description };
  });
  const guideLinks = page.relatedGuides.map((slug) => {
    const item = guidePages[slug as GuidePageSlug];
    return { href: item.path, label: item.label, description: item.description };
  });
  const featureLinks = page.relatedFeatures.map((slug) => {
    const item = featurePages[slug as FeaturePageSlug];
    return { href: item.path, label: item.label, description: item.description };
  });
  const compareLinks = page.relatedCompare.map((slug) => {
    const item = comparePages[slug as ComparePageSlug];
    return { href: item.path, label: item.label, description: item.description };
  });
  const platformLinks = page.relatedPlatforms.map((slug) => {
    const item = platformPages[slug as PlatformPageSlug];
    return { href: item.path, label: item.label, description: item.description };
  });

  return [
    { href: "/answers", label: "Answers Hub", description: "Return to all live cam site answers." },
    ...bestLinks,
    ...guideLinks,
    ...featureLinks,
    ...compareLinks,
    ...platformLinks,
    { href: "/models", label: "Live Models", description: "Preview current live model availability." },
  ];
}

export function AnswerPageLayout({ page }: { page: AnswerPageData }) {
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
          description: page.directAnswer,
          path: page.path,
          items: page.compare.map((item) => ({
            href: page.path,
            label: item,
          })),
        })}
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pt-16">
        <Breadcrumbs
          items={[
            { label: SITE_NAME, href: "/" },
            { label: "Answers", href: "/answers" },
            { label: page.label },
          ]}
        />
        <div className="max-w-5xl">
          <div className="mb-4 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Quick answer
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            {page.h1}
          </h1>
          <p className="mt-6 text-base leading-7 text-white/72 md:text-lg md:leading-8">
            {page.intro}
          </p>
        </div>
      </section>

      <FeaturedModelsSection
        compact
        limit={4}
        seed={`answer-${page.slug}`}
        title={`Preview Live Models While Reading: ${page.label}`}
        description="Use current live model previews as one browsing signal while you compare access, signup expectations, privacy, mobile usability, and platform fit."
      />

      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-16 pt-5">
        <section className="rounded-[1.6rem] border border-[#7C5CFF]/24 bg-[linear-gradient(180deg,rgba(124,92,255,0.12),rgba(255,255,255,0.028))] p-5 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Direct answer
          </div>
          <p className="mt-3 text-xl font-semibold leading-8 text-white">
            {page.directAnswer}
          </p>
        </section>

        <AnswerDecisionTable page={page} />

        <section className="grid items-stretch gap-4 md:grid-cols-2">
          <article className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-5 md:p-6">
            <h2 className="text-2xl font-semibold text-white">
              Expanded explanation
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-white/64">
              {page.explanation.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
          <article className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-5 md:p-6">
            <h2 className="text-2xl font-semibold text-white">
              Privacy or payment notes
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/64">
              {page.considerations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.028))] p-5 md:p-6">
          <h2 className="text-3xl font-semibold text-white">
            What users should compare next
          </h2>
          <div className="mt-6 grid items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {page.compare.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-6 text-white/66"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <AnswerCtaPanel page={page} />
        <AnswerFaqBlock faqs={page.faqs} />
        <LinkGrid title="Related answer, guide, and comparison pages" links={getRelatedLinks(page)} />
      </section>
    </main>
  );
}

