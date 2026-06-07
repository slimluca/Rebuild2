import type { Metadata } from "next";
import Link from "next/link";

import FeaturedModelsSection from "@/components/live/FeaturedModelsSection";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import {
  buildArticleJsonLd,
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
  SITE_NAME,
} from "@/lib/seo";

const title = "Become a Webcam Model | Compare Before You Apply";
const description =
  "Learn what to compare before becoming a webcam model, including privacy, verification, platform rules, payout awareness, equipment basics, and responsible signup steps.";
const path = "/become-a-webcam-model";
const h1 = "Become a Webcam Model: Compare What Matters Before You Apply";

const quickDecisionCards = [
  {
    title: "You are comfortable appearing on camera",
    body: "Webcam modeling involves live video presence. Compare platforms only if appearing on camera fits your personal boundaries and comfort level.",
  },
  {
    title: "You understand platform rules",
    body: "Every model platform has rules, verification steps, and account expectations. Read those terms before applying.",
  },
  {
    title: "You want flexible online work",
    body: "Flexible scheduling can be part of webcam modeling, but it should not be treated as a promise of income or approval.",
  },
  {
    title: "You can protect your privacy",
    body: "Think about stage names, account security, shared devices, personal information, and content boundaries before going live.",
  },
  {
    title: "You are ready to compare payout terms",
    body: "Review payment setup, payout methods, platform fees, and country eligibility directly on the model platform.",
  },
  {
    title: "You are 18 or older",
    body: "Webcam modeling is for adults only. Age and identity verification may be required before a platform approves an account.",
  },
];

const comparisonRows = [
  {
    factor: "Identity verification",
    check: "What documents, age checks, or account review steps may be required.",
    why: "Adult platforms commonly need verification before allowing model activity.",
  },
  {
    factor: "Payout methods",
    check: "Available payment setup, payout timing, fees, and country eligibility.",
    why: "Payment details affect whether a platform fits your situation.",
  },
  {
    factor: "Platform rules",
    check: "Allowed content, prohibited behavior, account limits, and moderation expectations.",
    why: "Rules define what you can do and what may affect your account.",
  },
  {
    factor: "Privacy controls",
    check: "Stage name options, profile visibility, account settings, and personal data handling.",
    why: "Privacy planning matters before you create a public-facing profile.",
  },
  {
    factor: "Schedule flexibility",
    check: "How going live works, whether tools support your preferred routine, and what consistency may require.",
    why: "Flexibility should be compared carefully without assuming guaranteed results.",
  },
  {
    factor: "Content boundaries",
    check: "What you are comfortable doing, what the platform allows, and how to stop or adjust.",
    why: "Boundaries are part of responsible platform choice.",
  },
  {
    factor: "Support resources",
    check: "Help pages, account support, payment support, and model education resources.",
    why: "Support matters when verification, profile setup, or payment questions arise.",
  },
  {
    factor: "Device requirements",
    check: "Camera, microphone, lighting, stable internet, desktop tools, and mobile compatibility.",
    why: "Technical setup can affect stream quality and comfort.",
  },
  {
    factor: "Country eligibility",
    check: "Whether the platform accepts applicants and payment methods from your location.",
    why: "Eligibility and payout support can vary by country.",
  },
  {
    factor: "Account security",
    check: "Password practices, device access, saved forms, and notification settings.",
    why: "Your model account may involve sensitive identity and payment information.",
  },
];

const signupSteps = [
  "Review the model platform's requirements, rules, and age restrictions.",
  "Prepare basic account information and decide what public-facing name you may want to use.",
  "Complete age and identity checks if the platform requires them.",
  "Set up a profile only after reviewing privacy, visibility, and content rules.",
  "Review payment settings, payout options, fees, and eligibility before relying on the platform.",
  "Learn the platform tools, chat controls, moderation options, and support resources.",
  "Go live only when you understand the rules, your boundaries, and the account setup.",
];

const beginnerChecklist = [
  "Adults 18+ only",
  "Private workspace",
  "Stable internet connection",
  "Camera, microphone, and lighting",
  "Clear personal boundaries",
  "Secure account details",
  "Understanding of platform terms",
  "Payment method review",
  "Profile preparation",
  "Privacy settings",
];

