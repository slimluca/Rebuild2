import type { Metadata } from "next";
import Link from "next/link";

import InfoPage, { PageSection } from "@/components/site/InfoPage";
import { bestPageLinks } from "@/lib/best-pages";
import { comparePageLinks } from "@/lib/compare-pages";
import { guidePageLinks } from "@/lib/guide-pages";
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
    </InfoPage>
  );
}
