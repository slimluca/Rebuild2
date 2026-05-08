import type { Metadata } from "next";

import InfoPage, { PageSection } from "@/components/site/InfoPage";
import { buildPageMetadata } from "@/lib/seo";

const description =
  "Contact WebcamSex.me about editorial corrections, policy questions, privacy requests, or general feedback using the simple form on this page.";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact WebcamSex.me",
  description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <InfoPage eyebrow="Contact" title="Contact WebcamSex.me" description={description} path="/contact">
      <PageSection title="Send a message">
        <form action="#" className="grid gap-5">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-white/88">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="w-full rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#8FB7FF]/45 focus:bg-white/[0.055]"
              placeholder="Your name"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-white/88">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#8FB7FF]/45 focus:bg-white/[0.055]"
              placeholder="Your email"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="topic" className="text-sm font-medium text-white/88">
              Topic
            </label>
            <select
              id="topic"
              name="topic"
              className="w-full rounded-2xl border border-white/10 bg-[#10101A] px-4 py-3 text-sm text-white outline-none transition focus:border-[#8FB7FF]/45"
            >
              <option>Editorial correction</option>
              <option>Privacy request</option>
              <option>Policy question</option>
              <option>General feedback</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium text-white/88">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full resize-y rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#8FB7FF]/45 focus:bg-white/[0.055]"
              placeholder="Share the details of your request."
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-full bg-[#7C5CFF] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(124,92,255,0.34)] transition hover:bg-[#8B70FF] sm:w-auto"
          >
            Send Message
          </button>
        </form>
      </PageSection>

      <PageSection title="What to include">
        <p>
          For correction requests, include the page topic, the specific claim
          you want reviewed, and any context that helps us understand the issue.
          For privacy requests, describe the concern clearly without including
          sensitive account credentials or payment information.
        </p>
      </PageSection>
    </InfoPage>
  );
}
