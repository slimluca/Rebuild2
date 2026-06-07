import type { Metadata } from "next";
import Link from "next/link";

import FeaturedModelsSection from "@/components/live/FeaturedModelsSection";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import InternalLinkBlock from "@/components/site/InternalLinkBlock";
import {
  highIntentLinks,
  modelDiscoveryLinks,
  modelOpportunityLinks,
} from "@/lib/internal-links";
import {
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
  SITE_NAME,
} from "@/lib/seo";
import { toolPageLinks } from "@/lib/tool-pages";

const title = "Live Cam Site Decision Tools";
const description =
  "Use live cam site decision tools for cam site comparison, no signup cam sites, cam sites without credit card, private vs free cam sites, mobile usability, verified cam models, HD cam sites, beginner friendly layouts, privacy checks, and model category discovery.";

const faqs = [
  {
    question: "Do these tools store user answers?",
    answer:
      "No. Interactive tools run in the browser and do not store, submit, or track user choices.",
  },
  {
    question: "Are the tools rankings or reviews?",
    answer:
      "No. They are decision helpers that link to comparison pages without fake scores, reviews, or platform statistics.",
  },
  {
    question: "How should users use these tools?",
    answer:
      "Start with a chooser or checklist, then open the related Best, Guide, Feature, Answer, or Model pages before using a platform route.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/tools",
});

export default function ToolsHubPage() {
  return (
    <main className="min-h-screen text-white">
      <JsonLd data={buildWebPageJsonLd({ title, description, path: "/tools" })} />
      <JsonLd
        data={buildItemListJsonLd({
          name: "Live cam site decision tools",
          description,
          path: "/tools",
          items: toolPageLinks,
        })}
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pt-16">
        <Breadcrumbs
          items={[
            { label: SITE_NAME, href: "/" },
            { label: "Tools" },
          ]}
        />
        <div className="max-w-5xl">
          <div className="mb-4 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Decision tools
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-7 text-white/72 md:text-lg md:leading-8">
            Use these cam site comparison tools to choose by privacy needs,
            free preview access, no signup browsing, no credit card browsing,
            mobile usability, HD quality, verified cam models, model category
            discovery, and beginner friendly layouts before signing up.
          </p>
        </div>
      </section>

      <FeaturedModelsSection
        compact
        limit={4}
        seed="tools-hub-live-models"
        title="Preview Live Models While Using Decision Tools"
        description="Use current live previews near the top while you compare platform fit, category discovery, mobile usability, privacy, and signup expectations."
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 pt-6">
        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Tool cards
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Choose a tool for your next decision
          </h2>
          <div className="mt-6 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
            {toolPageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="h-full rounded-2xl border border-white/10 bg-black/24 p-5 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.045]"
              >
                <h3 className="text-xl font-semibold text-white">{link.label}</h3>
                <p className="mt-3 text-sm leading-6 text-white/64">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid items-stretch gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              How to use these tools
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Start with the chooser if you are unsure. Use checklists when you
              already know the decision factor, such as no-card browsing,
              privacy, HD quality, or mobile fit.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Popular next steps
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              After a tool result, open a Best, Guide, Feature, Answer, or
              Category page to compare signup, privacy, payment, and platform
              layout in more detail.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              No stored answers
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              The interactive tools do not store answers, create accounts, or
              make guaranteed recommendations. They keep the comparison process
              simple and private.
            </p>
          </article>
        </section>

        <InternalLinkBlock
          eyebrow="Decision paths"
          title="Popular Next Steps"
          description="Move from a tool into the pages that explain free access, private options, no-signup viewing, no-card browsing, verified models, and model discovery."
          links={[...highIntentLinks, ...modelDiscoveryLinks, modelOpportunityLinks[0]]}
        />

        <section className="rounded-3xl border border-[#7C5CFF]/24 bg-[linear-gradient(135deg,rgba(124,92,255,0.22),rgba(5,5,7,0.94)_50%,rgba(0,171,255,0.1))] p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Next step
          </div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white">
            Use a tool before opening a platform route.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
            Compare your needs first, then preview live availability through
            internal routes only.
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
              Preview Live Models
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <JsonLd data={buildFaqJsonLd({ questions: faqs })} />
          <h2 className="text-3xl font-semibold text-white">Tools FAQ</h2>
          <div className="mt-6 grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-white/10 bg-black/24 p-5"
              >
                <summary className="cursor-pointer text-base font-semibold text-white">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-white/64">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <h2 className="text-2xl font-semibold text-white">Related sections</h2>
          <div className="mt-5 grid items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { href: "/best", label: "Best", description: "Compare cam sites by user need." },
              { href: "/compare", label: "Compare", description: "Compare platform styles and pairs." },
              { href: "/guides", label: "Guides", description: "Read deeper decision guides." },
              { href: "/features", label: "Features", description: "Compare feature-level decisions." },
              { href: "/answers", label: "Answers", description: "Get concise answers before signup." },
              { href: "/models", label: "Models", description: "Preview live model availability." },
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
