import type { Metadata } from "next";
import Link from "next/link";

import InfoPage, { PageSection } from "@/components/site/InfoPage";
import InternalLinkBlock from "@/components/site/InternalLinkBlock";
import {
  commonQuestionLinks,
  featureCheckLinks,
  highIntentLinks,
  modelOpportunityLinks,
  modelDiscoveryLinks,
  platformAlternativeLinks,
  toolDecisionLinks,
} from "@/lib/internal-links";
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

      <PageSection
        title="Start Comparing"
        description="Use these links when you want the quickest route into high-intent cam site comparison pages."
      >
        <InternalLinkBlock
          eyebrow="Comparison paths"
          title="Start Comparing Live Cam Sites"
          description="Move from broad research into free cam sites, private cam sites, no-signup viewing, credit card expectations, safety checks, and LiveJasmin comparison pages."
          links={highIntentLinks}
        />
      </PageSection>

      <PageSection
        title="Before You Sign Up"
        description="These resource paths focus on the decisions that should happen before registration, payment, or private platform features."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <InternalLinkBlock
            eyebrow="Feature checks"
            title="Feature Checks Before Joining"
            description="Compare privacy controls, payment awareness, no-card browsing, mobile usability, and free preview expectations."
            links={featureCheckLinks}
          />
          <InternalLinkBlock
            eyebrow="Common questions"
            title="Popular Questions"
            description="Get concise answers about free access, signup, credit card prompts, and what to check before creating an account."
            links={commonQuestionLinks}
          />
        </div>
      </PageSection>

      <PageSection
        title="Model Discovery and Alternatives"
        description="Use these links when live model previews, category browsing, or platform alternatives are part of the decision."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <InternalLinkBlock
            eyebrow="Model discovery"
            title="Browse Models by Category"
            description="Preview live models, verified model categories, and discovery tools before choosing a cam platform."
            links={modelDiscoveryLinks}
          />
          <InternalLinkBlock
            eyebrow="Alternatives"
            title="Platform Alternatives"
            description="Compare LiveJasmin alternatives, platform guides, and free or private cam site alternatives."
            links={platformAlternativeLinks}
          />
        </div>
      </PageSection>

      <PageSection
        title="Interactive Tools"
        description="Use these decision tools when you want a checklist or selector before opening a platform route."
      >
        <InternalLinkBlock
          eyebrow="Tools"
          title="Live Cam Decision Tools"
          description="Work through chooser, no-card, no-signup, privacy, mobile, and model category tools before signup."
          links={toolDecisionLinks}
        />
      </PageSection>

      <PageSection
        title="Model Opportunities"
        description="Use these resources if you are comparing webcam model platform applications rather than viewer signup paths."
      >
        <InternalLinkBlock
          eyebrow="For potential models"
          title="Compare Before Applying as a Webcam Model"
          description="Review privacy, verification, platform rules, account safety, and application expectations before starting a model signup route."
          links={modelOpportunityLinks}
        />
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
          for all core site pages.
        </p>
      </PageSection>

      <PageSection title="Italian-language resource">
        <p>
          Looking for an Italian-language webcam chat guide? Visit{" "}
          <a
            href="https://sessochat.net"
            target="_blank"
            rel="noopener"
            className="text-[#8FB7FF] transition hover:text-[#C8DAFF]"
          >
            SessoChat.net
          </a>{" "}
          for Italian editorial guides, webcam chat topics, and live model
          discovery.
        </p>
      </PageSection>

      <PageSection title="Live preview route">
        <p>
          The homepage includes a live model preview section through the
          live preview experience. Preview links use site paths so
          visible page content stays clean and partner disclosures remains
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
