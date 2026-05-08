import type { Metadata } from "next";
import Link from "next/link";

import InfoPage, { PageSection } from "@/components/site/InfoPage";
import { buildPageMetadata } from "@/lib/seo";

const description =
  "Learn how WebcamSex.me helps adults compare live cam platforms by fit, trust signals, mobile usability, and sign-up clarity before choosing where to join.";

export const metadata: Metadata = buildPageMetadata({
  title: "About WebcamSex.me",
  description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <InfoPage eyebrow="About" title="About WebcamSex.me" description={description} path="/about">
      <PageSection title="What WebcamSex.me is built to do">
        <p>
          WebcamSex.me is a comparison and decision guide for adults who want a
          clearer way to evaluate live cam platforms. The site is focused on
          practical questions: what kind of access is available, how easy the
          platform is to use on mobile, how private sessions are presented, and
          whether the browsing experience feels transparent before sign-up.
        </p>
        <p>
          The goal is not to publish a broad directory of every possible cam
          site. The goal is to help users narrow the decision by need, then move
          through a clean internal path that keeps platform, policy, and trust
          context easy to find.
        </p>
      </PageSection>

      <PageSection title="How this site is different">
        <p>
          WebcamSex.me is positioned around comparison rather than volume. A
          useful page should help a visitor decide whether a platform fits their
          privacy comfort, budget expectations, device habits, and quality
          preferences.
        </p>
        <p>
          Later phases can add deeper comparison pages and specific decision
          guides. Phase 1 establishes the site structure, editorial voice,
          redirect handling, and policy foundation those pages will rely on.
        </p>
      </PageSection>

      <PageSection title="Editorial standards">
        <p>
          We avoid invented ratings, unsupported popularity claims, and
          recycled page copy. When a page compares platforms, it should explain
          the decision factors behind the recommendation rather than leaning on
          vague superlatives.
        </p>
        <p>
          Read the{" "}
          <Link href="/editorial-policy" className="text-[#8FB7FF] transition hover:text-[#C8DAFF]">
            editorial policy
          </Link>{" "}
          for more detail on how content should be reviewed and improved.
        </p>
      </PageSection>
    </InfoPage>
  );
}
