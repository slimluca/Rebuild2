import type { Metadata } from "next";
import Link from "next/link";

import FeaturedModelsSection from "@/components/live/FeaturedModelsSection";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { alternativePageLinks } from "@/lib/alternative-pages";
import { bestPageLinks } from "@/lib/best-pages";
import { comparePageLinks } from "@/lib/compare-pages";
import { featurePageLinks } from "@/lib/feature-pages";
import { guidePageLinks } from "@/lib/guide-pages";
import { platformPageLinks } from "@/lib/platform-pages";
import {
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
  SITE_NAME,
} from "@/lib/seo";

const title = "Live Cam Site Features to Compare Before Joining";
const description =
  "Compare live cam site features such as free preview access, private show options, no-signup viewing, no-card browsing, mobile usability, HD quality, verified model signals, privacy controls, and payment awareness.";

const faqs = [
  {
    question: "Which live cam site features should I compare first?",
    answer:
      "Start with access and safety basics: free preview access, no-signup viewing, no-card browsing, privacy controls, payment awareness, and mobile usability.",
  },
  {
    question: "Are feature pages the same as best pages?",
    answer:
      "No. Feature pages explain individual decision factors, while Best pages organize platform choices by broader user need.",
  },
  {
    question: "Do these pages rank platforms?",
    answer:
      "No. WebcamSex.me uses feature-based decision guidance instead of fake scores, ratings, or rankings.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/features",
});

export default function FeaturesHubPage() {
  return (
    <main className="min-h-screen text-white">
      <JsonLd data={buildWebPageJsonLd({ title, description, path: "/features" })} />
      <JsonLd
        data={buildItemListJsonLd({
          name: "Live cam site features",
          description,
          path: "/features",
          items: featurePageLinks,
        })}
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pt-16">
        <Breadcrumbs
          items={[
            { label: SITE_NAME, href: "/" },
            { label: "Features" },
          ]}
        />
        <div className="max-w-5xl">
          <div className="mb-4 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Feature comparison
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-7 text-white/72 md:text-lg md:leading-8">
            Compare live cam site features before choosing where to sign up.
            This hub focuses on practical decision factors such as free preview
            access, private show options, cam sites no signup, cam sites
            without credit card prompts, mobile friendly cam sites, HD cam
            sites, verified cam models, privacy controls, account safety,
            payment awareness, model discovery, and beginner friendly cam site
            layouts.
          </p>
        </div>
      </section>

      <FeaturedModelsSection
        compact
        limit={4}
        seed="features-hub-live-models"
        title="Preview Live Models While Comparing Site Features"
        description="Use current live model previews as one browsing signal while you compare platform features, access expectations, privacy, and mobile usability."
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 pt-6">
        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Feature cards
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Compare by the feature that matters most
          </h2>
          <div className="mt-6 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featurePageLinks.map((link) => (
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

        <section className="grid items-stretch gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Compare features in context
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              A single feature rarely decides everything. Compare how the
              feature affects signup, mobile use, privacy, model discovery, and
              whether free or paid areas are clear.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Privacy and payment basics
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Read privacy policies, account prompts, payment terms, and
              confirmation steps before creating an account or using private
              or premium features.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Use decision pages next
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              After learning a feature, use Best, Compare, Guides, Platforms,
              Alternatives, and Models pages to connect that feature to a
              platform choice.
            </p>
          </article>
        </section>

        <section className="rounded-3xl border border-[#7C5CFF]/24 bg-[linear-gradient(135deg,rgba(124,92,255,0.22),rgba(5,5,7,0.94)_50%,rgba(0,171,255,0.1))] p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Next step
          </div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white">
            Compare features before you choose a platform.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
            Preview live availability, then compare access, privacy, mobile
            usability, HD quality, verified model signals, and payment
            expectations before joining.
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
          <h2 className="text-3xl font-semibold text-white">Features FAQ</h2>
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
              { href: "/best", label: "Best", description: "Compare cam sites by user need." },
              { href: "/compare", label: "Compare", description: "Compare platform pairs and platform types." },
              { href: "/guides", label: "Guides", description: "Read practical explainers before signup." },
              { href: "/platforms", label: "Platforms", description: "Read neutral platform guides." },
              { href: "/alternatives", label: "Alternatives", description: "Compare alternatives by platform style." },
              { href: "/answers", label: "Answers", description: "Get quick answers to common live cam site questions." },
              { href: "/models", label: "Models", description: "Preview current live models." },
              ...bestPageLinks.slice(0, 2),
              ...comparePageLinks.slice(0, 2),
              ...guidePageLinks.slice(0, 2),
              ...platformPageLinks.slice(0, 2),
              ...alternativePageLinks.slice(0, 2),
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
