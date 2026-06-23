import type { Metadata } from "next";
import Link from "next/link";

import FeaturedModelsSection from "@/components/live/FeaturedModelsSection";
import JsonLd from "@/components/seo/JsonLd";
import InternalLinkBlock from "@/components/site/InternalLinkBlock";
import {
  modelOpportunityLinks,
  popularSearchLinks,
  toolDecisionLinks,
} from "@/lib/internal-links";
import {
  buildOrganizationJsonLd,
  buildWebPageJsonLd,
  buildWebSiteJsonLd,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

const homepageDescription =
  "Compare the best live cam sites by free access, private cam options, mobile usability, verified model signals, HD quality, no-signup viewing, and no-card browsing before you join.";

const decisionCards = [
  {
    label: "Free preview",
    href: "/best/free-cam-sites",
    metric: "Browse first",
    text: "Compare what is visible before registration, where prompts appear, and when free access stops.",
  },
  {
    label: "Private cam sites",
    href: "/best/private-cam-sites",
    metric: "More control",
    text: "Review private feature clarity, account expectations, payment prompts, and platform rules.",
  },
  {
    label: "No signup viewing",
    href: "/best/cam-sites-no-signup",
    metric: "Lower friction",
    text: "Check what users can preview before creating an account and what actions require signup.",
  },
  {
    label: "No credit card browsing",
    href: "/best/cam-sites-without-credit-card",
    metric: "Payment aware",
    text: "Compare platforms that let users browse before sharing payment information.",
  },
  {
    label: "Mobile friendly",
    href: "/best/mobile-cam-sites",
    metric: "Phone ready",
    text: "Prioritize responsive layouts, simple navigation, and stable live room previews.",
  },
  {
    label: "Verified models",
    href: "/best/verified-cam-sites",
    metric: "Trust signal",
    text: "Use verification language and profile clarity as decision signals, not guarantees.",
  },
  {
    label: "HD quality",
    href: "/best/hd-cam-sites",
    metric: "Clearer preview",
    text: "Compare stream quality expectations, device fit, and connection-dependent playback.",
  },
  {
    label: "Beginner friendly",
    href: "/best/cam-sites-for-beginners",
    metric: "Simple route",
    text: "Start with clear menus, slower signup decisions, privacy basics, and payment awareness.",
  },
];

const platformPaths = [
  {
    title: "Best pages",
    href: "/best",
    body: "Choose by user need: free, private, mobile, verified, no signup, no card, HD, or beginner friendly.",
  },
  {
    title: "Compare sites",
    href: "/compare",
    body: "Review side-by-side differences between platform styles, signup prompts, and paid feature expectations.",
  },
  {
    title: "Alternatives",
    href: "/alternatives",
    body: "Find alternative platform paths by premium, free, mobile, private, and brand-specific intent.",
  },
  {
    title: "Features",
    href: "/features",
    body: "Check privacy controls, account safety, payment awareness, HD quality, and model discovery tools.",
  },
  {
    title: "Answers",
    href: "/answers",
    body: "Get concise answers about credit cards, signup, private cam sites, free access, and live availability.",
  },
  {
    title: "Tools",
    href: "/tools",
    body: "Use checklists and selectors to decide what kind of cam platform fits before opening a signup route.",
  },
  {
    title: "Model categories",
    href: "/categories",
    body: "Browse current live model previews by practical category while remembering availability changes live.",
  },
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

      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_18%_0%,rgba(124,92,255,0.28),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(0,171,255,0.16),transparent_30%),linear-gradient(180deg,#050507_0%,#070711_70%,#050507_100%)]">
        <div className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pb-10 md:pt-16">
          <div className="grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] xl:items-end">
            <div className="min-w-0">
              <div className="mb-5 inline-flex max-w-full rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#C8DAFF]">
                Premium cam site comparison dashboard
              </div>
              <h1 className="max-w-6xl text-4xl font-semibold leading-tight text-white md:text-6xl md:leading-[1.02] 2xl:text-[4.15rem]">
                Best Live Cam Sites Compared by Need
              </h1>
              <p className="mt-6 max-w-5xl text-base leading-7 text-white/74 md:text-lg md:leading-8">
                WebcamSex.me helps adults compare the best live cam sites
                before signup by matching each decision to a real browsing
                need. Use this cam site comparison hub to weigh private cam
                sites, free cam sites, mobile cam sites, verified cam models,
                HD cam sites, cam sites no signup, cam sites without credit
                card requirements, and beginner friendly cam sites without
                relying on fake scores or generic rankings.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/tools/cam-site-chooser"
                  className="inline-flex justify-center rounded-full bg-[#7C5CFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(124,92,255,0.38)] transition hover:bg-[#8B70FF]"
                >
                  Use the Cam Site Chooser
                </Link>
                <Link
                  href="/go/signup"
                  prefetch={false}
                  className="inline-flex justify-center rounded-full border border-[#8FB7FF]/32 bg-[#8FB7FF]/10 px-6 py-3 text-sm font-semibold text-[#C8DAFF] transition hover:border-[#8FB7FF]/52 hover:bg-[#8FB7FF]/15"
                >
                  Compare & Join
                </Link>
                <Link
                  href="/go/become-model"
                  prefetch={false}
                  className="inline-flex justify-center rounded-full border border-white/12 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white/82 transition hover:border-white/24 hover:bg-white/[0.09]"
                >
                  Become a Model
                </Link>
              </div>
            </div>

            <div className="min-w-0 rounded-[2rem] border border-white/10 bg-black/34 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.42)] backdrop-blur md:p-5">
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/10 pb-4">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
                    Decision dashboard
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-white">
                    Choose by what matters first
                  </h2>
                </div>
                <span className="shrink-0 rounded-full border border-[#7C5CFF]/38 bg-[#7C5CFF]/14 px-3 py-1 text-xs font-semibold text-[#C8DAFF]">
                  No fake ratings
                </span>
              </div>
              <div className="mt-4 grid min-w-0 gap-3 sm:grid-cols-2">
                {decisionCards.slice(0, 4).map((card) => (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition hover:border-[#8FB7FF]/42 hover:bg-white/[0.07]"
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8FB7FF]">
                      {card.metric}
                    </div>
                    <h3 className="mt-2 text-base font-semibold text-white">
                      {card.label}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/62">
                      {card.text}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {decisionCards.slice(4).map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-[#8FB7FF]/40 hover:bg-white/[0.06]"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8FB7FF]">
                  {card.metric}
                </div>
                <h3 className="mt-2 text-base font-semibold text-white">
                  {card.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/62">
                  {card.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div id="live-models">
        <FeaturedModelsSection
          limit={8}
          seed="homepage-live-models"
          title="Live Model Preview for Platform Comparison"
          description="Use live room previews as a current browsing signal while comparing platform fit. Availability changes, and these cards come from the live feed rather than fake profile data."
        />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-8 md:py-10">
        <div className="grid min-w-0 gap-5 rounded-[2rem] border border-[#7C5CFF]/24 bg-[linear-gradient(135deg,rgba(124,92,255,0.2),rgba(5,5,7,0.94)_46%,rgba(0,171,255,0.12))] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.32)] md:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
              Interactive tool
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Cam Site Chooser
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Answer a few private, no-tracking prompts about free preview
              access, private options, mobile browsing, signup comfort, payment
              timing, verified model signals, and beginner needs. The chooser
              points you to the best comparison path for your priorities.
            </p>
          </div>
          <div className="grid min-w-0 gap-3 sm:grid-cols-2">
            {[
              "No stored answers",
              "Links to best-fit pages",
              "Built for comparison",
              "No fake personalization",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/28 p-4 text-sm font-semibold text-white/78"
              >
                {item}
              </div>
            ))}
            <Link
              href="/tools/cam-site-chooser"
              className="rounded-2xl bg-[#7C5CFF] p-4 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(124,92,255,0.32)] transition hover:bg-[#8B70FF] sm:col-span-2"
            >
              Open the Cam Site Chooser
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:py-10">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
              Platform paths
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Pick the comparison route that fits the question
            </h2>
          </div>
          <Link
            href="/resources"
            className="inline-flex rounded-full border border-[#8FB7FF]/32 bg-[#8FB7FF]/10 px-5 py-2.5 text-sm font-semibold text-[#C8DAFF] transition hover:border-[#8FB7FF]/50 hover:bg-[#8FB7FF]/15"
          >
            Browse Resources
          </Link>
        </div>
        <div className="grid min-w-0 items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {platformPaths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-0.5 hover:border-[#8FB7FF]/42 hover:bg-white/[0.065]"
            >
              <h3 className="text-lg font-semibold text-white">{path.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/62">{path.body}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-[#8FB7FF] group-hover:text-[#C8DAFF]">
                Open path
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:py-10">
        <InternalLinkBlock
          eyebrow="Popular searches"
          title="High-intent searches before signup"
          description="These routes answer practical questions users ask before choosing a live cam platform."
          links={[
            ...popularSearchLinks,
            toolDecisionLinks[1],
            modelOpportunityLinks[0],
          ]}
          columns="four"
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:py-10">
        <div className="grid min-w-0 gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 md:p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
              Trust method
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Built as a decision system, not a fake review board
            </h2>
            <p className="mt-4 text-base leading-7 text-white/68">
              WebcamSex.me avoids fake ratings, fake traffic claims, and
              invented model profiles. Pages are organized by user need so you
              can compare privacy, payment prompts, signup flow, mobile
              usability, platform rules, and live availability before joining.
            </p>
          </div>
          <div className="grid min-w-0 gap-3 sm:grid-cols-2">
            {[
              "No Review or AggregateRating schema",
              "Live models come from feed logic",
              "No direct affiliate URLs in page content",
              "Availability can change while browsing",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/24 p-4 text-sm leading-6 text-white/68"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 pt-8 md:pb-16 md:pt-10">
        <div className="rounded-[2rem] border border-[#7C5CFF]/24 bg-[linear-gradient(135deg,rgba(124,92,255,0.22),rgba(5,5,7,0.94)_48%,rgba(0,171,255,0.12))] p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Ready to compare
          </div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white md:text-4xl">
            Start with platform signals, then choose your route.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
            Compare free preview access, private feature clarity, mobile
            usability, verified model signals, payment awareness, and privacy
            comfort before creating an account.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