const faqItems = [
  {
    question: "Can anyone become a webcam model?",
    answer:
      "No. Webcam model platforms can set eligibility rules, age requirements, identity checks, country restrictions, account standards, and approval processes. Read the platform terms before applying.",
  },
  {
    question: "Do I need to be 18 or older to apply?",
    answer:
      "Yes. Webcam modeling is for adults only. Platforms may require age and identity verification before allowing model activity.",
  },
  {
    question: "Can webcam modeling guarantee income?",
    answer:
      "No. Webcam modeling does not guarantee income, approval, traffic, tips, or payouts. Compare platform rules, payment setup, and expectations carefully before applying.",
  },
  {
    question: "What should I check before joining a webcam model platform?",
    answer:
      "Check verification requirements, privacy settings, platform rules, payout methods, country eligibility, account security, support resources, and device requirements.",
  },
  {
    question: "Do webcam model platforms require identity verification?",
    answer:
      "Many adult platforms may require age and identity verification. Review the model platform's requirements directly before beginning an application.",
  },
  {
    question: "Can I use a stage name?",
    answer:
      "A stage name may be available on some platforms, but identity verification may still be required privately by the platform. Review privacy and profile settings carefully.",
  },
  {
    question: "What equipment do beginner webcam models usually need?",
    answer:
      "Beginners commonly compare camera quality, microphone clarity, lighting, stable internet, private workspace, and whether the platform works well on desktop or mobile.",
  },
  {
    question: "Should I compare platform rules before signing up?",
    answer:
      "Yes. Compare rules, content boundaries, support resources, payment setup, account security, and verification expectations before creating a model account.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
  type: "article",
});

