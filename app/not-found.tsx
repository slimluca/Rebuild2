import type { Metadata } from "next";
import Link from "next/link";


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
  {
    href: "/tools",
    label: "Tools",
    description: "Use decision tools and checklists before choosing a route.",
  },
];

export default function NotFound() {
  return (
    <main className="min-h-screen text-white">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pt-16">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(124,92,255,0.18),rgba(5,5,7,0.96)_48%,rgba(0,171,255,0.1))] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.34)] md:p-7">
          <div className="mb-4 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            404 recovery
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
                Page Not Found
              </h1>
              <p className="mt-6 max-w-4xl text-base leading-7 text-white/72 md:text-lg md:leading-8">
                This page may have moved while WebcamSex.me was rebuilt as a
                live cam comparison hub. Continue through live models,
                categories, best pages, comparisons, or decision tools instead.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {recoveryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-white/10 bg-black/26 p-4 text-sm font-semibold text-white/82 transition hover:border-[#8FB7FF]/42 hover:bg-white/[0.06]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 pt-4 sm:grid-cols-2 lg:grid-cols-5">
        {recoveryLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.06]"
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
