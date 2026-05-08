import type { Metadata } from "next";
import Link from "next/link";

import { FaqBlock, RelatedLinks } from "@/components/best/BestComponents";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { bestPageLinks } from "@/lib/best-pages";
import {
  buildItemListJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
  SITE_NAME,
} from "@/lib/seo";

const title = "Best Cam Sites by User Need";
const description =
  "Compare the best cam site categories by user need, including free access, private features, mobile usability, verified models, HD video, no-signup viewing, no-card browsing, and beginner-friendly platforms.";

const hubFaqs = [
  {
    question: "How should I choose the best cam site category?",
    answer:
      "Start with your main need: free browsing, private features, mobile usability, verified profiles, HD video, no-signup viewing, no-card access, or beginner-friendly navigation.",
  },
  {
    question: "Does WebcamSex.me rank cam sites with scores?",
    answer:
      "No. WebcamSex.me avoids fake ratings and unsupported rankings. The Best section is organized by comparison criteria and user needs.",
  },
  {
    question: "Why compare cam site types before signing up?",
    answer:
      "Comparing site types helps you understand privacy prompts, payment expectations, platform layout, and live room access before creating an account.",
  },
];

const quickDecisionRows = [
  {
    need: "Free browsing",
    suited: "Users comparing platforms before joining",
    compare: "Preview depth, prompts, upgrade clarity",
    signup: "Often optional for basic browsing",
    next: "/best/free-cam-sites",
  },
  {
    need: "Private features",
    suited: "Users who want more controlled sessions",
    compare: "Session types, payment prompts, user controls",
    signup: "Usually needed for paid private access",
    next: "/best/private-cam-sites",
  },
  {
    need: "Mobile use",
    suited: "Phone and tablet browsing",
    compare: "Responsive layout, speed, video controls",
    signup: "Should stay readable on small screens",
    next: "/best/mobile-cam-sites",
  },
  {
    need: "Verified profiles",
    suited: "Trust-conscious platform comparison",
    compare: "Profile signals, policies, account standards",
    signup: "Review platform standards first",
    next: "/best/verified-cam-sites",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/best",
});

export default function BestHubPage() {
  return (
    <main className="min-h-screen text-white">
      <JsonLd data={buildWebPageJsonLd({ title, description, path: "/best" })} />
      <JsonLd
        data={buildItemListJsonLd({
          name: "Best cam sites by user need",
          description,
          path: "/best",
          items: bestPageLinks,
        })}
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 md:pt-16">
        <Breadcrumbs
          items={[
            { label: SITE_NAME, href: "/" },
            { label: "Best Cam Sites" },
          ]}
        />
        <div className="max-w-5xl">
          <div className="mb-4 inline-flex rounded-full border border-[#8FB7FF]/28 bg-[#8FB7FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Best cam sites hub
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-7 text-white/72 md:text-lg md:leading-8">
            The best cam site for one user may be the wrong fit for another.
            This hub organizes high-intent comparison pages around practical
            needs: free access, private features, mobile browsing, verified
            profiles, HD video, no-signup viewing, no-card browsing, and
            beginner-friendly platform choice.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 pt-6">
        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Best cam sites by need
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Start with the reason you are comparing
          </h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-white/68 md:text-lg">
            Use these guides when you already know what matters most. Each page
            explains what to compare, who the category suits, what privacy and
            payment prompts to check, and the next step to take without relying
            on fake scores or generic directory copy.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {bestPageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-white/10 bg-black/24 p-5 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.045]"
              >
                <h2 className="text-xl font-semibold text-white">{link.label}</h2>
                {link.description ? (
                  <p className="mt-3 text-sm leading-6 text-white/64">
                    {link.description}
                  </p>
                ) : null}
              </Link>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
          <div className="p-6 md:p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
              Quick decision table
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Match the category to your next decision
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-t border-white/10 text-left text-sm">
              <thead className="bg-black/28 text-white/78">
                <tr>
                  <th className="px-5 py-4 font-semibold">Need</th>
                  <th className="px-5 py-4 font-semibold">Best suited for</th>
                  <th className="px-5 py-4 font-semibold">What to compare</th>
                  <th className="px-5 py-4 font-semibold">Signup expectations</th>
                  <th className="px-5 py-4 font-semibold">Good next step</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/64">
                {quickDecisionRows.map((row) => (
                  <tr key={row.need}>
                    <td className="px-5 py-4 font-semibold text-white/82">
                      {row.need}
                    </td>
                    <td className="px-5 py-4">{row.suited}</td>
                    <td className="px-5 py-4">{row.compare}</td>
                    <td className="px-5 py-4">{row.signup}</td>
                    <td className="px-5 py-4">
                      <Link
                        href={row.next}
                        className="font-semibold text-[#8FB7FF] transition hover:text-[#C8DAFF]"
                      >
                        Open guide
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
            <h2 className="text-xl font-semibold text-white">
              How to choose the right category
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Pick the page that matches your first concern. If you care about
              payment friction, start with free or no-card browsing. If you care
              about control, start with private or verified platform guidance.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
            <h2 className="text-xl font-semibold text-white">
              Safety and privacy basics
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              Compare privacy policies, account settings, payment prompts, and
              whether the platform explains paid features before asking you to
              commit.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
            <h2 className="text-xl font-semibold text-white">
              Comparison without fake rankings
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/64">
              WebcamSex.me uses decision criteria instead of invented ratings.
              Read the{" "}
              <Link
                href="/editorial-policy"
                className="text-[#8FB7FF] transition hover:text-[#C8DAFF]"
              >
                editorial policy
              </Link>{" "}
              for the standards behind this approach.
            </p>
          </article>
        </section>

        <section className="rounded-3xl border border-[#7C5CFF]/24 bg-[linear-gradient(135deg,rgba(124,92,255,0.22),rgba(5,5,7,0.94)_48%,rgba(0,171,255,0.12))] p-8 md:p-10">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8DAFF]">
            Compare next
          </div>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white">
            Start with the cam site type that fits your need.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
            If you are ready to inspect a platform flow, use an internal route
            and compare browsing access, prompts, mobile usability, and live
            room presentation before joining.
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

        <FaqBlock faqs={hubFaqs} />
        <RelatedLinks
          title="All best cam site pages"
          links={[
            ...bestPageLinks,
            {
              href: "/resources",
              label: "Resources",
              description: "Review WebcamSex.me resources and trust notes.",
            },
            {
              href: "/editorial-policy",
              label: "Editorial Policy",
              description: "See how comparison content and affiliate routes are handled.",
            },
          ]}
        />
      </section>
    </main>
  );
}