export default function BecomeWebcamModelPage() {
  return (
    <main className="min-h-screen text-white">
      <JsonLd data={buildArticleJsonLd({ title: h1, description, path, articleSection: "Webcam Model Platform Guide" })} />
      <JsonLd data={buildWebPageJsonLd({ title: h1, description, path })} />
      <JsonLd data={buildFaqJsonLd({ questions: faqItems })} />
      <JsonLd
        data={buildItemListJsonLd({
          name: "Webcam model platform comparison checklist",
          description,
          path,
          items: comparisonRows.map((row) => ({
            href: path,
            label: row.factor,
            description: row.check,
          })),
        })}
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pt-16">
        <Breadcrumbs
          items={[
            { label: SITE_NAME, href: "/" },
            { label: "Become a Webcam Model" },
          ]}
        />
        <div className="max-w-6xl">
          <div className="mb-4 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Model application guide
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            {h1}
          </h1>
          <p className="mt-6 max-w-6xl text-base leading-7 text-white/72 md:text-lg md:leading-8">
            Becoming a webcam model is a platform decision as much as a work
            decision. Before you apply, compare identity verification, privacy
            controls, platform rules, payout awareness, device setup, support
            resources, and content boundaries so you understand what the model
            application path may involve.
          </p>
          <p className="mt-4 max-w-6xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
            This page is for adults 18+ who want a responsible starting point.
            It does not provide legal, tax, or financial advice, and it does not
            promise approval, traffic, or income. Read platform terms directly
            before creating an account or applying.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/go/become-model"
              prefetch={false}
              className="inline-flex justify-center rounded-full bg-[#7C5CFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(124,92,255,0.38)] transition hover:bg-[#8B70FF]"
            >
              Apply as a Webcam Model
            </Link>
            <Link
              href="/resources"
              className="inline-flex justify-center rounded-full border border-[#8FB7FF]/32 bg-[#8FB7FF]/10 px-6 py-3 text-sm font-semibold text-[#C8DAFF] transition hover:border-[#8FB7FF]/52 hover:bg-[#8FB7FF]/15"
            >
              Review Site Resources
            </Link>
          </div>
        </div>
      </section>

      <FeaturedModelsSection
        compact
        limit={4}
        seed="become-webcam-model-guide"
        title="Explore Live Models While Comparing Platform Fit"
        description="Use current live previews as a general platform-discovery signal only. No model profiles, income claims, ratings, or availability promises are hardcoded here."
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 pt-6">
        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Quick decision
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Is Webcam Modeling Right for You?
          </h2>
          <div className="mt-6 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
            {quickDecisionCards.map((card) => (
              <article
                key={card.title}
                className="h-full rounded-2xl border border-white/10 bg-black/24 p-5"
              >
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/64">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
          <div className="p-5 md:p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
              Compare first
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              What to Compare Before Applying
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-t border-white/10 text-left text-sm">
              <thead className="bg-black/28 text-white/78">
                <tr>
                  <th className="px-5 py-4 font-semibold">Factor</th>
                  <th className="px-5 py-4 font-semibold">What to check</th>
                  <th className="px-5 py-4 font-semibold">Why it matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/64">
                {comparisonRows.map((row) => (
                  <tr key={row.factor}>
                    <td className="px-5 py-4 font-semibold text-white/82">
                      {row.factor}
                    </td>
                    <td className="px-5 py-4">{row.check}</td>
                    <td className="px-5 py-4">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Application flow
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            How the Signup Process Usually Works
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-white/68">
            Exact steps can vary by platform, so use this as general guidance
            only. Always review the model platform&apos;s current requirements and
            terms before applying.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {signupSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-black/24 p-4 text-sm leading-6 text-white/66"
              >
                <span className="mr-2 font-semibold text-[#8FB7FF]">
                  {index + 1}.
                </span>
                {step}
              </div>
            ))}
          </div>
        </section>

        <section className="grid items-stretch gap-4 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-3xl font-semibold text-white">
              Privacy and Safety Considerations
            </h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-white/68">
              <p>
                Decide what personal information you want visible before
                building a profile. A stage name may help with public
                presentation, but the platform may still require private
                identity verification.
              </p>
              <p>
                Protect account credentials, be careful on shared devices, and
                review notification settings, saved forms, browser history, and
                payment setup. Boundaries, platform rules, and support
                resources should be clear before you go live.
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
            <h2 className="text-3xl font-semibold text-white">
              Beginner Model Checklist
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {beginnerChecklist.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/24 p-4 text-sm font-semibold text-white/72"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Compare platforms
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Why Compare Platforms Before Applying?
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <p className="text-base leading-7 text-white/68">
              WebcamSex.me is built around decision help. For potential models,
              that means comparing platform style, audience expectations, model
              tools, privacy controls, payout setup, support resources, and
              account security before starting an application.
            </p>
            <p className="text-base leading-7 text-white/68">
              A responsible model signup path should give you time to review
              requirements, understand verification, think through boundaries,
              and compare desktop or mobile setup needs. Do not rely on income
              promises or generic claims when choosing where to apply.
            </p>
          </div>
          <div className="mt-6 grid items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { href: "/tools/privacy-checklist", label: "Privacy Checklist" },
              { href: "/features/account-safety", label: "Account Safety Basics" },
              { href: "/guides/are-cam-sites-safe", label: "Safety Guide" },
              { href: "/guides/live-cam-pricing-explained", label: "Pricing and Payment Basics" },
              { href: "/features/privacy-controls", label: "Privacy Controls" },
              { href: "/models", label: "Live Model Discovery" },
              { href: "/categories/verified-cam-models", label: "Verified Model Signals" },
              { href: "/resources", label: "Resources" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="h-full rounded-2xl border border-white/10 bg-black/24 p-4 text-sm font-semibold text-white/78 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.045]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[#7C5CFF]/24 bg-[linear-gradient(135deg,rgba(124,92,255,0.22),rgba(5,5,7,0.94)_50%,rgba(0,171,255,0.1))] p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Next step
          </div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white">
            Begin only after you understand the platform requirements.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
            If you are 18 or older and ready to review the model signup page,
            use the internal route below. Read requirements, verification
            expectations, privacy settings, and payment terms before applying.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/go/become-model"
              prefetch={false}
              className="inline-flex justify-center rounded-full bg-[#7C5CFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(124,92,255,0.38)] transition hover:bg-[#8B70FF]"
            >
              Start Your Model Application
            </Link>
            <Link
              href="/tools/privacy-checklist"
              className="inline-flex justify-center rounded-full border border-[#8FB7FF]/32 bg-[#8FB7FF]/10 px-6 py-3 text-sm font-semibold text-[#C8DAFF] transition hover:border-[#8FB7FF]/52 hover:bg-[#8FB7FF]/15"
            >
              Review Privacy Checklist
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            FAQ
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Webcam Model Application Questions
          </h2>
          <div className="mt-6 grid gap-4">
            {faqItems.map((faq) => (
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
      </section>
    </main>
  );
}
