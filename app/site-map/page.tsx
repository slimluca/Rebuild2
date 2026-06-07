import type { Metadata } from "next";
import Link from "next/link";

import InfoPage, { PageSection } from "@/components/site/InfoPage";
import InternalLinkBlock from "@/components/site/InternalLinkBlock";
import { alternativePageLinks } from "@/lib/alternative-pages";
import { answerPageLinks } from "@/lib/answer-pages";
import { bestPageLinks } from "@/lib/best-pages";
import { categoryGroups, getCategoryCards } from "@/lib/category-pages";
import { comparePageLinks } from "@/lib/compare-pages";
import { featurePageLinks } from "@/lib/feature-pages";
import { guidePageLinks } from "@/lib/guide-pages";
import {
  commonQuestionLinks,
  featureCheckLinks,
  highIntentLinks,
  modelDiscoveryLinks,
  platformAlternativeLinks,
} from "@/lib/internal-links";
import { platformPageLinks } from "@/lib/platform-pages";
import { phaseOneRoutes } from "@/lib/site-navigation";
import { buildPageMetadata } from "@/lib/seo";
import { toolPageLinks } from "@/lib/tool-pages";

const description =
  "Browse the WebcamSex.me site map with links to the homepage, best cam site guides, comparison pages, resources, trust pages, privacy policy, terms, and contact page.";

export const metadata: Metadata = buildPageMetadata({
  title: "Site Map",
  description,
  path: "/site-map",
});

export default function SiteMapPage() {
  return (
    <InfoPage eyebrow="Site Map" title="Site Map" description={description} path="/site-map">
      <PageSection title="Indexable site pages">
        <p>
          This site map lists the public pages that help visitors compare live
          cam sites by user need, platform style, privacy considerations,
          signup expectations, mobile usability, and trust context. Internal
          affiliate redirect routes are intentionally not listed here.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ...phaseOneRoutes,
            { href: "/best", label: "Best Cam Sites" },
            ...bestPageLinks,
            { href: "/compare", label: "Compare Sites" },
            ...comparePageLinks,
            { href: "/guides", label: "Guides" },
            ...guidePageLinks,
            { href: "/models", label: "Live Models" },
            { href: "/categories", label: "Categories" },
            { href: "/platforms", label: "Platforms" },
            ...platformPageLinks,
            { href: "/alternatives", label: "Alternatives" },
            ...alternativePageLinks,
            { href: "/features", label: "Features" },
            ...featurePageLinks,
            { href: "/answers", label: "Answers" },
            ...answerPageLinks,
            ...toolPageLinks,
          ].map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm font-semibold text-white/80 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.055]"
            >
              {route.label}
            </Link>
          ))}
        </div>
      </PageSection>

      <PageSection
        title="High-value crawl paths"
        description="These compact groups point to the pages most visitors use when comparing cam sites before signup."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <InternalLinkBlock
            eyebrow="High intent"
            title="Best and Guide Entry Points"
            description="Free access, private cam sites, no-signup viewing, credit card expectations, safety basics, and how to compare."
            links={highIntentLinks}
          />
          <InternalLinkBlock
            eyebrow="Comparisons"
            title="Popular Comparisons and Alternatives"
            description="Platform comparisons, LiveJasmin alternatives, and related platform guide paths."
            links={platformAlternativeLinks}
          />
          <InternalLinkBlock
            eyebrow="Features"
            title="Feature Checks Before Joining"
            description="Preview access, privacy controls, payment awareness, mobile fit, and model discovery."
            links={featureCheckLinks}
          />
          <InternalLinkBlock
            eyebrow="Questions"
            title="Common Questions Before Signup"
            description="Answers for free access, signup, credit cards, and what to check before joining."
            links={commonQuestionLinks}
          />
        </div>
      </PageSection>

      <PageSection
        title="Best, Compare, and Guides"
        description="Core comparison sections for choosing by user need, platform pair, or educational guide."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            { title: "Best", links: [{ href: "/best", label: "Best Cam Sites" }, ...bestPageLinks] },
            { title: "Compare", links: [{ href: "/compare", label: "Compare Sites" }, ...comparePageLinks] },
            { title: "Guides", links: [{ href: "/guides", label: "Guides" }, ...guidePageLinks] },
          ].map((group) => (
            <div key={group.title} className="rounded-2xl border border-white/10 bg-black/24 p-4">
              <h2 className="text-lg font-semibold text-white">{group.title}</h2>
              <div className="mt-4 grid gap-3">
                {group.links.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm font-semibold text-white/80 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.055]"
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        title="Platform and alternatives pages"
        description="These pages help visitors compare major platform styles and alternative paths by user need before joining."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/24 p-4">
            <h2 className="text-lg font-semibold text-white">Platforms</h2>
            <div className="mt-4 grid gap-3">
              {platformPageLinks.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm font-semibold text-white/80 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.055]"
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/24 p-4">
            <h2 className="text-lg font-semibold text-white">Alternatives</h2>
            <div className="mt-4 grid gap-3">
              {alternativePageLinks.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm font-semibold text-white/80 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.055]"
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection
        title="Answers pages"
        description="These pages answer specific live cam site questions and link to deeper comparison resources."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {answerPageLinks.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm font-semibold text-white/80 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.055]"
            >
              {route.label}
            </Link>
          ))}
        </div>
      </PageSection>

      <PageSection
        title="Feature pages"
        description="These pages explain specific live cam site features and decision factors before signup."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {featurePageLinks.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm font-semibold text-white/80 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.055]"
            >
              {route.label}
            </Link>
          ))}
        </div>
      </PageSection>

      <PageSection
        title="Tools pages"
        description="Interactive selectors and checklists for choosing live cam site options before signup."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {toolPageLinks.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm font-semibold text-white/80 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.055]"
            >
              {route.label}
            </Link>
          ))}
        </div>
      </PageSection>

      <PageSection
        title="Model Opportunities"
        description="Responsible decision guidance for adults considering webcam model platform applications."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/become-a-webcam-model"
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm font-semibold text-white/80 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.055]"
          >
            Become a Webcam Model
          </Link>
          <Link
            href="/tools/privacy-checklist"
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm font-semibold text-white/80 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.055]"
          >
            Privacy Checklist
          </Link>
          <Link
            href="/features/account-safety"
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm font-semibold text-white/80 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.055]"
          >
            Account Safety
          </Link>
        </div>
      </PageSection>

      <PageSection
        title="Model discovery pages"
        description="Category pages are grouped so visitors can browse model previews by practical discovery need while keeping platform comparison first."
      >
        <div className="grid gap-5">
          {categoryGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-black/24 p-4"
            >
              <h2 className="text-lg font-semibold text-white">{group.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/64">
                {group.description}
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {getCategoryCards(group.slugs).map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm font-semibold text-white/80 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.055]"
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        title="Models and resources"
        description="Core discovery and trust pages for visitors who want live previews, policies, contact options, and the main resource hub."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <InternalLinkBlock
            eyebrow="Models"
            title="Models and Categories"
            description="Live model previews and category discovery pages grouped around practical browsing needs."
            links={modelDiscoveryLinks}
          />
          <div className="rounded-2xl border border-white/10 bg-black/24 p-4">
            <h2 className="text-lg font-semibold text-white">Resources</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {phaseOneRoutes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm font-semibold text-white/80 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.055]"
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </PageSection>
    </InfoPage>
  );
}
