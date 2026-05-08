import type { Metadata } from "next";
import Link from "next/link";

import FeaturedModelsSection from "@/components/live/FeaturedModelsSection";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const recoveryLinks = [
  {
    href: "/models",
    label: "Models",
    description: "Preview current live models before choosing a platform.",
  },
  {
    href: "/categories",
    label: "Categories",
    description: "Browse model categories by practical discovery need.",
  },
  {
    href: "/best",
    label: "Best",
    description: "Compare cam site choices by user need.",
  },
  {
    href: "/compare",
    label: "Compare",
    description: "Compare platforms and platform types before joining.",
  },
];

export default function NotFound() {
  return (
    <main className="min-h-screen text-white">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pt-16">
        <div className="max-w-5xl">
          <div className="mb-4 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            404
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Page Not Found
          </h1>
          <p className="mt-6 max-w-4xl text-base leading-7 text-white/72 md:text-lg md:leading-8">
            This page may have moved while WebcamSex.me was rebuilt as a live
            cam comparison hub. Use the links below to continue comparing live
            models, categories, best cam site paths, and platform differences.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {recoveryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex justify-center rounded-full border border-[#8FB7FF]/32 bg-[#8FB7FF]/10 px-5 py-2.5 text-sm font-semibold text-[#C8DAFF] transition hover:border-[#8FB7FF]/52 hover:bg-[#8FB7FF]/15"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FeaturedModelsSection
        compact
        limit={4}
        seed="not-found-live-models"
        title="Explore Live Models While You Find the Right Page"
        description="Use current live model previews as a starting point, then compare categories, best pages, and platform guides before choosing where to go next."
      />

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 pt-4 sm:grid-cols-2 lg:grid-cols-4">
        {recoveryLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.055]"
          >
            <h2 className="text-lg font-semibold text-white">{link.label}</h2>
            <p className="mt-2 text-sm leading-6 text-white/64">
              {link.description}
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}
