import type { ReactNode } from "react";

import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import Link from "next/link";
import PageSection from "@/components/site/PageSection";
import { buildWebPageJsonLd, SITE_NAME } from "@/lib/seo";

interface InfoPageProps {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  children: ReactNode;
}

export default function InfoPage({
  eyebrow,
  title,
  description,
  path,
  children,
}: InfoPageProps) {
  return (
    <main className="min-h-screen text-white">
      <JsonLd data={buildWebPageJsonLd({ title, description, path })} />
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pt-16">
        <Breadcrumbs
          items={[
            { label: SITE_NAME, href: "/" },
            { label: title },
          ]}
        />
        <div className="max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:p-7">
          <div className="mb-4 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            {eyebrow}
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-7 text-white/72 md:text-lg md:leading-8">
            {description}
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-4 pt-2">
        <Link
          href="/models"
          className="grid gap-3 rounded-[1.25rem] border border-[#8FB7FF]/18 bg-[#08111f]/72 p-4 text-white transition hover:border-[#8FB7FF]/38 hover:bg-[#0b1729] md:grid-cols-[1fr_auto] md:items-center"
        >
          <span>
            <span className="block text-sm font-semibold text-white">
              Browse current live model previews
            </span>
            <span className="mt-1 block text-sm leading-6 text-white/62">
              Use the model hub when you want live discovery alongside the site
              policies and comparison resources.
            </span>
          </span>
          <span className="text-sm font-semibold text-[#8FB7FF]">
            Open Models
          </span>
        </Link>
      </section>
      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-16 pt-6">
        {children}
      </section>
    </main>
  );
}

export { PageSection };
