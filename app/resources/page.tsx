import type { Metadata } from "next";
import Link from "next/link";

import InfoPage, { PageSection } from "@/components/site/InfoPage";
import { buildPageMetadata } from "@/lib/seo";

const description =
  "Use WebcamSex.me resources to understand how the site organizes live cam platform comparisons, guides, trust pages, and decision categories.";

export const metadata: Metadata = buildPageMetadata({
  title: "Resources",
  description,
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <InfoPage eyebrow="Resources" title="Resources" description={description} path="/resources">
      <PageSection
        title="Comparison resources"
        description="These resource notes explain the decision paths on WebcamSex.me without publishing thin placeholder reviews."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div id="best-cam-sites" className="rounded-2xl border border-white/10 bg-black/24 p-4">
            <h2 className="text-lg font-semibold text-white">Best Cam Sites</h2>
            <p className="mt-2 text-sm leading-6 text-white/64">
              Best pages compare platform fit by need, not by generic winner
              language or unsupported scores. Use them for free, private,
              mobile, verified, HD, no-signup, no-card, and beginner choices.
            </p>
          </div>
          <div id="compare-sites" className="rounded-2xl border border-white/10 bg-black/24 p-4">
            <h2 className="text-lg font-semibold text-white">Compare Sites</h2>
            <p className="mt-2 text-sm leading-6 text-white/64">
              Comparison pages explain privacy, pricing prompts, mobile flow,
              verified model signals, free browsing, premium access, and where
              signup expectations begin.
            </p>
          </div>
          <div id="guides" className="rounded-2xl border border-white/10 bg-black/24 p-4">
            <h2 className="text-lg font-semibold text-white">Guides</h2>
            <p className="mt-2 text-sm leading-6 text-white/64">
              Guides answer practical user questions before signup, with clear
              limitations, adult-safe language, and no recycled page copy from
              other projects.
            </p>
          </div>
          <div id="platforms" className="rounded-2xl border border-white/10 bg-black/24 p-4">
            <h2 className="text-lg font-semibold text-white">Platforms</h2>
            <p className="mt-2 text-sm leading-6 text-white/64">
              Platform guides explain LiveJasmin, Chaturbate, Stripchat, and
              BongaCams by platform style, signup expectations, mobile flow,
              privacy, and alternatives.
            </p>
          </div>
          <div id="alternatives" className="rounded-2xl border border-white/10 bg-black/24 p-4">
            <h2 className="text-lg font-semibold text-white">Alternatives</h2>
            <p className="mt-2 text-sm leading-6 text-white/64">
              Alternatives pages compare premium cam sites, free cam sites,
              private cam sites, and mobile cam sites by user need.
            </p>
          </div>
          <div id="features" className="rounded-2xl border border-white/10 bg-black/24 p-4">
            <h2 className="text-lg font-semibold text-white">Features</h2>
            <p className="mt-2 text-sm leading-6 text-white/64">
              Feature pages explain free preview access, privacy controls,
              payment awareness, HD quality, responsive layouts, and model
              discovery tools.
            </p>
          </div>
          <div id="answers" className="rounded-2xl border border-white/10 bg-black/24 p-4">
            <h2 className="text-lg font-semibold text-white">Answers</h2>
            <p className="mt-2 text-sm leading-6 text-white/64">
              Answers pages give quick context for common questions about free
              access, signup, credit cards, private cam sites, credits, mobile
              browsing, HD streams, and privacy.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection title="Helpful site pages">
        <p>
          Start with the{" "}
          <Link href="/about" className="text-[#8FB7FF] transition hover:text-[#C8DAFF]">
            about page
          </Link>{" "}
          for the site purpose, the{" "}
          <Link href="/platforms" className="text-[#8FB7FF] transition hover:text-[#C8DAFF]">
            platform guides
          </Link>{" "}
          for major platform context, the{" "}
          <Link href="/alternatives" className="text-[#8FB7FF] transition hover:text-[#C8DAFF]">
            alternatives hub
          </Link>{" "}
          for user-need alternatives, the{" "}
          <Link href="/features" className="text-[#8FB7FF] transition hover:text-[#C8DAFF]">
            features hub
          </Link>{" "}
          for specific decision factors, the{" "}
          <Link href="/answers" className="text-[#8FB7FF] transition hover:text-[#C8DAFF]">
            answers hub
          </Link>{" "}
          for quick question-led pages, the{" "}
          <Link href="/editorial-policy" className="text-[#8FB7FF] transition hover:text-[#C8DAFF]">
            editorial policy
          </Link>{" "}
          for publishing standards, and the{" "}
          <Link href="/site-map" className="text-[#8FB7FF] transition hover:text-[#C8DAFF]">
            site map
          </Link>{" "}
          for all Phase 1 pages.
        </p>
      </PageSection>

      <PageSection title="Live preview route">
        <p>
          The homepage includes a live model preview section through the
          existing feed approach. Preview links use internal redirect routes so
          visible page content stays clean and affiliate handling remains
          centralized.
        </p>
        <Link
          href="/go/random"
          prefetch={false}
          className="inline-flex rounded-full border border-[#8FB7FF]/32 bg-[#8FB7FF]/10 px-5 py-2.5 text-sm font-semibold text-[#C8DAFF] transition hover:border-[#8FB7FF]/50 hover:bg-[#8FB7FF]/15"
        >
          Open Live Preview
        </Link>
      </PageSection>

      <PageSection title="How to use the resource page">
        <p>
          Use this page as a navigation layer when you want to understand how
          the site is organized. Start with Best pages if you know your need,
          Compare pages if you are choosing between platform styles, and policy
          pages if you want to understand editorial standards, privacy, terms,
          or affiliate routing before using a CTA.
        </p>
      </PageSection>
    </InfoPage>
  );
}
