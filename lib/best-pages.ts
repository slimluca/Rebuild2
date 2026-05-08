import type { SiteLink } from "@/lib/site-navigation";

export interface BestPageFaq {
  question: string;
  answer: string;
}

export interface BestPageSection {
  title: string;
  body: string[];
  bullets?: string[];
}

export interface BestPageData {
  slug: string;
  path: string;
  label: string;
  h1: string;
  title: string;
  description: string;
  intro: string[];
  summary: string;
  criteria: {
    label: string;
    detail: string;
  }[];
  bestFor: BestPageSection[];
  safety: string[];
  cta: {
    title: string;
    body: string;
    primaryLabel: string;
    primaryHref: "/go/signup" | "/go/livejasmin" | "/go/random";
    secondaryLabel: string;
    secondaryHref: "/go/signup" | "/go/livejasmin" | "/go/random";
  };
  faqs: BestPageFaq[];
  related: string[];
  includeLivePreview?: boolean;
}

export const bestPageOrder = [
  "free-cam-sites",
  "private-cam-sites",
  "mobile-cam-sites",
  "verified-cam-sites",
  "hd-cam-sites",
  "cam-sites-no-signup",
  "cam-sites-without-credit-card",
  "cam-sites-for-beginners",
] as const;

export type BestPageSlug = (typeof bestPageOrder)[number];

