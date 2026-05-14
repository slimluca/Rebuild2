import type { Metadata } from "next";
import Link from "next/link";

import FeaturedModelsSection from "@/components/live/FeaturedModelsSection";
import JsonLd from "@/components/seo/JsonLd";
import {
  buildOrganizationJsonLd,
  buildWebPageJsonLd,
  buildWebSiteJsonLd,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

const homepageDescription =
  "Compare live cam sites by privacy, mobile experience, free access, verified models, HD quality, and beginner friendly features before choosing where to sign up.";

const quickChoices = [
  {
    title: "Free Access",
    text: "Start with platforms that let you browse public rooms before you decide whether to create an account.",
  },
  {
    title: "Private Sessions",
    text: "Compare how platforms handle private rooms, paid access, performer controls, and session clarity.",
  },
  {
    title: "Mobile Use",
    text: "Prioritize sites with clean mobile navigation, fast room loading, and simple account flows.",
  },
  {
    title: "Verified Models",
    text: "Look for platforms that give users clearer signals around performer verification and account standards.",
  },
  {
    title: "HD Quality",
    text: "Consider stream quality, preview reliability, room stability, and how easy it is to inspect before joining.",
  },
  {
    title: "Beginner Friendly",
    text: "Choose sites with predictable navigation, clear pricing prompts, and fewer confusing upgrade paths.",
  },
];

const decisionCategories = [
  "Private cam platforms",
  "Free browsing options",
  "Mobile-first live cam sites",
  "Verified model platforms",
  "HD stream experiences",
  "Premium cam platforms",
];

export const metadata: Metadata = {
  title: {
    absolute: `Best Live Cam Sites Compared by Need | ${SITE_NAME}`,
  },
  description: homepageDescription,
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: `Best Live Cam Sites Compared by Need | ${SITE_NAME}`,
    description: homepageDescription,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Live Cam Sites Compared by Need | ${SITE_NAME}`,
    description: homepageDescription,
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">
      <JsonLd data={buildOrganizationJsonLd()} />
      <JsonLd data={buildWebSiteJsonLd()} />
      <JsonLd
        data={buildWebPageJsonLd({
          title: "Best Live Cam Sites Compared by Need",
          description: homepageDescription,
          path: "/",
        })}
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-14 md:pb-10 md:pt-20">
        <div className="max-w-7xl">
          <div className="mb-5 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Compare the Best Live Cam Sites Before You Join
          </div>
          <h1 className="max-w-none text-4xl font-semibold leading-tight text-white md:text-6xl md:leading-[1.03] lg:whitespace-nowrap lg:text-[clamp(2.75rem,4.4vw,4rem)]">
            Best Live Cam Sites Compared by Need
          </h1>
          <p className="mt-6 max-w-7xl text-base leading-7 text-white/72 md:text-lg md:leading-8">
            WebcamSex.me is a cam site comparison hub for adults comparing the
            best live cam sites before they create an account. Use it to weigh
            private cam sites, free cam sites, mobile cam sites, verified cam
            models, HD cam sites, safe cam platforms, beginner friendly cam
            sites, cam sites without credit card prompts, and cam sites with no
            signup viewing in one practical decision flow.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/go/signup"
              prefetch={false}
              className="inline-flex justify-center rounded-full bg-[#7C5CFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(124,92,255,0.38)] transition hover:bg-[#8B70FF]"
            >
              Start Comparing Platforms
            </Link>
            <Link
              href="/go/random"
              prefetch={false}
              className="inline-flex justify-center rounded-full border border-[#8FB7FF]/32 bg-[#8FB7FF]/10 px-6 py-3 text-sm font-semibold text-[#C8DAFF] transition hover:border-[#8FB7FF]/52 hover:bg-[#8FB7FF]/15"
            >
              Preview Live Rooms
            </Link>
          </div>
        </div>
      </section>

      <div id="live-models">
        <FeaturedModelsSection
          limit={8}
          seed="homepage-live-models"
          title="Explore Live Models While Comparing Platforms"
          description="Use live room previews as one signal while you compare platform fit. Availability can change, so treat the grid as a current browsing window rather than a ranking."
        />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-8 md:py-10">
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
              How to compare
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Compare live cam sites by the decision you need to make
            </h2>
          </div>
          <div className="space-y-4 text-base leading-7 text-white/68">
            <p>
              A useful comparison starts with your first constraint. If you want
              to browse before registration, compare free access, no-signup
              viewing, and no-credit-card expectations. If you care about a
              more controlled experience, compare private cam features,
              verified model signals, account prompts, and how clearly the
              platform explains paid access.
            </p>
            <p>
              WebcamSex.me organizes recommendations by user need instead of
              forcing every visitor into the same route. That makes it easier to
              compare mobile usability, HD stream expectations, privacy
              comfort, platform style, and beginner-friendly navigation before
              you decide where to sign up.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:py-10">
        <div className="grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {quickChoices.map((choice) => (
            <article
              key={choice.title}
              className="h-full rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.055]"
            >
              <h2 className="text-lg font-semibold text-white">{choice.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/64">{choice.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:py-10">
        <div className="mb-5">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Why compare first
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Better platform choices start with better filters
          </h2>
        </div>
        <div className="grid items-stretch gap-4 md:grid-cols-3">
          {[
            "Compare access rules, signup prompts, and what you can see before registration so the first click is not a guess.",
            "Match platform style to your comfort level, whether you want free browsing, private features, mobile use, or verified model signals.",
            "Use Best pages for category decisions and Compare pages when you are weighing premium versus free or public versus private cam site styles.",
          ].map((text) => (
            <div
              key={text}
              className="h-full rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-sm leading-6 text-white/66"
            >
              {text}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:py-10">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
              Featured decision categories
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Compare platforms by user need
            </h2>
          </div>
          <Link
            href="/go/livejasmin"
            prefetch={false}
            className="inline-flex rounded-full border border-[#8FB7FF]/32 bg-[#8FB7FF]/10 px-5 py-2.5 text-sm font-semibold text-[#C8DAFF] transition hover:border-[#8FB7FF]/50 hover:bg-[#8FB7FF]/15"
          >
            View Featured Platform
          </Link>
        </div>
        <div className="grid items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {decisionCategories.map((category) => (
            <div
              key={category}
              className="h-full rounded-2xl border border-[#7C5CFF]/20 bg-black/24 p-4 text-sm font-semibold text-white/82"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:py-10">
        <div className="grid items-stretch gap-4 md:grid-cols-3">
          {[
            {
              title: "Best Pages",
              text: "Use the Best section to compare free, private, mobile, verified, HD, no-signup, no-card, and beginner-friendly cam site paths.",
            },
            {
              title: "Compare Pages",
              text: "Use the Compare section when you need practical differences between platform styles, account expectations, paid prompts, and browsing flows.",
            },
            {
              title: "Platform Guides",
              text: "Use platform guides when you want neutral decision context for LiveJasmin, Chaturbate, Stripchat, and BongaCams before joining.",
            },
            {
              title: "Alternatives",
              text: "Use alternatives pages when you want to compare premium, free, private, and mobile cam site paths by user need.",
            },
            {
              title: "Feature Guides",
              text: "Use feature pages to compare free preview access, privacy controls, payment awareness, HD quality, and mobile usability.",
            },
            {
              title: "Answers",
              text: "Use answer pages for quick context on free access, signup, credit cards, privacy, credits, HD streaming, and model availability.",
            },
            {
              title: "Trust Context",
              text: "Use policy and resource pages to understand affiliate routing, editorial standards, privacy considerations, and why no fake ratings are used.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6"
            >
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/64">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 pt-8 md:pb-16 md:pt-10">
        <div className="rounded-3xl border border-[#7C5CFF]/24 bg-[linear-gradient(135deg,rgba(124,92,255,0.22),rgba(5,5,7,0.94)_48%,rgba(0,171,255,0.12))] p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Ready to compare
          </div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white md:text-4xl">
            Start with the platform signals that matter to you.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
            Compare privacy, mobile usability, free room access, verified model
            standards, and premium features before creating an account.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/go/signup"
              prefetch={false}
              className="inline-flex justify-center rounded-full bg-[#7C5CFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(124,92,255,0.38)] transition hover:bg-[#8B70FF]"
            >
              Compare Before Joining
            </Link>
            <Link
              href="/go/random"
              prefetch={false}
              className="inline-flex justify-center rounded-full border border-[#8FB7FF]/32 bg-[#8FB7FF]/10 px-6 py-3 text-sm font-semibold text-[#C8DAFF] transition hover:border-[#8FB7FF]/52 hover:bg-[#8FB7FF]/15"
            >
              Open Live Preview
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
