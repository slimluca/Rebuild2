import type { Metadata } from "next";

import InfoPage, { PageSection } from "@/components/site/InfoPage";
import { buildPageMetadata } from "@/lib/seo";

const description =
  "Review the WebcamSex.me privacy policy, including how contact form information, affiliate redirects, analytics, and general site data may be handled.";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <InfoPage eyebrow="Privacy" title="Privacy Policy" description={description} path="/privacy-policy">
      <PageSection title="Information visitors choose to provide">
        <p>
          Visitors may choose to submit information through the contact form,
          such as a name, reply address, topic, and message. That information
          should be used to review and respond to the request, investigate
          corrections, or handle privacy and policy questions.
        </p>
        <p>
          Visitors should not submit account passwords, payment details, or
          sensitive platform credentials through the form.
        </p>
      </PageSection>

      <PageSection title="Affiliate redirects and third-party platforms">
        <p>
          WebcamSex.me uses internal redirect routes for affiliate destinations.
          When a visitor follows a redirect, the destination platform may apply
          its own privacy practices, cookies, tracking, account rules, and
          payment processes.
        </p>
        <p>
          The site does not control the privacy practices of external platforms.
          Visitors should review each platform policy before creating an
          account or making a purchase.
        </p>
      </PageSection>

      <PageSection title="Analytics and site operation">
        <p>
          The site may use standard operational data to understand page
          performance, prevent abuse, diagnose technical issues, and improve
          navigation. This can include browser type, general device information,
          referring pages, and non-sensitive usage patterns.
        </p>
        <p>
          Privacy requests can be submitted through the contact form. Include
          enough context to identify the request, but avoid sending sensitive
          personal or financial information.
        </p>
      </PageSection>

      <PageSection title="Comparison content and privacy choices">
        <p>
          Many visitors use WebcamSex.me before creating an account on a
          third-party platform. The comparison pages are designed to help users
          think about privacy before that step, including no-signup browsing,
          payment prompts, account settings, mobile notifications, and whether
          paid or private features are clearly explained.
        </p>
        <p>
          Internal affiliate redirect paths do not make WebcamSex.me the owner
          of the destination platform experience. Once a visitor leaves through
          a redirect, the destination platform controls its own privacy,
          account, billing, and support practices.
        </p>
      </PageSection>
    </InfoPage>
  );
}
