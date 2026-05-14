import type { Metadata } from "next";
import Link from "next/link";

import FeaturedModelsSection from "@/components/live/FeaturedModelsSection";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { alternativePageLinks } from "@/lib/alternative-pages";
import { bestPageLinks } from "@/lib/best-pages";
import { comparePageLinks } from "@/lib/compare-pages";
import { platformPageLinks } from "@/lib/platform-pages";
import {
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
  SITE_NAME,
} from "@/lib/seo";

const title = "Live Cam Platform Guides Before You Join";
const description =
  "Compare LiveJasmin, Chaturbate, Stripchat, and BongaCams by platform style, signup expectations, free versus premium access, mobile usability, privacy, and alternatives.";

const faqs = [
  {
    question: "Are these platform pages reviews?",
    answer:
      "No. They are neutral platform guides that explain comparison factors without fake ratings, fake rankings, or unsupported testing claims.",
  },
  {
    question: "What should I compare before joining a cam platform?",
    answer:
      "Compare platform style, free preview access, private feature prompts, mobile usability, payment expectations, privacy policies, and alternatives.",
  },
  {
    question: "Should I compare alternatives before choosing?",
    answer:
      "Yes. Alternatives help you decide whether a premium platform, free cam community, private cam site, or mobile-first option fits better.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/platforms",
});

export default function PlatformsHubPage() {
  return (
    <main className="min-h-screen text-white">
      <JsonLd data={buildWebPageJsonLd({ title, description, path: "/platforms" })} />
      <JsonLd
        data={buildItemListJsonLd({
          name: "Live cam platform guides",
          description,
          path: "/platforms",
          items: platformPageLinks,
        })}
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pt-16">
        <Breadcrumbs
          items={[
            { label: SITE_NAME, href: "/" },
            { label: "Platforms" },
          ]}
        />
        <div className="max-w-5xl">
          <div className="mb-4 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Platform guides
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-7 text-white/72 md:text-lg md:leading-8">
            Use these platform guides to understand major live cam platforms
            without fake ratings or fake reviews. Compare platform style,
            free versus premium access, private cam expectations, verified
            model signals, mobile usability, privacy, payment prompts, and
            alternatives before choosing where to sign up.
          </p>
        </div>
      </section>

      <FeaturedModelsSection
        compact
        limit={4}
        seed="platforms-hub-live-models"
        title="Preview Live Models While Comparing Platforms"
        description="Use current live model previews as one signal while you compare platform style, signup expectations, privacy, mobile usability, and alternatives."
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 pt-6">
        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Platform guide cards
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Compare major platform styles
          </h2>
          <div className="mt-6 grid items-stretch gap-4 md:grid-cols-2">
            {platformPageLinks.map((link) => (
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
              Compare fairly
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Start with access style and signup expectations instead of brand
              familiarity. A fair cam site comparison explains what you can see
              before signup and where paid or private features begin.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Free vs premium styles
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Free cam communities can be useful for public browsing. Premium
              cam sites may suit users comparing verified model signals,
              private cam context, and more guided feature prompts.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Privacy and payment
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Compare privacy policies, account controls, payment prompts,
              no-signup viewing, and cam sites without credit card expectations
              before entering personal or billing information.
            </p>
          </article>
        </section>

        <section className="rounded-3xl border border-[#7C5CFF]/24 bg-[linear-gradient(135deg,rgba(124,92,255,0.22),rgba(5,5,7,0.94)_50%,rgba(0,171,255,0.1))] p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Next step
          </div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white">
            Compare platform guides with live availability.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
            Preview live model availability, then compare platform style,
            private access, mobile usability, and alternatives before joining.
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
            Platform Guide FAQ
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
              { href: "/alternatives", label: "Alternatives", description: "Compare alternatives by user need." },
              { href: "/compare", label: "Compare", description: "Compare platform pairs and platform types." },
              { href: "/best", label: "Best", description: "Choose by free, private, mobile, verified, or beginner needs." },
              { href: "/guides", label: "Guides", description: "Read practical explainers before signup." },
              { href: "/models", label: "Models", description: "Preview current live model availability." },
              ...alternativePageLinks.slice(0, 2),
              ...bestPageLinks.slice(0, 2),
              ...comparePageLinks.slice(0, 2),
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
