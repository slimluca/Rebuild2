import type { Metadata } from "next";
import Link from "next/link";

import FeaturedModelsSection from "@/components/live/FeaturedModelsSection";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { bestPageLinks } from "@/lib/best-pages";
import { categoryPageLinks } from "@/lib/category-pages";
import { comparePageLinks } from "@/lib/compare-pages";
import {
  buildItemListJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
  SITE_NAME,
} from "@/lib/seo";

const title = "Live Cam Models to Preview Before Choosing a Platform";
const description =
  "Preview live cam models as a comparison signal before choosing a platform, including model variety, HD quality, mobile layout, private options, free access, and signup expectations.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/models",
});

export default function ModelsPage() {
  const popularCategoryLinks = categoryPageLinks.filter((link) =>
    [
      "/categories/live-cam-models",
      "/categories/online-now-cam-models",
      "/categories/featured-cam-models",
      "/categories/verified-cam-models",
      "/categories/hd-cam-models",
      "/categories/mobile-cam-models",
      "/categories/free-preview-cam-models",
      "/categories/private-show-models",
      "/categories/trending-cam-models",
    ].includes(link.href),
  );

  return (
    <main className="min-h-screen text-white">
      <JsonLd data={buildWebPageJsonLd({ title, description, path: "/models" })} />
      <JsonLd
        data={buildItemListJsonLd({
          name: "Live model discovery categories",
          description,
          path: "/models",
          items: popularCategoryLinks,
        })}
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pt-16">
        <Breadcrumbs
          items={[
            { label: SITE_NAME, href: "/" },
            { label: "Live Models" },
          ]}
        />
        <div className="max-w-5xl">
          <div className="mb-4 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Live model preview
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-7 text-white/72 md:text-lg md:leading-8">
            Live model availability changes throughout the day, so this page is
            not a fake model database. Use the current feed to compare platform
            style, model variety, HD cam quality, mobile layout, free preview
            access, private show options, and signup expectations before
            choosing where to join.
          </p>
        </div>
      </section>

      <FeaturedModelsSection
        compact
        limit={12}
        seed="models-hub-live-preview"
        title="Preview Live Models While Comparing Platforms"
        description="These model cards come from the existing live feed and route through internal redirects. Use them as a current browsing sample while you compare platform fit."
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 pt-6">
        <section className="grid items-stretch gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Compare live previews
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Look at room status, profile clarity, language signals, and
              stream quality without treating any preview as a fixed ranking or
              traffic claim.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Check platform fit
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              A model preview should lead into a platform decision: free access,
              private options, mobile usability, payment prompts, and privacy
              pages all matter.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Use categories next
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Categories help you browse by appearance, feature, device, region,
              language, and comparison need without pretending every feed filter
              is exact.
            </p>
          </article>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Category shortcuts
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Popular model discovery paths
          </h2>
          <div className="mt-6 grid items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {popularCategoryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="h-full rounded-2xl border border-white/10 bg-black/24 p-4 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.045]"
              >
                <h3 className="text-base font-semibold text-white">{link.label}</h3>
                {link.description ? (
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {link.description}
                  </p>
                ) : null}
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <h2 className="text-2xl font-semibold text-white">
            Best and comparison pages to use with model previews
          </h2>
          <div className="mt-5 grid items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ...bestPageLinks.filter((link) =>
                ["/best/private-cam-sites", "/best/free-cam-sites", "/best/mobile-cam-sites", "/best/verified-cam-sites"].includes(link.href),
              ),
              ...comparePageLinks.filter((link) =>
                ["/compare/premium-vs-free-cam-sites", "/compare/private-cam-sites-vs-free-cam-sites"].includes(link.href),
              ),
              { href: "/categories", label: "Categories", description: "Browse all live model discovery paths." },
              { href: "/guides", label: "Guides", description: "Read decision guides before signup." },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="h-full rounded-2xl border border-white/10 bg-black/24 p-4 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.045]"
              >
                <h3 className="text-base font-semibold text-white">{link.label}</h3>
                {link.description ? (
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {link.description}
                  </p>
                ) : null}
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[#7C5CFF]/24 bg-[linear-gradient(135deg,rgba(124,92,255,0.22),rgba(5,5,7,0.94)_50%,rgba(0,171,255,0.1))] p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Next step
          </div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white">
            Use live models as one part of the comparison.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
            Preview current availability, then compare platform privacy,
            mobile usability, free access, verified model signals, HD quality,
            and beginner-friendly signup flow.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/go/random"
              prefetch={false}
              className="inline-flex justify-center rounded-full bg-[#7C5CFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(124,92,255,0.38)] transition hover:bg-[#8B70FF]"
            >
              View Live Models
            </Link>
            <Link
              href="/go/signup"
              prefetch={false}
              className="inline-flex justify-center rounded-full border border-[#8FB7FF]/32 bg-[#8FB7FF]/10 px-6 py-3 text-sm font-semibold text-[#C8DAFF] transition hover:border-[#8FB7FF]/52 hover:bg-[#8FB7FF]/15"
            >
              Compare Live Cam Options
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