export const bestPages: Record<BestPageSlug, BestPageData> = {
  "free-cam-sites": {
    slug: "free-cam-sites",
    path: "/best/free-cam-sites",
    label: "Free Cam Sites",
    h1: "Best Free Cam Sites for Comparing Live Platforms",
    title: "Best Free Cam Sites for Comparing Live Platforms",
    description:
      "Compare free cam sites by browsing access, preview limits, account prompts, privacy expectations, and the signals worth checking before you join.",
    intro: [
      "Free cam sites are useful when you want to understand a platform before creating an account or adding payment details. The best starting point is not the platform with the loudest claim, but the one that lets you compare room access, preview quality, navigation, and sign-up pressure clearly.",
      "Use this guide to think through when free access is enough, when account creation becomes useful, and which limits to notice before you choose where to spend more time.",
    ],
    summary:
      "Choose a free cam site when you want low-commitment browsing, but compare how much you can see before signup, how quickly prompts appear, and whether the platform explains paid features clearly.",
    criteria: [
      {
        label: "Preview depth",
        detail:
          "Look at whether public rooms, model previews, and basic navigation are available before account creation.",
      },
      {
        label: "Prompt timing",
        detail:
          "Compare how soon the site asks for signup, payment, or age confirmation during normal browsing.",
      },
      {
        label: "Room clarity",
        detail:
          "A useful free view should make layout, stream quality, and platform style easy to understand.",
      },
      {
        label: "Upgrade transparency",
        detail:
          "Paid features should be presented clearly, especially private sessions, credits, and premium access.",
      },
    ],
    bestFor: [
      {
        title: "Best for platform previewing",
        body: [
          "Free access works best when your goal is to compare the platform environment before making a commitment. Focus on navigation quality, room loading, and whether the site gives enough context to judge if it fits your browsing style.",
        ],
        bullets: [
          "Useful when you want to compare several platforms quickly.",
          "Less useful if the site hides basic room details behind early prompts.",
        ],
      },
      {
        title: "Best for cautious first-time users",
        body: [
          "If you are new to live cam platforms, free access gives you time to understand common layouts and paid feature prompts without rushing into registration.",
        ],
      },
      {
        title: "Best for checking mobile comfort",
        body: [
          "Free browsing can reveal whether a platform works smoothly on your phone before you create an account. Check tap targets, menu clarity, and how easily you can return to browsing after opening a room.",
        ],
      },
    ],
    safety: [
      "Do not enter payment details just to inspect basic browsing unless you understand what the platform is asking for.",
      "Use free access to compare privacy prompts, account requirements, and whether paid features are explained before purchase.",
      "Read the site policies and use the editorial notes on WebcamSex.me as decision support, not as a substitute for reviewing destination platform terms.",
    ],
    cta: {
      title: "Compare free access with a live preview",
      body: "Start with a low-commitment route and compare how the platform feels before deciding whether to register.",
      primaryLabel: "Compare Live Cam Options",
      primaryHref: "/go/signup",
      secondaryLabel: "View Live Models",
      secondaryHref: "/go/random",
    },
    faqs: [
      {
        question: "Are free cam sites completely free to use?",
        answer:
          "Free cam sites often allow public browsing or room previews, but private sessions, credits, messaging, or premium features may require an account or payment.",
      },
      {
        question: "What should I compare before joining a free cam site?",
        answer:
          "Compare preview depth, signup prompts, mobile usability, paid feature clarity, and whether the platform gives enough information before asking you to register.",
      },
      {
        question: "When is free viewing enough?",
        answer:
          "Free viewing is enough when you only want to compare platform style, check room activity, or decide whether a site feels comfortable before creating an account.",
      },
    ],
    related: [
      "cam-sites-no-signup",
      "cam-sites-without-credit-card",
      "cam-sites-for-beginners",
    ],
    includeLivePreview: true,
  },
  "private-cam-sites": {
    slug: "private-cam-sites",
    path: "/best/private-cam-sites",
    label: "Private Cam Sites",
    h1: "Best Private Cam Sites for a More Controlled Experience",
    title: "Best Private Cam Sites for a More Controlled Experience",
    description:
      "Compare private cam sites by user control, session clarity, privacy expectations, paid feature prompts, and verification signals before choosing a platform.",
    intro: [
      "Private cam sites appeal to users who want more control than a public room usually provides. The important comparison is not just whether private sessions exist, but how clearly the platform explains access, cost prompts, performer availability, and user controls before you start.",
      "A good private cam platform should make expectations visible. You should understand where public browsing ends, where paid private access begins, and what privacy-related decisions you need to make before joining.",
    ],
    summary:
      "Choose a private cam site when session control matters, and compare transparency around paid access, privacy prompts, model verification, and room controls before you commit.",
    criteria: [
      {
        label: "Session expectations",
        detail:
          "Look for clear distinctions between public rooms, group sessions, private sessions, and premium access.",
      },
      {
        label: "User control",
        detail:
          "Compare whether the platform makes account settings, spending prompts, and session actions easy to understand.",
      },
      {
        label: "Verification context",
        detail:
          "Private experiences benefit from stronger platform standards and clearer performer profile signals.",
      },
      {
        label: "Privacy friction",
        detail:
          "Check how the site handles account creation, payment prompts, notifications, and browsing discretion.",
      },
    ],
    bestFor: [
      {
        title: "Best for users who want more control",
        body: [
          "Private cam sites are better suited to users who care about a more focused experience and want clearer control over when they move beyond public browsing.",
        ],
      },
      {
        title: "Best for comparing paid features",
        body: [
          "Private features vary by platform. Compare how pricing prompts appear, whether the site explains paid access before you enter a room, and how easy it is to step back if the flow is not right for you.",
        ],
      },
      {
        title: "Best for verification-conscious browsing",
        body: [
          "When private sessions are part of the decision, verified platform signals matter more. They help users evaluate whether profiles and platform standards feel credible before signing up.",
        ],
      },
    ],
    safety: [
      "Read private session prompts carefully before confirming any paid action.",
      "Avoid rushing through account or payment screens just because a room is active.",
      "Give more weight to platforms that make privacy settings, account controls, and session expectations easy to find.",
    ],
    cta: {
      title: "Explore private cam options with clearer context",
      body: "Use the internal redirect route to compare a featured platform while keeping affiliate handling centralized.",
      primaryLabel: "Explore Private Cam Options",
      primaryHref: "/go/livejasmin",
      secondaryLabel: "View Live Models",
      secondaryHref: "/go/random",
    },
    faqs: [
      {
        question: "What makes a cam site better for private sessions?",
        answer:
          "A better private cam site explains session types, paid access prompts, user controls, privacy settings, and performer profile context clearly before you commit.",
      },
      {
        question: "Do private cam sites always require payment?",
        answer:
          "Private features commonly require payment or credits, though many platforms still allow public browsing before you decide whether paid access makes sense.",
      },
      {
        question: "How should I think about privacy on private cam sites?",
        answer:
          "Review account settings, payment prompts, notification behavior, and the platform privacy policy before using paid private features.",
      },
    ],
    related: ["verified-cam-sites", "hd-cam-sites", "mobile-cam-sites"],
  },
  "mobile-cam-sites": {
    slug: "mobile-cam-sites",
    path: "/best/mobile-cam-sites",
    label: "Mobile Cam Sites",
    h1: "Best Mobile Cam Sites for Phones and Tablets",
    title: "Best Mobile Cam Sites for Phones and Tablets",
    description:
      "Compare mobile cam sites by responsive layout, fast loading, video clarity, room navigation, privacy prompts, and simple signup flow.",
    intro: [
      "Mobile cam sites need to do more than shrink a desktop layout. A good mobile experience makes browsing, room previewing, account prompts, and live video controls easy to understand on a smaller screen.",
      "Use this page to compare mobile usability before you join, especially if you expect to browse mostly from a phone or tablet.",
    ],
    summary:
      "Choose a mobile cam site when phone usability matters, and compare speed, layout clarity, video behavior, signup prompts, and whether controls are comfortable on touch screens.",
    criteria: [
      {
        label: "Responsive layout",
        detail:
          "Menus, cards, room previews, and CTA buttons should stay readable without awkward zooming or overlap.",
      },
      {
        label: "Loading behavior",
        detail:
          "Mobile browsing depends on fast page loads, stable previews, and clear fallbacks when a stream is unavailable.",
      },
      {
        label: "Touch navigation",
        detail:
          "Compare how easy it is to open rooms, return to lists, adjust account prompts, and avoid accidental clicks.",
      },
      {
        label: "Signup flow",
        detail:
          "A mobile-friendly platform should keep registration and payment prompts clear without crowding the screen.",
      },
    ],
    bestFor: [
      {
        title: "Best for browsing away from desktop",
        body: [
          "Mobile cam sites suit users who want quick comparison access without sitting at a computer. The best fit is usually the platform that keeps room discovery calm and readable on a small screen.",
        ],
      },
      {
        title: "Best for checking video fit quickly",
        body: [
          "On mobile, stream clarity depends on the device, connection, and platform player. Compare how quickly previews load and whether controls remain usable while video is active.",
        ],
      },
      {
        title: "Best for simple first sessions",
        body: [
          "Beginners often benefit from mobile layouts that avoid clutter. Look for fewer confusing menus, readable prompts, and easy routes back to comparison pages.",
        ],
      },
    ],
    safety: [
      "Check whether the mobile site makes account and payment prompts clear before you tap through.",
      "Use device privacy settings thoughtfully, especially around notifications and saved browser data.",
      "Avoid platforms that make important details hard to read on a phone.",
    ],
    cta: {
      title: "Compare mobile-friendly live cam access",
      body: "Open a live preview and judge whether the platform feels comfortable on your device before going deeper.",
      primaryLabel: "View Live Models",
      primaryHref: "/go/random",
      secondaryLabel: "Compare Live Cam Options",
      secondaryHref: "/go/signup",
    },
    faqs: [
      {
        question: "What should a good mobile cam site include?",
        answer:
          "It should include responsive room cards, readable prompts, fast loading, clear video controls, and a signup flow that works without crowding the screen.",
      },
      {
        question: "Does mobile video quality depend only on the cam site?",
        answer:
          "No. Video quality also depends on your device, connection, and the active stream, so compare how the platform handles loading and fallback states.",
      },
      {
        question: "Are mobile cam sites good for beginners?",
        answer:
          "They can be, especially when the platform keeps navigation simple, makes pricing prompts clear, and avoids rushed signup flows.",
      },
    ],
    related: ["hd-cam-sites", "free-cam-sites", "cam-sites-for-beginners"],
    includeLivePreview: true,
  },
  "verified-cam-sites": {
    slug: "verified-cam-sites",
    path: "/best/verified-cam-sites",
    label: "Verified Cam Sites",
    h1: "Best Verified Cam Sites for Real Model Discovery",
    title: "Best Verified Cam Sites for Real Model Discovery",
    description:
      "Compare verified cam sites by profile signals, platform standards, trust cues, account clarity, and what to check before joining.",
    intro: [
      "Verified cam sites are important for users who want more confidence in the platform environment before signing up. Verification does not remove the need to compare carefully, but it can give users better signals about platform standards and profile quality.",
      "This page focuses on how to evaluate verification signals responsibly without relying on fake trust claims or unsupported rankings.",
    ],
    summary:
      "Choose verified cam sites when profile confidence matters, and compare how verification is shown, how profiles are structured, and whether platform policies explain standards clearly.",
    criteria: [
      {
        label: "Visible trust cues",
        detail:
          "Look for profile context, platform policy links, clear account rules, and signs that model information is managed consistently.",
      },
      {
        label: "Platform standards",
        detail:
          "Compare how the platform communicates eligibility, content rules, support paths, and performer-related policies.",
      },
      {
        label: "Profile consistency",
        detail:
          "Consistent profile formatting and room information can make it easier to compare real options without guessing.",
      },
      {
        label: "User protections",
        detail:
          "Check whether the platform gives users clear controls around account access, payments, and support questions.",
      },
    ],
    bestFor: [
      {
        title: "Best for trust-focused users",
        body: [
          "Verified cam sites suit users who want more visible platform standards before creating an account. The goal is not blind trust, but better information during comparison.",
        ],
      },
      {
        title: "Best for private feature decisions",
        body: [
          "Verification signals become more important when you are considering paid or private features. They help you evaluate whether the platform feels organized enough for a more controlled experience.",
        ],
      },
      {
        title: "Best for avoiding vague directories",
        body: [
          "A verification-focused platform should give more context than a random list. Look for profile detail, clear room presentation, and policy pages that are easy to find.",
        ],
      },
    ],
    safety: [
      "Verification signals are helpful, but still review platform terms, account settings, and payment prompts before joining.",
      "Avoid sites that imply trust without explaining platform rules or profile standards.",
      "Use the editorial policy on WebcamSex.me to understand how comparison guidance is framed.",
    ],
    cta: {
      title: "Start with a verified platform route",
      body: "Compare profile signals and platform flow through an internal redirect path before deciding whether to create an account.",
      primaryLabel: "Start With a Verified Platform",
      primaryHref: "/go/livejasmin",
      secondaryLabel: "Compare Live Cam Options",
      secondaryHref: "/go/signup",
    },
    faqs: [
      {
        question: "What does verified mean on a cam site?",
        answer:
          "Verification generally refers to platform checks or standards around performer accounts, but the exact meaning depends on the platform policy and should be reviewed directly.",
      },
      {
        question: "Are verified cam sites automatically safer?",
        answer:
          "Verification can be a useful trust signal, but users should still review privacy settings, payment prompts, support options, and platform rules.",
      },
      {
        question: "Why compare verified model platforms?",
        answer:
          "Comparing verified platforms helps you understand how profile information, room access, and account standards differ before signing up.",
      },
    ],
    related: ["private-cam-sites", "cam-sites-for-beginners", "hd-cam-sites"],
  },
  "hd-cam-sites": {
    slug: "hd-cam-sites",
    path: "/best/hd-cam-sites",
    label: "HD Cam Sites",
    h1: "Best HD Cam Sites for Clear Live Video",
    title: "Best HD Cam Sites for Clear Live Video",
    description:
      "Compare HD cam sites by stream clarity, device fit, connection stability, player layout, and realistic expectations before signing up.",
    intro: [
      "HD cam sites are appealing when live video clarity is a major part of the experience. The right comparison should look beyond the HD label and consider player stability, device support, room previews, and connection conditions.",
      "This guide helps you evaluate clear live video without assuming every room or device will deliver the same result.",
    ],
    summary:
      "Choose an HD cam site when clarity matters, but compare stream reliability, player design, preview behavior, and whether the platform sets realistic expectations.",
    criteria: [
      {
        label: "Player stability",
        detail:
          "Look at whether video loads reliably and whether the page remains usable when previews change or streams end.",
      },
      {
        label: "Device compatibility",
        detail:
          "HD quality depends on both platform delivery and your device, especially on mobile connections.",
      },
      {
        label: "Preview quality",
        detail:
          "Room cards and live previews should give enough visual context to compare before joining.",
      },
      {
        label: "Layout support",
        detail:
          "A clean layout helps you evaluate rooms without menus, prompts, or overlays getting in the way.",
      },
    ],
    bestFor: [
      {
        title: "Best for visual clarity",
        body: [
          "HD cam sites are best for users who care about clear video and want a platform that makes stream quality easy to inspect before signing up.",
        ],
      },
      {
        title: "Best for stable browsing",
        body: [
          "A clear stream matters less if the player feels unstable. Compare whether rooms load consistently and whether the platform handles unavailable feeds gracefully.",
        ],
      },
      {
        title: "Best for desktop and tablet use",
        body: [
          "Larger screens can make HD differences easier to see. Still, check mobile behavior if you expect to switch devices.",
        ],
      },
    ],
    safety: [
      "Do not treat HD labels as a guarantee for every room or every connection.",
      "Compare the platform player before entering payment information for premium features.",
      "Give preference to sites that explain access and quality without pressuring immediate signup.",
    ],
    cta: {
      title: "Preview live video before choosing",
      body: "Use a live preview route to compare stream clarity and room presentation before deciding where to sign up.",
      primaryLabel: "View Live Models",
      primaryHref: "/go/random",
      secondaryLabel: "Compare Live Cam Options",
      secondaryHref: "/go/signup",
    },
    faqs: [
      {
        question: "Are all rooms HD on HD cam sites?",
        answer:
          "No. HD availability can vary by platform, model stream, device, and connection, so compare previews before assuming every room will look the same.",
      },
      {
        question: "What affects live cam video clarity?",
        answer:
          "Video clarity can be affected by stream source, platform player, device screen, browser performance, and connection stability.",
      },
      {
        question: "Should beginners prioritize HD quality first?",
        answer:
          "Beginners should balance HD quality with clear pricing, simple navigation, privacy controls, and free preview access.",
      },
    ],
    related: ["mobile-cam-sites", "private-cam-sites", "verified-cam-sites"],
    includeLivePreview: true,
  },
  "cam-sites-no-signup": {
    slug: "cam-sites-no-signup",
    path: "/best/cam-sites-no-signup",
    label: "No Signup Cam Sites",
    h1: "Best Cam Sites With No Signup Viewing Options",
    title: "Best Cam Sites With No Signup Viewing Options",
    description:
      "Compare cam sites with no-signup viewing options by preview access, privacy expectations, browsing limits, and when account creation becomes useful.",
    intro: [
      "No-signup cam viewing is useful when you want to compare platforms without creating an account first. It can help you inspect layout, public room access, and platform tone before deciding whether deeper access is worth it.",
      "The key is understanding the limits. No-signup access often covers browsing and previews, while messaging, private features, or paid rooms may require registration.",
    ],
    summary:
      "Choose no-signup viewing when privacy-aware comparison matters, and compare what is visible before registration, how prompts appear, and where account creation becomes necessary.",
    criteria: [
      {
        label: "Anonymous preview access",
        detail:
          "Check whether public room browsing works before account creation and whether the site explains limits clearly.",
      },
      {
        label: "Registration triggers",
        detail:
          "Compare what actions cause signup prompts, such as opening private features, messaging, or saving preferences.",
      },
      {
        label: "Browsing comfort",
        detail:
          "A good no-signup flow should feel calm enough to compare platforms without constant interruption.",
      },
      {
        label: "Policy visibility",
        detail:
          "Privacy and terms pages should be easy to find before you provide personal information.",
      },
    ],
    bestFor: [
      {
        title: "Best for privacy-first comparison",
        body: [
          "No-signup options are strongest when you want to inspect platforms without immediately sharing account details. Use the preview period to compare transparency and comfort.",
        ],
      },
      {
        title: "Best for fast platform screening",
        body: [
          "If you are comparing several sites, no-signup browsing helps you remove platforms that feel cluttered, unclear, or too aggressive with prompts.",
        ],
      },
      {
        title: "Best for deciding whether to register",
        body: [
          "Registration can be useful when you want saved preferences or paid features. It should feel like a clear next step, not the only way to understand the site.",
        ],
      },
    ],
    safety: [
      "No-signup viewing does not mean a platform collects no operational data, so review privacy policies.",
      "Do not enter payment information just to browse unless the platform explains why it is needed.",
      "Be cautious with sites that hide basic platform details until after account creation.",
    ],
    cta: {
      title: "Preview before you create an account",
      body: "Use an internal live route to compare browsing flow before deciding whether signup makes sense.",
      primaryLabel: "View Live Models",
      primaryHref: "/go/random",
      secondaryLabel: "Compare Live Cam Options",
      secondaryHref: "/go/signup",
    },
    faqs: [
      {
        question: "Can I use cam sites without signing up?",
        answer:
          "Some platforms allow public browsing or room previews without signup, but interactive features, private sessions, or saved preferences often require an account.",
      },
      {
        question: "What are the limits of no-signup cam viewing?",
        answer:
          "Common limits include restricted messaging, private access, payment features, account preferences, and some profile details.",
      },
      {
        question: "Is no-signup browsing better for privacy?",
        answer:
          "It can reduce what you provide upfront, but you should still review privacy policies and understand that websites may use standard operational data.",
      },
    ],
    related: [
      "free-cam-sites",
      "cam-sites-without-credit-card",
      "cam-sites-for-beginners",
    ],
  },
  "cam-sites-without-credit-card": {
    slug: "cam-sites-without-credit-card",
    path: "/best/cam-sites-without-credit-card",
    label: "No Credit Card Cam Sites",
    h1: "Best Cam Sites Without Credit Card Requirements",
    title: "Best Cam Sites Without Credit Card Requirements",
    description:
      "Compare cam sites without credit card requirements by free browsing access, payment prompt timing, privacy expectations, and clear upgrade paths.",
    intro: [
      "Cam sites without credit card requirements are useful when you want to browse first and decide later. The strongest platforms let you understand room access, mobile flow, and account prompts before asking for payment information.",
      "This guide helps you compare when a card is not needed, when payment details become relevant, and what to check before entering billing information anywhere.",
    ],
    summary:
      "Choose no-credit-card cam browsing when you want to compare first, and check what is available for free, when paid prompts appear, and whether upgrade terms are clear.",
    criteria: [
      {
        label: "Browse-before-payment access",
        detail:
          "Compare whether public rooms, previews, and basic navigation are available without entering card details.",
      },
      {
        label: "Payment prompt clarity",
        detail:
          "The platform should explain why billing information is requested and what feature it unlocks.",
      },
      {
        label: "Account requirements",
        detail:
          "Some sites may allow browsing without a card but still require signup for interactive features.",
      },
      {
        label: "Upgrade control",
        detail:
          "Look for clear confirmation steps before paid access, credits, or private features.",
      },
    ],
    bestFor: [
      {
        title: "Best for payment-cautious users",
        body: [
          "No-credit-card browsing is best when you want to evaluate a site before sharing billing details. Use that time to compare prompts, room clarity, and platform policies.",
        ],
      },
      {
        title: "Best for free platform comparison",
        body: [
          "If several sites offer public previews, compare which one gives the clearest picture of the experience without asking for payment too early.",
        ],
      },
      {
        title: "Best for understanding upgrade timing",
        body: [
          "A good platform makes it obvious when you are moving from free browsing into paid access. That clarity matters more than broad claims about being free.",
        ],
      },
    ],
    safety: [
      "Do not enter card details unless you understand the specific feature, cost structure, and confirmation step.",
      "Review payment-related terms directly on the destination platform.",
      "Be cautious when a platform asks for card details before showing basic browsing context.",
    ],
    cta: {
      title: "Browse before payment decisions",
      body: "Start with a comparison route and inspect platform access before deciding whether payment features are relevant.",
      primaryLabel: "Compare Live Cam Options",
      primaryHref: "/go/signup",
      secondaryLabel: "View Live Models",
      secondaryHref: "/go/random",
    },
    faqs: [
      {
        question: "Can I browse cam sites without a credit card?",
        answer:
          "Many platforms allow some level of browsing or preview access without a credit card, but paid features usually require billing details or credits.",
      },
      {
        question: "When do cam sites usually ask for payment information?",
        answer:
          "Payment information is commonly requested for private sessions, credits, premium access, or account upgrades rather than basic public browsing.",
      },
      {
        question: "What should I check before adding a card?",
        answer:
          "Check the feature being purchased, pricing model, renewal or credit terms, privacy policy, and whether the platform provides a clear confirmation step.",
      },
    ],
    related: ["free-cam-sites", "cam-sites-no-signup", "cam-sites-for-beginners"],
  },
  "cam-sites-for-beginners": {
    slug: "cam-sites-for-beginners",
    path: "/best/cam-sites-for-beginners",
    label: "Beginner Cam Sites",
    h1: "Best Cam Sites for Beginners Choosing Their First Platform",
    title: "Best Cam Sites for Beginners Choosing Their First Platform",
    description:
      "Compare beginner-friendly cam sites by simple navigation, clear pricing prompts, privacy basics, mobile usability, and low-pressure signup flow.",
    intro: [
      "Beginner-friendly cam sites should make the first decision easier, not louder. If you are choosing your first platform, prioritize clear navigation, understandable prompts, free preview access, and privacy information you can find before joining.",
      "This guide explains what to compare so your first platform choice feels deliberate rather than rushed.",
    ],
    summary:
      "Choose a beginner-friendly cam site when clarity matters most, and compare navigation, signup flow, pricing prompts, mobile usability, and basic privacy controls.",
    criteria: [
      {
        label: "Simple navigation",
        detail:
          "The platform should make room browsing, search, account prompts, and return paths easy to understand.",
      },
      {
        label: "Clear pricing prompts",
        detail:
          "Beginners should be able to see when a feature becomes paid before taking action.",
      },
      {
        label: "Privacy basics",
        detail:
          "Look for accessible privacy pages, account controls, and clear explanations around registration.",
      },
      {
        label: "Low-pressure previewing",
        detail:
          "A beginner-friendly site should let you compare enough of the platform before pushing deeper signup decisions.",
      },
    ],
    bestFor: [
      {
        title: "Best for first-time comparison",
        body: [
          "Beginners should start by comparing platform feel, not by chasing every feature. A calm browsing flow makes it easier to learn what matters before creating an account.",
        ],
      },
      {
        title: "Best for understanding paid features",
        body: [
          "Clear paid prompts are essential. You should know when private sessions, credits, or premium options begin before you confirm anything.",
        ],
      },
      {
        title: "Best for mobile-first users",
        body: [
          "Many first-time users browse from a phone. Compare whether the site remains readable, responsive, and easy to leave or revisit later.",
        ],
      },
    ],
    safety: [
      "Take time to read prompts instead of rushing into registration or payment details.",
      "Start with free or preview access where possible so you can understand platform structure first.",
      "Use related comparison pages to understand privacy, verification, and mobile usability before choosing.",
    ],
    cta: {
      title: "Start with a calmer comparison path",
      body: "Use a guided internal route to compare platform fit before creating your first account.",
      primaryLabel: "Compare Live Cam Options",
      primaryHref: "/go/signup",
      secondaryLabel: "View Live Models",
      secondaryHref: "/go/random",
    },
    faqs: [
      {
        question: "What makes a cam site beginner friendly?",
        answer:
          "Beginner-friendly cam sites have simple navigation, clear pricing prompts, visible privacy information, mobile-friendly pages, and enough preview access to compare before joining.",
      },
      {
        question: "Should beginners start with free cam sites?",
        answer:
          "Free previews are often a good starting point because they let beginners understand platform layout and prompts before creating an account.",
      },
      {
        question: "What should I avoid as a beginner?",
        answer:
          "Avoid rushing through signup, ignoring payment prompts, or choosing a platform that hides basic privacy and pricing information.",
      },
    ],
    related: ["free-cam-sites", "mobile-cam-sites", "verified-cam-sites"],
  },
};

export const bestPageLinks: SiteLink[] = bestPageOrder.map((slug) => {
  const page = bestPages[slug];

  return {
    href: page.path,
    label: page.label,
    description: page.description,
  };
});

export function getBestPage(slug: string) {
  if (slug in bestPages) {
    return bestPages[slug as BestPageSlug];
  }

  return null;
}

export function getRelatedBestLinks(page: BestPageData): SiteLink[] {
  return page.related.map((slug) => {
    const relatedPage = bestPages[slug as BestPageSlug];

    return {
      href: relatedPage.path,
      label: relatedPage.label,
      description: relatedPage.description,
    };
  });
}
