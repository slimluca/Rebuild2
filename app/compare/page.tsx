import type { Metadata } from "next";
import Link from "next/link";

import { ComparisonFaqBlock, RelatedComparisonLinks } from "@/components/compare/CompareComponents";
import FeaturedModelsSection from "@/components/live/FeaturedModelsSection";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import InternalLinkBlock from "@/components/site/InternalLinkBlock";
import { bestPageLinks } from "@/lib/best-pages";
import { comparePageLinks } from "@/lib/compare-pages";
import { highIntentLinks, platformAlternativeLinks } from "@/lib/internal-links";
import {
  buildItemListJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
  SITE_NAME,
} from "@/lib/seo";

const title = "Compare Live Cam Sites Before You Join";
const description =
  "Compare live cam sites, platform types, premium versus free experiences, private cam options, signup expectations, mobile usability, and privacy considerations before choosing where to join.";

const hubFaqs = [
  {
    question: "How should I compare live cam sites?",
    answer:
      "Compare platform style, browsing access, signup expectations, private feature prompts, mobile usability, payment clarity, and privacy controls before joining.",
  },
  {
    question: "Does WebcamSex.me score or rate platforms?",
    answer:
      "No. WebcamSex.me avoids unsupported scores, stars, and rankings. The comparison pages explain decision factors so users can choose based on their needs.",
  },
  {
    question: "Should I start with platform comparisons or best-by-need pages?",
    answer:
      "Use platform comparisons when deciding between names or site types. Use Best pages when your need is clearer, such as free browsing, private features, mobile use, or beginner-friendly access.",
  },
];

const decisionRows = [
  {
    comparison: "LiveJasmin vs Chaturbate",
    suited: "Premium private context versus broad public community browsing",
    access: "Compare guided premium prompts with free public-room discovery",
    privacy: "Review account controls, public-room exposure, and paid feature clarity",
    next: "/compare/livejasmin-vs-chaturbate",
  },
  {
    comparison: "Premium vs Free Cam Sites",
    suited: "Users deciding between controlled access and low-commitment previewing",
    access: "Compare paid feature timing with public browsing limits",
    privacy: "Review billing prompts and what data is involved before signup",
    next: "/compare/premium-vs-free-cam-sites",
  },
  {
    comparison: "Private vs Free Cam Sites",
    suited: "Users deciding between session control and platform exploration",
    access: "Compare private feature prompts with no-signup or free preview access",
    privacy: "Review session terms, account settings, and public browsing comfort",
    next: "/compare/private-cam-sites-vs-free-cam-sites",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/compare",
  adult: true,
});

