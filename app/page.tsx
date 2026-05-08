import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import LiveModelGrid, { LiveModelGridSkeleton } from "@/components/live/LiveModelGrid";
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

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-14 md:pb-16 md:pt-22 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Compare the Best Live Cam Sites Before You Join
          </div>
          <h1 className="max-w-5xl text-4xl font-semibold leading-tight text-white md:text-6xl md:leading-[1.03]">
            Best Live Cam Sites Compared by Need
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-white/72 md:text-lg md:leading-8">
            WebcamSex.me helps you choose a live cam platform by matching the
            site type to your priorities. Compare privacy, mobile experience,
            free access, verified model standards, stream quality, and beginner
            friendliness before you decide where to sign up.
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

        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.36)] md:p-6">
          <div className="rounded-2xl border border-[#7C5CFF]/24 bg-[linear-gradient(145deg,rgba(124,92,255,0.22),rgba(5,5,7,0.92)_42%,rgba(0,171,255,0.1))] p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
              Decision Snapshot
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Choose by what matters first
            </h2>
            <div className="mt-5 grid gap-3">
              {["Privacy fit", "Mobile flow", "Free preview access", "Verified platform signals"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/28 px-4 py-3"
                  >
                    <span className="text-sm font-medium text-white/82">{item}</span>
                    <span className="h-2 w-16 rounded-full bg-[linear-gradient(90deg,#7C5CFF,#00ABFF)]" />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickChoices.map((choice) => (
            <article
              key={choice.title}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.055]"
            >
              <h2 className="text-lg font-semibold text-white">{choice.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/64">{choice.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
              Why compare first
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Better platform choices start with better filters
            </h2>
          </div>
          <div className="space-y-4 text-base leading-7 text-white/68">
            <p>
              Live cam platforms can look similar from the outside, but the
              user experience changes quickly once you compare access rules,
              payment prompts, mobile room controls, performer verification,
              and how much information is available before registration.
            </p>
            <p>
              WebcamSex.me is structured around decision help. Instead of
              treating every platform as interchangeable, the site gives you a
              cleaner way to compare the kind of room access, privacy comfort,
              and browsing flow you actually want.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
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
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {decisionCategories.map((category) => (
            <div
              key={category}
              className="rounded-2xl border border-[#7C5CFF]/20 bg-black/24 p-4 text-sm font-semibold text-white/82"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      <section id="live-models" className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Live preview
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Explore Live Models While Comparing Platforms
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-white/66 md:text-lg">
            Use live room previews as one signal while you compare platform fit.
            Availability can change, so treat the grid as a current browsing
            window rather than a ranking.
          </p>
        </div>
        <Suspense fallback={<LiveModelGridSkeleton />}>
          <LiveModelGrid limit={8} />
        </Suspense>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Comparison Hub",
              text: "Phase 1 sets the structure for future side-by-side pages without publishing thin placeholder reviews.",
            },
            {
              title: "Safety and Trust",
              text: "The foundation favors clear internal redirects, crawl-safe affiliate routing, visible policies, and no invented popularity signals.",
            },
            {
              title: "Decision Led",
              text: "Every section is written to help users narrow a platform choice by need instead of pushing a generic directory experience.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"
            >
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/64">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10">
        <div className="rounded-3xl border border-[#7C5CFF]/24 bg-[linear-gradient(135deg,rgba(124,92,255,0.22),rgba(5,5,7,0.94)_48%,rgba(0,171,255,0.12))] p-8 md:p-10">
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
