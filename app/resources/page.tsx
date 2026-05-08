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
        title="Phase 1 comparison resources"
        description="These resource notes explain the decision paths that future pages will expand without publishing thin placeholder reviews."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div id="best-cam-sites" className="rounded-2xl border border-white/10 bg-black/24 p-4">
            <h2 className="text-lg font-semibold text-white">Best Cam Sites</h2>
            <p className="mt-2 text-sm leading-6 text-white/64">
              Future best-site pages should compare platform fit by need, not
              by generic winner language or unsupported scores.
            </p>
          </div>
          <div id="compare-sites" className="rounded-2xl border border-white/10 bg-black/24 p-4">
            <h2 className="text-lg font-semibold text-white">Compare Sites</h2>
            <p className="mt-2 text-sm leading-6 text-white/64">
              Future comparisons should explain privacy, pricing prompts,
              mobile flow, verified model standards, and browsing friction.
            </p>
          </div>
          <div id="guides" className="rounded-2xl border border-white/10 bg-black/24 p-4">
            <h2 className="text-lg font-semibold text-white">Guides</h2>
            <p className="mt-2 text-sm leading-6 text-white/64">
              Future guides should answer practical user questions before sign
              up, with clear limitations and no recycled page copy.
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
    </InfoPage>
  );
}
