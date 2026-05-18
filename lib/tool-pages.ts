import type { SiteLink } from "@/lib/site-navigation";

export interface ToolFaq {
  question: string;
  answer: string;
}

export type ToolKind =
  | "chooser"
  | "selector"
  | "category-finder"
  | "checklist";

export interface ToolPageData {
  slug: ToolPageSlug;
  path: string;
  label: string;
  h1: string;
  title: string;
  description: string;
  kind: ToolKind;
  intro: string[];
  quickAnswer: string;
  checklist: string[];
  guidance: string[];
  related: SiteLink[];
  cta: {
    title: string;
    body: string;
    primaryLabel: string;
    primaryHref: "/go/signup" | "/go/livejasmin" | "/go/random";
    secondaryLabel: string;
    secondaryHref: "/go/signup" | "/go/livejasmin" | "/go/random";
  };
  faqs: ToolFaq[];
}

export const toolPageOrder = [
  "cam-site-chooser",
  "no-signup-cam-site-checklist",
  "no-credit-card-cam-site-checklist",
  "private-vs-free-cam-site-selector",
  "mobile-cam-site-checklist",
  "verified-model-checklist",
  "hd-cam-site-checklist",
  "beginner-cam-site-checklist",
  "privacy-checklist",
  "model-category-finder",
] as const;

export type ToolPageSlug = (typeof toolPageOrder)[number];

type Seed = Omit<ToolPageData, "path" | "title">;

const defaultCta = {
  primaryLabel: "Compare Live Cam Options",
  primaryHref: "/go/signup" as const,
  secondaryLabel: "Preview Live Models",
  secondaryHref: "/go/random" as const,
};

