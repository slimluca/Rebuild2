import type { Metadata } from "next";
import Link from "next/link";

import FeaturedModelsSection from "@/components/live/FeaturedModelsSection";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import InternalLinkBlock from "@/components/site/InternalLinkBlock";
import { answerPageLinks } from "@/lib/answer-pages";
import { bestPageLinks } from "@/lib/best-pages";
import { comparePageLinks } from "@/lib/compare-pages";
import { featurePageLinks } from "@/lib/feature-pages";
import { guidePageLinks } from "@/lib/guide-pages";
import {
  commonQuestionLinks,
  highIntentLinks,
  modelOpportunityLinks,
  toolDecisionLinks,
} from "@/lib/internal-links";
import { platformPageLinks } from "@/lib/platform-pages";
import {
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
  SITE_NAME,
} from "@/lib/seo";

const title = "Live Cam Site Questions Answered Before You Join";
const description =
  "Get clear answers about free live cam sites, signup, credit cards, private cam sites, credits, verified cam models, mobile cam sites, HD streaming, privacy, and cam site comparison.";

const faqs = [
  {
    question: "What are these live cam site answers for?",
    answer:
      "They give quick, practical answers to common questions before sending users to deeper best, guide, feature, platform, and comparison pages.",
  },
  {
    question: "Do answer pages rank cam sites?",
    answer:
      "No. They explain decision factors without fake ratings, fake rankings, or unsupported claims.",
  },
  {
    question: "Should users still compare platforms after reading an answer?",
    answer:
      "Yes. Short answers are a starting point. Users should compare access, privacy, mobile usability, payment expectations, and alternatives before joining.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/answers",
});

export default function AnswersHubPage() {
  return (
    <main className="min-h-screen text-white">
      <JsonLd data={buildWebPageJsonLd({ title, description, path: "/answers" })} />
      <JsonLd
        data={buildItemListJsonLd({
          name: "Live cam site questions",
          description,
          path: "/answers",
          items: answerPageLinks,
        })}
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pt-16">
        <Breadcrumbs
          items={[
            { label: SITE_NAME, href: "/" },
            { label: "Answers" },
          ]}
        />
        <div className="max-w-5xl">
          <div className="mb-4 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Answers hub
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-7 text-white/72 md:text-lg md:leading-8">
            Find concise answers to live cam site questions before choosing
            where to sign up. Use this section for clear context on free
            access, cam sites without signup, cam sites without credit card
            prompts, private cam sites, live cam credits, verified cam models,
            mobile cam sites, safe cam platforms, HD live cam streaming,
            privacy on cam sites, and cam site comparison basics.
          </p>
        </div>
      </section>

      <FeaturedModelsSection
        compact
        limit={4}
        seed="answers-hub-live-models"
        title="Preview Live Models While Reading Common Answers"
        description="Use current live model previews as one browsing signal while you learn what to compare before signup."
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 pt-6">
        <InternalLinkBlock
          eyebrow="Common questions"
          title="Common Questions Before Signup"
          description="Start with the question pages that clarify credit cards, no-signup viewing, free access, and what to compare before creating an account."
          links={[
            ...commonQuestionLinks,
            ...highIntentLinks.slice(4),
            toolDecisionLinks[1],
            modelOpportunityLinks[0],
          ]}
        />

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Question cards
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Choose the question closest to your decision
          </h2>
          <div className="mt-6 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4">
            {answerPageLinks.map((link) => (
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

        <section className="grid items-stretch gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Start with a direct answer
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Each page gives a short answer first, then explains what users
              should compare before signup, payment, private features, or
              account creation.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              Use deeper pages next
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Answers link to Best, Compare, Guides, Features, Platforms, and
              Models pages when a topic needs more detail than a quick answer.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-xl font-semibold text-white">
              No fake certainty
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              These answers avoid safety guarantees, fake ratings, fake
              statistics, and broad claims that do not help users compare
              platforms carefully.
            </p>
          </article>
        </section>

        <section className="rounded-3xl border border-[#7C5CFF]/24 bg-[linear-gradient(135deg,rgba(124,92,255,0.22),rgba(5,5,7,0.94)_50%,rgba(0,171,255,0.1))] p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Next step
          </div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white">
            Use answers as the start of your comparison.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
            Preview live availability, then compare signup expectations,
            privacy, mobile usability, free access, private options, and
            payment prompts before choosing a platform.
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
          <h2 className="text-3xl font-semibold text-white">Answers FAQ</h2>
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
              { href: "/guides", label: "Guides", description: "Read deeper explainers before signup." },
              { href: "/features", label: "Features", description: "Compare specific platform features." },
              { href: "/platforms", label: "Platforms", description: "Read neutral platform guides." },
              { href: "/tools", label: "Tools", description: "Use checklists and selectors before choosing." },
              { href: "/models", label: "Models", description: "Preview current live models." },
              ...bestPageLinks.slice(0, 2),
              ...comparePageLinks.slice(0, 2),
              ...guidePageLinks.slice(0, 2),
              ...featurePageLinks.slice(0, 2),
              ...platformPageLinks.slice(0, 2),
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
