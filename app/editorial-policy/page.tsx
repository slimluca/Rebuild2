import type { Metadata } from "next";

import InfoPage, { PageSection } from "@/components/site/InfoPage";
import { buildPageMetadata } from "@/lib/seo";

const description =
  "Read the WebcamSex.me editorial policy for how comparison pages, decision guides, affiliate links, corrections, and trust signals are handled.";

export const metadata: Metadata = buildPageMetadata({
  title: "Editorial Policy",
  description,
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <InfoPage eyebrow="Editorial" title="Editorial Policy" description={description} path="/editorial-policy">
      <PageSection title="Comparison-first publishing">
        <p>
          WebcamSex.me is written as a decision guide. Content should help
          visitors compare live cam platforms by user need, including privacy
          expectations, mobile usability, free access, private room structure,
          verification signals, and premium feature fit.
        </p>
        <p>
          Pages should avoid shallow repetition. A useful comparison explains
          why a platform may fit one visitor better than another, and it should
          make the tradeoffs clear without relying on invented rankings.
        </p>
      </PageSection>

      <PageSection title="Affiliate disclosure and link handling">
        <p>
          WebcamSex.me may earn compensation when visitors use affiliate links.
          Affiliate routes are handled through internal redirect paths so users
          can browse the site without direct external tracking URLs appearing in
          visible page content.
        </p>
        <p>
          Compensation should not determine whether a page includes clear
          drawbacks, limitations, or trust considerations. Decision quality is
          more important than making every platform sound identical.
        </p>
      </PageSection>

      <PageSection title="Claims, corrections, and updates">
        <p>
          We do not publish fake ratings, fake user counts, fake review stars,
          or fabricated performance numbers. If a claim cannot be supported, it
          should be removed, softened, or reframed as a general consideration.
        </p>
        <p>
          Visitors can use the contact form to flag a correction. Correction
          requests should be reviewed against the page purpose, source quality,
          and whether the wording still helps users make a more informed
          platform decision.
        </p>
      </PageSection>
    </InfoPage>
  );
}
