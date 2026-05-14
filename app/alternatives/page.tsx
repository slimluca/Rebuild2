import type { Metadata } from "next";
import Link from "next/link";

import FeaturedModelsSection from "@/components/live/FeaturedModelsSection";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { alternativePageLinks } from "@/lib/alternative-pages";
import { bestPageLinks } from "@/lib/best-pages";
import { categoryPageLinks } from "@/lib/category-pages";
import { comparePageLinks } from "@/lib/compare-pages";
import {
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
  SITE_NAME,
} from "@/lib/seo";

const title = "Live Cam Site Alternatives by User Need";
const description =
  "Compare live cam site alternatives by platform style, private cam needs, free browsing, mobile usability, verified models, HD streams, no-card access, and beginner-friendly layout.";

const faqs = [
  {
    question: "How should I compare live cam site alternatives?",
    answer:
      "Start with the need that matters most: free browsing, private features, premium access, mobile usability, verified model signals, no-signup viewing, or no-card browsing.",
  },
  {
    question: "Are alternatives pages ranked?",
    answer:
      "No. WebcamSex.me alternatives pages are decision guides, not fake rankings or review pages.",
  },
  {
    question: "When should I choose a premium platform?",
    answer:
      "A premium platform may make sense when you want more guided private cam context, verified model signals, and clearer paid feature expectations.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/alternatives",
});

export default function AlternativesHubPage() {
  return (
    <main className="min-h-screen text-white">
      <JsonLd data={buildWebPageJsonLd({ title, description, path: "/alternatives" })} />
      <JsonLd
        data={buildItemListJsonLd({
          name: "Live cam site alternatives",
          description,
          path: "/alternatives",
          items: alternativePageLinks,
        })}
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pt-16">
        <Breadcrumbs
          items={[
            { label: SITE_NAME, href: "/" },
            { label: "Alternatives" },
          ]}
        />
        <div className="max-w-5xl">
          <div className="mb-4 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Alternatives hub
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-7 text-white/72 md:text-lg md:leading-8">
            Use this hub to compare alternatives by user need: LiveJasmin
            alternatives, Chaturbate alternatives, Stripchat alternatives,
            BongaCams alternatives, free cam sites, private cam sites, premium
            cam sites, mobile cam sites, verified cam models, HD cam sites,
            cam sites without credit card prompts, and beginner friendly cam
            site paths.
          </p>
        </div>
      </section>

      <FeaturedModelsSection
        compact
        limit={4}
        seed="alternatives-hub-live-models"
        title="Preview Live Models While Comparing Alternatives"
        description="Use live previews as one current browsing signal while you compare alternatives by platform style, access expectations, privacy, and mobile usability."
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 pt-6">
        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Alternatives cards
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Choose the alternatives path that matches your need
          </h2>
          <div className="mt-6 grid items-stretch gap-4 md:grid-cols-2">
            {alternativePageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="h-full rounded-2xl border border-white/10 bg-black/24 p-5 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.045]"
              >
                <h3 className="text-xl font-semibold text-white">{link.label}</h3>
                <p className="mt-3 text-sm leading-6 text-white/64">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid items-stretch gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Compare alternatives safely
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Compare privacy pages, account prompts, payment expectations,
              support visibility, and what can be browsed before signup.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              When premium makes sense
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Premium cam sites may suit users who care about private cam
              context, verified model signals, HD quality, and clearer paid
              feature expectations.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              When free communities fit
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Free cam communities may fit users who want public-room browsing,
              no-signup viewing, no-card comparison, and low-commitment
              previewing before joining.
            </p>
          </article>
        </section>

        <section className="rounded-3xl border border-[#7C5CFF]/24 bg-[linear-gradient(135deg,rgba(124,92,255,0.22),rgba(5,5,7,0.94)_50%,rgba(0,171,255,0.1))] p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Next step
          </div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white">
            Compare alternatives by the experience you want.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
            Preview live model availability, then compare free, private,
            premium, mobile, verified, and beginner-friendly platform paths.
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
              Preview Live Models
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <JsonLd data={buildFaqJsonLd({ questions: faqs })} />
          <h2 className="text-3xl font-semibold text-white">
            Alternatives FAQ
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
              { href: "/platforms", label: "Platforms", description: "Compare major platform guides." },
              { href: "/best", label: "Best", description: "Choose by user need." },
              { href: "/compare", label: "Compare", description: "Compare platform pairs and platform types." },
              { href: "/guides", label: "Guides", description: "Read practical explainers before signup." },
              { href: "/categories", label: "Categories", description: "Browse live model categories." },
              ...bestPageLinks.slice(0, 2),
              ...comparePageLinks.slice(0, 2),
              ...categoryPageLinks.slice(0, 2),
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="h-full rounded-2xl border border-white/10 bg-black/24 p-4 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.045]"
              >
                <h3 className="text-base font-semibold text-white">{link.label}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
