import type { Metadata } from "next";
import Link from "next/link";

import FeaturedModelsSection from "@/components/live/FeaturedModelsSection";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { bestPageLinks } from "@/lib/best-pages";
import { comparePageLinks } from "@/lib/compare-pages";
import { guidePageLinks } from "@/lib/guide-pages";
import {
  buildItemListJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
  SITE_NAME,
} from "@/lib/seo";

const title = "Live Cam Site Guides for Smarter Platform Choices";
const description =
  "Read live cam site guides about cam site comparison, privacy, signup expectations, mobile usability, pricing basics, free access, verified models, and beginner-friendly platform selection.";

const hubFaqs = [
  {
    question: "What should I read before choosing a cam site?",
    answer:
      "Start with guides about how to choose a cam site, safety checks, free access, pricing, mobile usability, no-signup viewing, no-card browsing, and verified model signals.",
  },
  {
    question: "Are these guides platform reviews?",
    answer:
      "No. WebcamSex.me guides are decision-help resources. They do not use fake ratings, fake reviews, or unsupported testing claims.",
  },
  {
    question: "How do guides connect to Best and Compare pages?",
    answer:
      "Guides explain how to evaluate a topic, Best pages organize choices by user need, and Compare pages help when you are deciding between platform styles or specific platforms.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/guides",
});

export default function GuidesHubPage() {
  return (
    <main className="min-h-screen text-white">
      <JsonLd data={buildWebPageJsonLd({ title, description, path: "/guides" })} />
      <JsonLd
        data={buildItemListJsonLd({
          name: "Live cam site guides",
          description,
          path: "/guides",
          items: guidePageLinks,
        })}
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pt-16">
        <Breadcrumbs
          items={[
            { label: SITE_NAME, href: "/" },
            { label: "Guides" },
          ]}
        />
        <div className="max-w-5xl">
          <div className="mb-4 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Live cam guides
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-7 text-white/72 md:text-lg md:leading-8">
            WebcamSex.me guides help users understand cam site comparison,
            privacy, signup expectations, mobile usability, live cam pricing,
            free access, verified cam models, and beginner-friendly platform
            selection before choosing where to join.
          </p>
        </div>
      </section>

      <FeaturedModelsSection
        compact
        limit={4}
        seed="guides-hub-live-models"
        title="Explore Live Models While Reading the Guides"
        description="Preview live model availability while you learn how to compare platform access, privacy, pricing, and mobile usability."
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 pt-6">
        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Guide library
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Choose the guide that matches your question
          </h2>
          <div className="mt-6 grid items-stretch gap-4 md:grid-cols-2">
            {guidePageLinks.map((link) => (
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

        <section className="grid items-stretch gap-4 md:grid-cols-3">
          <article className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              How to use these guides
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Read a guide when you need to understand a topic before choosing
              a platform. Then use Best pages for category choices and Compare
              pages for platform-style decisions.
            </p>
          </article>
          <article className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Popular questions
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Common questions include whether cam sites are safe, what no
              signup viewing means, how free access works, and when payment
              details may be requested.
            </p>
          </article>
          <article className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Trust and methodology
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              These guides avoid fake ratings and review schema. They explain
              practical decision factors and link to the editorial policy when
              methodology or affiliate routing matters.
            </p>
          </article>
        </section>

        <section className="rounded-3xl border border-[#7C5CFF]/24 bg-[linear-gradient(135deg,rgba(124,92,255,0.22),rgba(5,5,7,0.94)_48%,rgba(0,171,255,0.12))] p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Next step
          </div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white">
            Use the guides before choosing a platform.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
            Compare safety, pricing, mobile usability, verified profiles, and
            signup expectations before opening a live platform route.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/go/signup"
              prefetch={false}
              className="inline-flex justify-center rounded-full bg-[#7C5CFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(124,92,255,0.38)] transition hover:bg-[#8B70FF]"
            >
              Compare Live Cam Options
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

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: hubFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }}
          />
          <h2 className="text-3xl font-semibold text-white">
            Popular Questions About Live Cam Platforms
          </h2>
          <div className="mt-6 grid gap-4">
            {hubFaqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-white/10 bg-black/24 p-5"
              >
                <summary className="cursor-pointer text-base font-semibold text-white">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-white/64">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <h2 className="text-2xl font-semibold text-white">Related sections</h2>
          <div className="mt-5 grid items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { href: "/best", label: "Best Cam Sites", description: "Compare cam site categories by user need." },
              { href: "/compare", label: "Compare Sites", description: "Compare platforms and platform types before joining." },
              { href: "/resources", label: "Resources", description: "Review site resources and trust notes." },
              { href: "/editorial-policy", label: "Editorial Policy", description: "Understand content standards and affiliate routing." },
              ...bestPageLinks.slice(0, 2),
              ...comparePageLinks.slice(0, 2),
            ].map((link) => (
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
      </section>
    </main>
  );
}
