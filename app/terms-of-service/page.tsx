import type { Metadata } from "next";

import InfoPage, { PageSection } from "@/components/site/InfoPage";
import { buildPageMetadata } from "@/lib/seo";

const description =
  "Read the WebcamSex.me terms of service covering adult-only access, informational content, affiliate redirects, acceptable use, and site limitations.";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service",
  description,
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <InfoPage eyebrow="Terms" title="Terms of Service" description={description} path="/terms-of-service">
      <PageSection title="Adult-only informational website">
        <p>
          WebcamSex.me is intended for adults only. By using the site, visitors
          confirm that they are legally permitted to view adult-oriented
          comparison content in their location.
        </p>
        <p>
          The site provides informational comparison guidance. It does not
          operate live cam rooms, process user payments for third-party
          platforms, or manage performer accounts.
        </p>
      </PageSection>

      <PageSection title="Affiliate redirects">
        <p>
          Some links route visitors through site paths before
          sending them to a third-party platform. Those platforms may have their
          own terms, account requirements, billing rules, age checks, and privacy
          practices.
        </p>
        <p>
          Visitors are responsible for reviewing destination platform terms
          before signing up, buying credits, joining private sessions, or using
          paid features.
        </p>
      </PageSection>

      <PageSection title="Use of the site">
        <p>
          Visitors may use WebcamSex.me for personal comparison and research.
          Misuse of the site, automated scraping, attempts to bypass redirect
          controls, or attempts to interfere with site operation are not
          permitted.
        </p>
        <p>
          Content may change as the site expands. We aim to keep information
          useful and responsible, but visitors should verify important details
          directly with the destination platform before making decisions.
        </p>
      </PageSection>

      <PageSection title="No platform operation or account support">
        <p>
          WebcamSex.me does not host performer rooms, manage live model
          profiles, set third-party prices, issue credits, or control account
          features on external cam platforms. Any account, billing, privacy, or
          platform support issue must be handled with the relevant destination
          platform.
        </p>
        <p>
          The comparison content is intended to help visitors ask better
          questions before joining a platform. It should not be treated as a
          guarantee that a third-party service will match every visitor
          preference, device, location, or payment expectation.
        </p>
      </PageSection>
    </InfoPage>
  );
}