export default function CompareHubPage() {
  return (
    <main className="min-h-screen text-white">
      <JsonLd data={buildWebPageJsonLd({ title, description, path: "/compare" })} />
      <JsonLd
        data={buildItemListJsonLd({
          name: "Live cam site comparisons",
          description,
          path: "/compare",
          items: comparePageLinks,
        })}
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pt-16">
        <Breadcrumbs
          items={[
            { label: SITE_NAME, href: "/" },
            { label: "Compare" },
          ]}
        />
        <div className="max-w-5xl">
          <div className="mb-4 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Compare cam platforms
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-7 text-white/72 md:text-lg md:leading-8">
            Use these comparisons when you are deciding between live cam
            platforms, platform types, or paid versus free experiences. The goal
            is to understand browsing access, signup expectations, private
            feature prompts, mobile usability, privacy considerations, and the
            kind of user each option may suit.
          </p>
          <p className="mt-4 text-base leading-7 text-white/72 md:text-lg md:leading-8">
            A fair cam platform comparison should explain how each option feels
            before registration, when paid or private features become relevant,
            how public-room browsing differs from premium access, and what
            privacy or payment questions you should answer before joining.
          </p>
        </div>
      </section>

      <FeaturedModelsSection
        compact
        limit={4}
        seed="compare-hub-live-models"
        title="Preview Live Models While Comparing Cam Platforms"
        description="Use current live previews near the top of the comparison hub while you weigh public browsing, premium access, signup expectations, and mobile usability."
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 pt-6">
        <InternalLinkBlock
          eyebrow="Popular comparisons"
          title="Popular Cam Site Comparisons"
          description="Move from platform-vs-platform decisions into the deeper pages that explain free access, private access, credit card prompts, and alternatives."
          links={[
            ...comparePageLinks.filter((link) =>
              [
                "/compare/livejasmin-vs-chaturbate",
                "/compare/premium-vs-free-cam-sites",
                "/compare/private-cam-sites-vs-free-cam-sites",
              ].includes(link.href),
            ),
            ...platformAlternativeLinks,
            ...highIntentLinks.slice(0, 3),
          ]}
        />

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Quick comparison cards
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Choose the comparison that matches your decision
          </h2>
          <div className="mt-6 grid items-stretch gap-4 md:grid-cols-2">
            {comparePageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="h-full rounded-2xl border border-white/10 bg-black/24 p-5 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.045]"
              >
                <h2 className="text-xl font-semibold text-white">{link.label}</h2>
                {link.description ? (
                  <p className="mt-3 text-sm leading-6 text-white/64">
                    {link.description}
                  </p>
                ) : null}
              </Link>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
          <div className="p-6 md:p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
              Decision table
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Compare by user need, not by unsupported scores
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-t border-white/10 text-left text-sm">
              <thead className="bg-black/28 text-white/78">
                <tr>
                  <th className="px-5 py-4 font-semibold">Comparison</th>
                  <th className="px-5 py-4 font-semibold">Best suited for</th>
                  <th className="px-5 py-4 font-semibold">Browsing access</th>
                  <th className="px-5 py-4 font-semibold">Privacy notes</th>
                  <th className="px-5 py-4 font-semibold">Good next step</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/64">
                {decisionRows.map((row) => (
                  <tr key={row.comparison}>
                    <td className="px-5 py-4 font-semibold text-white/82">
                      {row.comparison}
                    </td>
                    <td className="px-5 py-4">{row.suited}</td>
                    <td className="px-5 py-4">{row.access}</td>
                    <td className="px-5 py-4">{row.privacy}</td>
                    <td className="px-5 py-4">
                      <Link
                        href={row.next}
                        className="font-semibold text-[#8FB7FF] transition hover:text-[#C8DAFF]"
                      >
                        Open comparison
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid items-stretch gap-4 md:grid-cols-3">
          <article className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              How to use these comparisons
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Start with the comparison that matches your decision. If you are
              choosing between names, use a platform-vs-platform page. If you
              are choosing by browsing style, use premium versus free or private
              versus free guidance.
            </p>
          </article>
          <article className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Safety and privacy basics
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Compare what is visible before signup, when payment prompts
              appear, whether account controls are clear, and how each platform
              explains privacy and paid features.
            </p>
          </article>
          <article className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Methodology and trust
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              These pages use decision criteria, not unsupported testing claims or
              ratings. Read the{" "}
              <Link
                href="/editorial-policy"
                className="text-[#8FB7FF] transition hover:text-[#C8DAFF]"
              >
                editorial policy
              </Link>{" "}
              for the content standards behind the section.
            </p>
          </article>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Fair comparison
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Compare platform style before comparing brand names
          </h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-white/68">
            <p>
              Premium platforms, free cam communities, private cam experiences,
              and large public-room sites can all serve different needs. A
              strong comparison looks at the browsing path first: what you can
              see before signup, whether mobile navigation is usable, how
              private features are explained, and whether payment prompts are
              clear.
            </p>
            <p>
              Use the platform-versus-platform pages when you already have two
              names in mind. Use the premium-versus-free and private-versus-free
              pages when you are still deciding what kind of live cam site fits
              your comfort level.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-[#7C5CFF]/24 bg-[linear-gradient(135deg,rgba(124,92,255,0.22),rgba(5,5,7,0.94)_48%,rgba(0,171,255,0.12))] p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Compare next
          </div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white">
            Compare your options before creating an account.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
            Use an internal route to preview live platform flow, then return to
            the comparison pages to weigh signup expectations, privacy, and
            mobile usability.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/go/signup"
              prefetch={false}
              className="inline-flex justify-center rounded-full bg-[#7C5CFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(124,92,255,0.38)] transition hover:bg-[#8B70FF]"
            >
              Compare Your Options
            </Link>
            <Link
              href="/go/random"
              prefetch={false}
              className="inline-flex justify-center rounded-full border border-[#8FB7FF]/32 bg-[#8FB7FF]/10 px-6 py-3 text-sm font-semibold text-[#C8DAFF] transition hover:border-[#8FB7FF]/52 hover:bg-[#8FB7FF]/15"
            >
              View Live Models
            </Link>
          </div>
        </section>

        <ComparisonFaqBlock faqs={hubFaqs} />
        <RelatedComparisonLinks
          title="Related best cam site guides"
          links={[
            ...bestPageLinks.slice(0, 6),
            {
              href: "/platforms",
              label: "Platform Guides",
              description: "Read neutral platform guides before choosing where to join.",
            },
            {
              href: "/alternatives",
              label: "Alternatives",
              description: "Compare platform alternatives by user need.",
            },
            {
              href: "/features",
              label: "Features",
              description: "Compare platform features such as previews, privacy, and mobile fit.",
            },
            {
              href: "/resources",
              label: "Resources",
              description: "Review WebcamSex.me resources and trust notes.",
            },
            {
              href: "/editorial-policy",
              label: "Editorial Policy",
              description: "See how comparison content and affiliate routes are handled.",
            },
          ]}
        />
      </section>
    </main>
  );
}