const seeds: Seed[] = [
  {
    slug: "cam-site-chooser",
    label: "Cam Site Chooser",
    h1: "Cam Site Chooser: Find the Right Type of Platform",
    description:
      "Use a cam site chooser to compare free preview access, private cam options, mobile usability, no signup viewing, no-card browsing, verified model signals, and beginner friendly cam sites.",
    kind: "chooser",
    intro: [
      "The cam site chooser is a simple decision helper for matching your browsing priorities to the right comparison pages.",
      "It does not store answers or make fake personalized claims. Use it to narrow your next step before opening a platform route.",
    ],
    quickAnswer:
      "Choose the needs that matter most, then use the suggested Best pages to compare platform type before signup.",
    checklist: [
      "Free preview access before signup",
      "Private cam options and user control",
      "Mobile browsing on phone or tablet",
      "No signup viewing before registration",
      "No credit card browsing before payment",
      "Verified model signals and beginner-friendly layout",
    ],
    guidance: [
      "If several needs apply, open the pages that match your strongest concerns first.",
      "Use the result links as a starting point, then compare privacy, payment prompts, mobile usability, and live model discovery before joining.",
    ],
    related: [
      { href: "/best/free-cam-sites", label: "Best Free Cam Sites" },
      { href: "/best/private-cam-sites", label: "Private Cam Sites" },
      { href: "/best/mobile-cam-sites", label: "Mobile Cam Sites" },
      { href: "/best/cam-sites-no-signup", label: "No Signup Cam Sites" },
      { href: "/best/cam-sites-without-credit-card", label: "No Credit Card Cam Sites" },
      { href: "/best/verified-cam-sites", label: "Verified Cam Sites" },
      { href: "/best/cam-sites-for-beginners", label: "Beginner Cam Sites" },
      { href: "/guides/how-to-choose-a-cam-site", label: "How to Choose a Cam Site" },
    ],
    cta: {
      ...defaultCta,
      title: "Use your answers as a comparison starting point",
      body: "Preview live availability only after you know which platform type fits your needs.",
    },
    faqs: [
      {
        question: "Does the cam site chooser store my answers?",
        answer:
          "No. The chooser runs in the browser and does not store, submit, or track your answers.",
      },
      {
        question: "Does the chooser recommend one best platform?",
        answer:
          "No. It points to comparison pages by user need instead of making fake rankings or guaranteed recommendations.",
      },
      {
        question: "What should I do after using the chooser?",
        answer:
          "Read the matching Best, Guide, Feature, or Answer pages, then compare privacy, signup, payment, and mobile details before joining.",
      },
    ],
  },
  {
    slug: "no-signup-cam-site-checklist",
    label: "No Signup Checklist",
    h1: "No Signup Cam Site Checklist",
    description:
      "Use a no signup cam site checklist to compare preview access, account prompts, private feature limits, mobile browsing, privacy expectations, and payment prompts.",
    kind: "checklist",
    intro: [
      "No signup viewing is useful when you want to inspect a live cam platform before registering.",
      "This checklist helps you compare what is visible before account creation and where registration becomes necessary.",
    ],
    quickAnswer:
      "A useful no-signup cam site path lets you preview enough context to compare the platform while clearly showing which actions require an account.",
    checklist: [
      "Can you browse live previews before registration?",
      "Which actions trigger an account prompt?",
      "Are private features, messaging, or saved preferences clearly limited?",
      "Does mobile browsing show enough context before signup?",
      "Can you reach privacy, terms, and support pages before joining?",
      "Are payment prompts separate from basic account prompts?",
    ],
    guidance: [
      "No signup viewing is not the same as no credit card browsing.",
      "Use this checklist with the no-card checklist when you want low-commitment browsing before both registration and payment.",
    ],
    related: [
      { href: "/best/cam-sites-no-signup", label: "Best Cam Sites With No Signup Viewing" },
      { href: "/features/no-signup-viewing", label: "No Signup Viewing Feature" },
      { href: "/answers/can-you-watch-cam-sites-without-signup", label: "Can You Watch Without Signup?" },
      { href: "/guides/cam-sites-no-signup", label: "No Signup Viewing Guide" },
    ],
    cta: {
      ...defaultCta,
      primaryLabel: "Preview Live Models",
      primaryHref: "/go/random",
      title: "Compare no-signup access with live previews",
      body: "Use live previews as one signal, then check where registration, interaction, or payment prompts begin.",
    },
    faqs: [
      {
        question: "Does no signup viewing mean full access?",
        answer:
          "No. It usually means some browsing or previewing is available, while interaction, private features, saved preferences, or paid tools may require signup.",
      },
      {
        question: "Should I still check privacy pages without signing up?",
        answer:
          "Yes. Privacy expectations and device habits still matter even before account creation.",
      },
      {
        question: "What is the next page to read?",
        answer:
          "Start with the no-signup Best page, then compare no-credit-card browsing if payment details are also a concern.",
      },
    ],
  },
  {
    slug: "no-credit-card-cam-site-checklist",
    label: "No Credit Card Checklist",
    h1: "No Credit Card Cam Site Checklist",
    description:
      "Use a no credit card cam site checklist to compare free browsing, billing prompts, terms pages, privacy settings, platform transparency, and upgrade clarity.",
    kind: "checklist",
    intro: [
      "No credit card browsing helps users compare a cam platform before sharing payment details.",
      "This checklist focuses on what happens before billing prompts and whether paid features are explained clearly.",
    ],
    quickAnswer:
      "A no-card browsing path is useful when it makes free previews clear and separates browsing from paid private or premium features.",
    checklist: [
      "Can you browse live previews without entering payment details?",
      "Which feature first asks for a card or credit purchase?",
      "Are billing terms visible before payment?",
      "Does the site explain private, premium, or credit-based features?",
      "Are privacy settings and account controls easy to find?",
      "Can you compare on mobile without confusing payment prompts?",
    ],
    guidance: [
      "No-card browsing does not mean every feature is free.",
      "Read payment terms and confirmation steps before entering billing details anywhere.",
    ],
    related: [
      { href: "/best/cam-sites-without-credit-card", label: "Best Cam Sites Without Credit Card Requirements" },
      { href: "/features/no-credit-card-browsing", label: "No Credit Card Browsing Feature" },
      { href: "/answers/do-cam-sites-require-credit-card", label: "Do Cam Sites Require a Credit Card?" },
      { href: "/guides/cam-sites-without-credit-card", label: "No Credit Card Browsing Guide" },
    ],
    cta: {
      ...defaultCta,
      title: "Compare no-card browsing before paying",
      body: "Use no-card guidance and live previews to understand what can be compared before billing details.",
    },
    faqs: [
      {
        question: "Can cam sites be browsed without a credit card?",
        answer:
          "Some platforms allow previews or public browsing before payment details, but private, premium, or credit-based features may require payment later.",
      },
      {
        question: "Is no credit card browsing the same as no signup?",
        answer:
          "No. A site may allow no-card browsing while still requiring an account for certain actions.",
      },
      {
        question: "What should I check before entering payment details?",
        answer:
          "Review the paid feature, confirmation step, billing terms, privacy policy, and account controls.",
      },
    ],
  },
  {
    slug: "private-vs-free-cam-site-selector",
    label: "Private vs Free Selector",
    h1: "Private vs Free Cam Site Selector",
    description:
      "Use a private vs free cam site selector to compare free preview browsing, private cam options, balanced platform paths, and beginner friendly routes.",
    kind: "selector",
    intro: [
      "Private and free cam sites serve different browsing needs.",
      "This selector helps you decide whether to start with public previews, private-feature guidance, a balanced route, or beginner-friendly pages.",
    ],
    quickAnswer:
      "Free paths suit low-commitment browsing; private paths suit users comparing control and paid feature clarity; balanced routes compare both before signup.",
    checklist: [
      "Free preview focused route",
      "Private experience focused route",
      "Balanced browsing route",
      "Beginner friendly route",
    ],
    guidance: [
      "Choose the result that matches your comfort level, then compare signup and payment expectations carefully.",
      "Private features can involve paid prompts, while free browsing may have interaction limits.",
    ],
    related: [
      { href: "/compare/private-cam-sites-vs-free-cam-sites", label: "Private vs Free Cam Sites" },
      { href: "/best/private-cam-sites", label: "Best Private Cam Sites" },
      { href: "/best/free-cam-sites", label: "Best Free Cam Sites" },
      { href: "/features/private-show-options", label: "Private Show Options" },
    ],
    cta: {
      ...defaultCta,
      primaryLabel: "Explore Private Cam Options",
      primaryHref: "/go/livejasmin",
      title: "Compare private and free paths before joining",
      body: "Use the selector result to pick a comparison page, then preview live availability through internal routes only.",
    },
    faqs: [
      {
        question: "Is private always better than free?",
        answer:
          "No. Private and free styles fit different needs, and the better route depends on control, payment comfort, and browsing expectations.",
      },
      {
        question: "Can I compare both before signing up?",
        answer:
          "Yes. Use free preview pages and private feature pages together before choosing.",
      },
      {
        question: "Do private features usually involve payment?",
        answer:
          "Private features often involve credits, premium tools, or payment prompts, so payment awareness matters.",
      },
    ],
  },
  {
    slug: "mobile-cam-site-checklist",
    label: "Mobile Checklist",
    h1: "Mobile Cam Site Checklist",
    description:
      "Use a mobile cam site checklist to compare responsive layout, fast loading, clear buttons, simple signup flow, privacy on shared devices, stream quality, and tablet support.",
    kind: "checklist",
    intro: [
      "Mobile cam sites need clear layouts, readable prompts, and stable live previews on smaller screens.",
      "Use this checklist before choosing a platform from a phone or tablet.",
    ],
    quickAnswer:
      "A mobile cam site should keep model cards, video previews, menus, buttons, signup prompts, and privacy links easy to use without awkward overflow.",
    checklist: [
      "Responsive layout on phone and tablet",
      "Fast enough loading to compare live previews",
      "Clear buttons and touch targets",
      "Simple signup flow without cramped prompts",
      "Privacy caution for shared devices and saved forms",
      "Stream quality that remains understandable on mobile",
      "Tablet support for grids, filters, and video controls",
    ],
    guidance: [
      "Check mobile usability before signup because prompts can feel different on smaller screens.",
      "If mobile layout feels confusing, use beginner and responsive feature pages before joining.",
    ],
    related: [
      { href: "/best/mobile-cam-sites", label: "Best Mobile Cam Sites" },
      { href: "/guides/best-cam-sites-for-mobile", label: "Mobile Cam Site Guide" },
      { href: "/features/mobile-friendly-cam-sites", label: "Mobile Friendly Features" },
      { href: "/features/device-compatibility", label: "Device Compatibility" },
    ],
    cta: {
      ...defaultCta,
      title: "Compare mobile usability with live previews",
      body: "Preview live models and check layout, prompts, stream clarity, and privacy comfort on your device.",
    },
    faqs: [
      {
        question: "What makes a cam site good on mobile?",
        answer:
          "Readable model cards, clear buttons, stable previews, simple menus, and visible privacy or payment information all matter.",
      },
      {
        question: "Should tablet browsing be checked separately?",
        answer:
          "Yes. Tablet layouts can differ from phone and desktop views, especially for grids and video controls.",
      },
      {
        question: "Why does shared device privacy matter?",
        answer:
          "Saved forms, browser history, notifications, and shared access can affect privacy comfort.",
      },
    ],
  },
  {
    slug: "verified-model-checklist",
    label: "Verified Model Checklist",
    h1: "Verified Model Checklist",
    description:
      "Use a verified model checklist to compare profile consistency, platform verification language, clear model pages, private feature clarity, quality signals, and realistic expectations.",
    kind: "checklist",
    intro: [
      "Verified model signals can help users compare platform standards, but they should not be treated as a guarantee.",
      "Use this checklist to understand how verified cam models fit into broader platform comparison.",
    ],
    quickAnswer:
      "Verified model signals are useful when they are clear, consistent, and supported by transparent platform language.",
    checklist: [
      "Profile details are consistent and readable",
      "Verification language is clear rather than vague",
      "Model pages explain relevant platform signals",
      "Private feature prompts are separate and understandable",
      "Quality signals do not rely on fake ratings",
      "The site avoids certainty it cannot support",
    ],
    guidance: [
      "Verification is one comparison factor, not the whole decision.",
      "Combine verified model signals with privacy, payment, mobile, and HD checks.",
    ],
    related: [
      { href: "/best/verified-cam-sites", label: "Best Verified Cam Sites" },
      { href: "/categories/verified-cam-models", label: "Verified Cam Models" },
      { href: "/guides/verified-cam-models", label: "Verified Models Guide" },
      { href: "/features/verified-model-signals", label: "Verified Model Signals" },
    ],
    cta: {
      ...defaultCta,
      primaryLabel: "Start With a Verified Platform",
      primaryHref: "/go/livejasmin",
      title: "Compare verified model signals carefully",
      body: "Use verification as one signal while still checking privacy, mobile usability, payment prompts, and platform fit.",
    },
    faqs: [
      {
        question: "Do verified model signals guarantee quality?",
        answer:
          "No. They can be helpful signals, but users should still compare platform policies, prompts, privacy, and usability.",
      },
      {
        question: "What should verification language explain?",
        answer:
          "It should make the platform's standards understandable without vague or unsupported claims.",
      },
      {
        question: "Where should I go next?",
        answer:
          "Use the verified cam sites page and verified model category page to compare discovery paths.",
      },
    ],
  },
  {
    slug: "hd-cam-site-checklist",
    label: "HD Checklist",
    h1: "HD Cam Site Checklist",
    description:
      "Use an HD cam site checklist to compare HD availability, connection stability, device quality, mobile playback, public versus private stream quality, and realistic expectations.",
    kind: "checklist",
    intro: [
      "HD quality can make live previews easier to evaluate, but it depends on more than a label.",
      "Use this checklist to compare stream clarity across devices and access types without assuming guaranteed quality.",
    ],
    quickAnswer:
      "HD cam sites are worth comparing by actual preview clarity, player stability, device fit, connection behavior, and mobile usability.",
    checklist: [
      "HD availability is visible where relevant",
      "Connection stability supports live preview comparison",
      "Device quality is good enough for the stream",
      "Mobile playback remains readable and stable",
      "Private and public stream expectations are clear",
      "The platform avoids unrealistic HD promises",
    ],
    guidance: [
      "HD availability can change by model, device, connection, or player behavior.",
      "Use HD checks with mobile and device compatibility guidance before signup.",
    ],
    related: [
      { href: "/best/hd-cam-sites", label: "Best HD Cam Sites" },
      { href: "/categories/hd-cam-models", label: "HD Cam Models" },
      { href: "/features/hd-stream-quality", label: "HD Stream Quality" },
      { href: "/features/device-compatibility", label: "Device Compatibility" },
    ],
    cta: {
      ...defaultCta,
      title: "Compare HD quality with current live previews",
      body: "Use live availability as one signal while checking device fit, stream clarity, and mobile layout.",
    },
    faqs: [
      {
        question: "Is HD quality guaranteed on every live stream?",
        answer:
          "No. Quality can depend on model settings, device, connection, and platform player behavior.",
      },
      {
        question: "Why check HD on mobile?",
        answer:
          "Small screens, touch controls, and mobile connections can affect how clear or stable a stream feels.",
      },
      {
        question: "Should HD quality decide everything?",
        answer:
          "No. It should be compared with privacy, payment prompts, verified signals, and platform usability.",
      },
    ],
  },
  {
    slug: "beginner-cam-site-checklist",
    label: "Beginner Checklist",
    h1: "Beginner Cam Site Checklist",
    description:
      "Use a beginner cam site checklist to compare simple layout, clear signup path, free preview access, privacy basics, payment awareness, model discovery, and calm next steps.",
    kind: "checklist",
    intro: [
      "Beginner friendly cam sites should make the first comparison calm and understandable.",
      "This checklist helps users avoid rushed signup decisions by focusing on layout, privacy, payment clarity, and preview access.",
    ],
    quickAnswer:
      "A beginner friendly cam site should make browsing, signup prompts, payment expectations, privacy pages, and model discovery easy to understand.",
    checklist: [
      "Simple layout and predictable navigation",
      "Clear signup path without confusing prompts",
      "Free preview access before commitment",
      "Visible privacy, terms, and support links",
      "Payment awareness before private or premium features",
      "Model discovery tools that are easy to scan",
      "No pressure to rush account creation",
    ],
    guidance: [
      "Beginners should compare slowly and avoid unclear payment prompts.",
      "Use the chooser first if you are unsure whether free, private, mobile, or verified paths matter most.",
    ],
    related: [
      { href: "/best/cam-sites-for-beginners", label: "Best Cam Sites for Beginners" },
      { href: "/guides/best-cam-sites-for-beginners", label: "Beginner Guide" },
      { href: "/features/beginner-friendly-layouts", label: "Beginner Friendly Layouts" },
      { href: "/answers/what-to-check-before-signing-up", label: "What to Check Before Signing Up" },
    ],
    cta: {
      ...defaultCta,
      title: "Compare beginner-friendly paths before joining",
      body: "Use live previews only after checking layout, privacy, payment clarity, and signup expectations.",
    },
    faqs: [
      {
        question: "What makes a cam site beginner friendly?",
        answer:
          "Clear navigation, visible preview access, understandable prompts, privacy links, and simple payment explanations help beginners compare safely.",
      },
      {
        question: "Should beginners start with free preview access?",
        answer:
          "Free previews can be useful because they allow comparison before account or payment steps.",
      },
      {
        question: "What should beginners avoid?",
        answer:
          "Avoid rushed signup, unclear payment prompts, hidden terms, and layouts that make privacy or account settings hard to find.",
      },
    ],
  },
  {
    slug: "privacy-checklist",
    label: "Privacy Checklist",
    h1: "Cam Site Privacy Checklist",
    description:
      "Use a cam site privacy checklist to review account details, payment caution, browser privacy, shared device settings, notifications, platform transparency, and safe comparison habits.",
    kind: "checklist",
    intro: [
      "Privacy is one of the most important decision factors when comparing live cam sites.",
      "This checklist does not promise any platform is completely safe. It helps users review practical privacy signals before joining.",
    ],
    quickAnswer:
      "A privacy-aware cam site comparison looks at account details, payment prompts, browser and device habits, notification settings, and transparent platform policies.",
    checklist: [
      "Review what account details are requested",
      "Treat payment information cautiously",
      "Use browser privacy settings that fit your comfort level",
      "Be careful on shared devices",
      "Check notification and saved-form behavior",
      "Look for accessible privacy, terms, and support pages",
      "Avoid sharing sensitive personal details",
    ],
    guidance: [
      "Privacy depends on both platform behavior and user habits.",
      "Use this checklist with account safety and payment awareness pages before joining.",
    ],
    related: [
      { href: "/features/privacy-controls", label: "Privacy Controls" },
      { href: "/features/account-safety", label: "Account Safety" },
      { href: "/answers/how-to-protect-privacy-on-cam-sites", label: "How to Protect Privacy" },
      { href: "/guides/live-cam-site-safety-checklist", label: "Safety Checklist Guide" },
    ],
    cta: {
      ...defaultCta,
      title: "Compare privacy signals before opening a platform",
      body: "Review privacy, account, payment, and device considerations before using live platform routes.",
    },
    faqs: [
      {
        question: "Can any checklist guarantee privacy?",
        answer:
          "No. A checklist can help you compare signals and habits, but it cannot guarantee complete privacy.",
      },
      {
        question: "What device privacy habits matter?",
        answer:
          "Shared devices, browser history, saved forms, notifications, and account credentials all matter.",
      },
      {
        question: "Should I check privacy pages before signup?",
        answer:
          "Yes. Privacy, terms, support, and account pages should be easy to find before creating an account.",
      },
    ],
  },
  {
    slug: "model-category-finder",
    label: "Model Category Finder",
    h1: "Model Category Finder for Live Cam Browsing",
    description:
      "Use a model category finder to browse verified models, HD models, mobile cam models, private show models, new models, popular models, appearance categories, and live model previews.",
    kind: "category-finder",
    intro: [
      "The model category finder helps connect browsing intent to the right category pages.",
      "Live availability can change, so use category links as discovery paths rather than fixed model guarantees.",
    ],
    quickAnswer:
      "Choose a browsing intent, then open the related category pages and compare live availability, platform filters, HD quality, mobile usability, and signup expectations.",
    checklist: [
      "Verified model signals",
      "HD-oriented model previews",
      "Mobile browsing paths",
      "Private show model discovery",
      "New or popular model categories",
      "Appearance-based category browsing",
    ],
    guidance: [
      "Categories are browsing aids, not fake rankings or availability guarantees.",
      "After choosing a category, compare the related Best, Guide, and Feature pages before joining.",
    ],
    related: [
      { href: "/models", label: "Live Models" },
      { href: "/categories/live-cam-models", label: "Live Cam Models" },
      { href: "/categories/verified-cam-models", label: "Verified Cam Models" },
      { href: "/categories/hd-cam-models", label: "HD Cam Models" },
      { href: "/categories/private-show-models", label: "Private Show Models" },
      { href: "/categories/mobile-cam-models", label: "Mobile Cam Models" },
    ],
    cta: {
      ...defaultCta,
      primaryLabel: "Preview Live Models",
      primaryHref: "/go/random",
      title: "Use categories as a live discovery starting point",
      body: "Open live previews only after remembering that availability changes and filters may vary by platform.",
    },
    faqs: [
      {
        question: "Does the model category finder show exact availability?",
        answer:
          "No. It links to category pages and live previews, but model availability can change at any time.",
      },
      {
        question: "Are category pages fake model profiles?",
        answer:
          "No. They use existing live feed logic and category guidance without hardcoded fake model data.",
      },
      {
        question: "What should I compare after choosing a category?",
        answer:
          "Compare platform filters, mobile usability, verified signals, HD expectations, privacy, and signup prompts.",
      },
    ],
  },
];

function buildToolPage(seed: Seed): ToolPageData {
  return {
    ...seed,
    path: `/tools/${seed.slug}`,
    title: seed.h1,
  };
}

export const toolPages = Object.fromEntries(
  seeds.map((seed) => [seed.slug, buildToolPage(seed)]),
) as Record<ToolPageSlug, ToolPageData>;

export const toolPageLinks: SiteLink[] = toolPageOrder.map((slug) => {
  const page = toolPages[slug];

  return {
    href: page.path,
    label: page.label,
    description: page.description,
  };
});

export function getToolPage(slug: string) {
  if (slug in toolPages) {
    return toolPages[slug as ToolPageSlug];
  }

  return null;
}
