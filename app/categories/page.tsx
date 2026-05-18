import type { Metadata } from "next";
import Link from "next/link";

import FeaturedModelsSection from "@/components/live/FeaturedModelsSection";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import InternalLinkBlock from "@/components/site/InternalLinkBlock";
import {
  categoryGroups,
  categoryPageLinks,
  getCategoryCards,
} from "@/lib/category-pages";
import { modelDiscoveryLinks, highIntentLinks } from "@/lib/internal-links";
import {
  buildItemListJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
  SITE_NAME,
} from "@/lib/seo";

const title = "Live Cam Model Categories for Smarter Browsing";
const description =
  "Browse live cam model categories by appearance, platform feature, viewing style, device fit, region, language, and comparison need before choosing a cam site.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <main className="min-h-screen text-white">
      <JsonLd data={buildWebPageJsonLd({ title, description, path: "/categories" })} />
      <JsonLd
        data={buildItemListJsonLd({
          name: "Live cam model categories",
          description,
          path: "/categories",
          items: categoryPageLinks,
        })}
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pt-16">
        <Breadcrumbs
          items={[
            { label: SITE_NAME, href: "/" },
            { label: "Categories" },
          ]}
        />
        <div className="max-w-5xl">
          <div className="mb-4 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Model discovery
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-7 text-white/72 md:text-lg md:leading-8">
            WebcamSex.me organizes live cam model categories around practical
            comparison needs: appearance, verified model signals, HD cam
            quality, private show access, mobile browsing, free preview
            availability, regional or language fit, and beginner-friendly
            discovery before signup.
          </p>
        </div>
      </section>

      <FeaturedModelsSection
        compact
        limit={8}
        seed="categories-hub-live-models"
        title="Explore Live Models Before Choosing a Category"
        description="Use the live feed as a current preview layer while you compare category filters, platform style, mobile usability, privacy expectations, and signup comfort."
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 pt-6">
        <InternalLinkBlock
          eyebrow="Category shortcuts"
          title="Browse Models by Category and Decision Need"
          description="Start with live model discovery, then connect the category to verified models, free access, private cam sites, or mobile platform fit."
          links={[...modelDiscoveryLinks, ...highIntentLinks.slice(0, 4)]}
        />

        {categoryGroups.map((group) => (
          <section
            key={group.title}
            className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
              Category group
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              {group.title}
            </h2>
            <p className="mt-3 max-w-4xl text-base leading-7 text-white/66">
              {group.description}
            </p>
            <div className="mt-6 grid items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {getCategoryCards(group.slugs).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="h-full rounded-2xl border border-white/10 bg-black/24 p-4 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.045]"
                >
                  <h3 className="text-base font-semibold text-white">
                    {link.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="grid items-stretch gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Compare categories before joining
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              A model category is a starting point, not a final decision. Check
              live availability, platform filters, free access, and private
              feature prompts before creating an account.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Watch for filter limits
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Some filters are exact, some are approximate, and some depend on
              profile fields. WebcamSex.me avoids fake precision when the feed
              does not expose a specific category signal.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Use decision pages next
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              After browsing categories, use Best, Compare, and Guides pages to
              evaluate privacy, mobile usability, HD expectations, pricing
              prompts, no-signup viewing, and no-card browsing.
            </p>
          </article>
        </section>

        <section className="rounded-3xl border border-[#7C5CFF]/24 bg-[linear-gradient(135deg,rgba(124,92,255,0.22),rgba(5,5,7,0.94)_50%,rgba(0,171,255,0.1))] p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Next step
          </div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white">
            Compare live model discovery with platform fit.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
            Start with a category, then compare free cam sites, private cam
            sites, mobile cam sites, verified model platforms, and safe signup
            basics before opening a platform route.
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
              View Live Models
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <h2 className="text-2xl font-semibold text-white">Related sections</h2>
          <div className="mt-5 grid items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { href: "/models", label: "Live Models", description: "Preview current live models before choosing a platform." },
              { href: "/best", label: "Best Cam Sites", description: "Compare cam site categories by user need." },
              { href: "/compare", label: "Compare Sites", description: "Compare platform types and platform pairs." },
              { href: "/guides", label: "Guides", description: "Read practical guides before signup." },
              { href: "/resources", label: "Resources", description: "Review site resources and trust notes." },
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
