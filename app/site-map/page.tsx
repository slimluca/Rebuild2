import type { Metadata } from "next";
import Link from "next/link";

import InfoPage, { PageSection } from "@/components/site/InfoPage";
import { alternativePageLinks } from "@/lib/alternative-pages";
import { answerPageLinks } from "@/lib/answer-pages";
import { bestPageLinks } from "@/lib/best-pages";
import { categoryGroups, getCategoryCards } from "@/lib/category-pages";
import { comparePageLinks } from "@/lib/compare-pages";
import { featurePageLinks } from "@/lib/feature-pages";
import { guidePageLinks } from "@/lib/guide-pages";
import { platformPageLinks } from "@/lib/platform-pages";
import { phaseOneRoutes } from "@/lib/site-navigation";
import { buildPageMetadata } from "@/lib/seo";

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
    </InfoPage>
  );
}
