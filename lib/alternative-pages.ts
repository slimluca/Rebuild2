import type { SiteLink } from "@/lib/site-navigation";

export interface AlternativeFaq {
  question: string;
  answer: string;
}

export interface AlternativePageData {
  slug: string;
  path: string;
  label: string;
  h1: string;
  title: string;
  description: string;
  intro: string[];
  quickAnswer: string;
  criteria: {
    label: string;
    detail: string;
  }[];
  fitCards: {
    title: string;
    body: string;
  }[];
  privacy: string[];
  mobile: string[];
  relatedAlternatives: string[];
  relatedPlatforms: string[];
  relatedBest: string[];
  relatedCompare: string[];
  cta: {
    title: string;
    body: string;
    primaryLabel: string;
    primaryHref: "/go/signup" | "/go/livejasmin" | "/go/random";
    secondaryLabel: string;
    secondaryHref: "/go/signup" | "/go/livejasmin" | "/go/random";
  };
  faqs: AlternativeFaq[];
}

export const alternativePageOrder = [
  "livejasmin-alternatives",
  "chaturbate-alternatives",
  "stripchat-alternatives",
  "bongacams-alternatives",
  "free-cam-site-alternatives",
  "private-cam-site-alternatives",
  "premium-cam-site-alternatives",
  "mobile-cam-site-alternatives",
] as const;

export type AlternativePageSlug = (typeof alternativePageOrder)[number];

const sharedCta = {
  secondaryLabel: "Preview Live Models",
  secondaryHref: "/go/random" as const,
};

export const alternativePages: Record<AlternativePageSlug, AlternativePageData> = {
  "livejasmin-alternatives": {
    slug: "livejasmin-alternatives",
    path: "/alternatives/livejasmin-alternatives",
    label: "LiveJasmin Alternatives",
    h1: "LiveJasmin Alternatives: What to Compare Before Choosing",
    title: "LiveJasmin Alternatives: What to Compare Before Choosing",
    description:
      "Compare LiveJasmin alternatives by premium style, private cam access, free browsing, verified model signals, mobile usability, privacy, and signup expectations.",
    intro: [
      "LiveJasmin alternatives are worth comparing when you are deciding whether a premium-style private cam platform is the right fit or whether a free cam community, mobile-first site, or no-signup browsing path makes more sense.",
      "This page does not rank alternatives. It explains what to compare before choosing: private cam focus, verified model signals, free previews, payment prompts, mobile usability, and privacy comfort.",
    ],
    quickAnswer:
      "Compare LiveJasmin alternatives by deciding whether you want premium private context, free public browsing, mobile-first discovery, or lower-commitment previewing before signup.",
    criteria: [
      { label: "Premium fit", detail: "Check whether a guided premium platform is more useful than public-room browsing." },
      { label: "Private features", detail: "Compare when private or paid options appear and how clearly they are explained." },
      { label: "Free preview access", detail: "Look at what you can inspect before signup or payment." },
      { label: "Verified model signals", detail: "Use verification language as one signal alongside privacy and support context." },
    ],
    fitCards: [
      { title: "Choose premium-style alternatives if", body: "You want private cam context, polished presentation, and clearer paid feature expectations." },
      { title: "Choose free community alternatives if", body: "You want broader public browsing and more low-commitment previewing before signup." },
      { title: "Choose mobile alternatives if", body: "Your first decision is how cleanly the platform works on phones and tablets." },
    ],
    privacy: [
      "Review account, billing, and private feature terms before choosing.",
      "Compare whether privacy pages and support routes are easy to find.",
      "Avoid assuming any alternative is safer without checking platform policies.",
    ],
    mobile: [
      "Compare room card readability on mobile.",
      "Check how payment prompts and account prompts fit on small screens.",
      "Use HD and mobile category pages when video quality matters.",
    ],
    relatedAlternatives: ["premium-cam-site-alternatives", "private-cam-site-alternatives", "free-cam-site-alternatives"],
    relatedPlatforms: ["livejasmin", "chaturbate", "stripchat"],
    relatedBest: ["private-cam-sites", "verified-cam-sites", "free-cam-sites"],
    relatedCompare: ["livejasmin-vs-chaturbate", "premium-vs-free-cam-sites"],
    cta: {
      title: "Compare LiveJasmin alternatives before joining",
      body: "Use live previews and platform guides to compare premium, private, free, and mobile paths with more context.",
      primaryLabel: "Start With a Premium Platform",
      primaryHref: "/go/livejasmin",
      ...sharedCta,
    },
    faqs: [
      { question: "What is the best LiveJasmin alternative?", answer: "The better alternative depends on whether you want premium private context, free public browsing, mobile usability, or no-signup previewing." },
      { question: "Should I compare free cam sites against LiveJasmin?", answer: "Yes, if you are unsure whether a premium-style platform or free cam community matches your browsing comfort." },
      { question: "Do LiveJasmin alternatives need payment details?", answer: "Requirements vary by platform and feature, so compare free access, account prompts, and payment terms before joining." },
    ],
  },
  "chaturbate-alternatives": {
    slug: "chaturbate-alternatives",
    path: "/alternatives/chaturbate-alternatives",
    label: "Chaturbate Alternatives",
    h1: "Chaturbate Alternatives: Free Cam Site Options to Compare",
    title: "Chaturbate Alternatives: Free Cam Site Options to Compare",
    description:
      "Compare Chaturbate alternatives by free cam site style, public room browsing, signup expectations, mobile usability, private options, and privacy considerations.",
    intro: [
      "Chaturbate alternatives are useful when you like free cam community browsing but want to compare different layouts, category tools, mobile experiences, and private feature prompts.",
      "This page keeps the decision practical: compare free access, no-signup expectations, no-credit-card browsing, public room style, and whether a premium platform might better fit your needs.",
    ],
    quickAnswer:
      "Compare Chaturbate alternatives by checking free browsing depth, community-style discovery, mobile layout, signup prompts, private feature clarity, and no-card expectations.",
    criteria: [
      { label: "Free access", detail: "Compare what is available before account creation." },
      { label: "Public-room style", detail: "Check whether the community flow feels manageable or crowded." },
      { label: "No-card browsing", detail: "Separate browsing without payment from features that may later require billing details." },
      { label: "Private feature path", detail: "Look at when paid or private options appear." },
    ],
    fitCards: [
      { title: "Choose another free platform if", body: "You want similar public browsing with a different layout, filter system, or signup flow." },
      { title: "Choose premium alternatives if", body: "You want more guided private cam context and verified model signals." },
      { title: "Choose beginner-friendly pages if", body: "You need simpler navigation and clearer prompts before joining." },
    ],
    privacy: [
      "Understand what is visible publicly and what requires an account.",
      "Read privacy terms before interacting or paying.",
      "Compare no-signup and no-credit-card pages when low-commitment browsing matters.",
    ],
    mobile: [
      "Check category browsing and room previews on your phone.",
      "Compare player loading and prompt clarity on tablets.",
      "Use mobile alternatives if device comfort is your main constraint.",
    ],
    relatedAlternatives: ["free-cam-site-alternatives", "mobile-cam-site-alternatives", "premium-cam-site-alternatives"],
    relatedPlatforms: ["chaturbate", "stripchat", "bongacams"],
    relatedBest: ["free-cam-sites", "cam-sites-no-signup", "cam-sites-without-credit-card"],
    relatedCompare: ["chaturbate-vs-stripchat", "chaturbate-vs-bongacams"],
    cta: {
      title: "Compare free cam alternatives clearly",
      body: "Use platform guides and live previews to compare public room browsing, mobile flow, and signup expectations.",
      primaryLabel: "Compare Live Cam Options",
      primaryHref: "/go/signup",
      ...sharedCta,
    },
    faqs: [
      { question: "Why compare Chaturbate alternatives?", answer: "Because free cam communities can differ in layout, account prompts, category browsing, mobile usability, and private feature clarity." },
      { question: "Are all Chaturbate alternatives free?", answer: "Many allow public previews, but private features, interaction, or premium tools may require signup or payment." },
      { question: "What should beginners compare first?", answer: "Beginners should compare navigation clarity, free preview access, privacy pages, and whether prompts explain the next step." },
    ],
  },
  "stripchat-alternatives": {
    slug: "stripchat-alternatives",
    path: "/alternatives/stripchat-alternatives",
    label: "Stripchat Alternatives",
    h1: "Stripchat Alternatives: Live Cam Platforms to Compare",
    title: "Stripchat Alternatives: Live Cam Platforms to Compare",
    description:
      "Compare Stripchat alternatives by platform style, category discovery, free browsing, mobile usability, private features, HD expectations, and signup clarity.",
    intro: [
      "Stripchat alternatives are helpful when you want broad category discovery but also want to compare how different live cam platforms handle mobile flow, free access, private options, and account prompts.",
      "Use this decision guide to compare platform style without fake ratings or unsupported popularity claims.",
    ],
    quickAnswer:
      "Compare Stripchat alternatives by weighing category discovery against simpler navigation, private cam focus, premium access, mobile usability, and privacy expectations.",
    criteria: [
      { label: "Category discovery", detail: "Check whether filters help or overwhelm the browsing experience." },
      { label: "Mobile layout", detail: "Compare room cards, player controls, and menus on your actual device." },
      { label: "Premium options", detail: "Consider a premium-style alternative if private context matters more than broad browsing." },
      { label: "HD expectations", detail: "Review stream clarity as a device and connection-dependent factor." },
    ],
    fitCards: [
      { title: "Choose category-rich alternatives if", body: "You want broad discovery but prefer another layout or signup flow." },
      { title: "Choose private alternatives if", body: "You want more control and clearer private feature context." },
      { title: "Choose mobile alternatives if", body: "Phone and tablet usability is the deciding factor." },
    ],
    privacy: [
      "Check account prompts before saving preferences or interacting.",
      "Review payment prompts before entering billing information.",
      "Compare privacy pages and support visibility across alternatives.",
    ],
    mobile: [
      "Broad category pages should not create horizontal overflow or unreadable prompts.",
      "Compare whether HD previews work acceptably on mobile connections.",
      "Look for a clear path back to browsing if signup is not right yet.",
    ],
    relatedAlternatives: ["mobile-cam-site-alternatives", "free-cam-site-alternatives", "private-cam-site-alternatives"],
    relatedPlatforms: ["stripchat", "chaturbate", "bongacams"],
    relatedBest: ["mobile-cam-sites", "free-cam-sites", "hd-cam-sites"],
    relatedCompare: ["livejasmin-vs-stripchat", "stripchat-vs-bongacams"],
    cta: {
      title: "Compare Stripchat alternatives by platform fit",
      body: "Preview live models and compare discovery style, mobile usability, and signup expectations before choosing.",
      primaryLabel: "Compare Live Cam Options",
      primaryHref: "/go/signup",
      ...sharedCta,
    },
    faqs: [
      { question: "What makes a good Stripchat alternative?", answer: "A useful alternative should match your preferred browsing style, category depth, mobile usability, privacy comfort, and signup expectations." },
      { question: "Should I compare premium platforms too?", answer: "Yes, especially if private cam features, verified model signals, or a more guided flow matter to you." },
      { question: "Can mobile usability change the decision?", answer: "Yes. A platform that looks fine on desktop may feel crowded or unclear on a phone." },
    ],
  },
  "bongacams-alternatives": {
    slug: "bongacams-alternatives",
    path: "/alternatives/bongacams-alternatives",
    label: "BongaCams Alternatives",
    h1: "BongaCams Alternatives: Cam Site Options by User Need",
    title: "BongaCams Alternatives: Cam Site Options by User Need",
    description:
      "Compare BongaCams alternatives by free browsing, private cam options, mobile usability, payment awareness, platform layout, and user need.",
    intro: [
      "BongaCams alternatives should be compared by user need rather than fake rankings: public browsing, private feature expectations, mobile flow, payment clarity, and beginner-friendly navigation.",
      "Use this guide when you want to decide whether another free cam community, premium platform, private cam site, or mobile-first option fits better.",
    ],
    quickAnswer:
      "Compare BongaCams alternatives by deciding whether you need broader free browsing, clearer private feature context, a premium path, or a cleaner mobile experience.",
    criteria: [
      { label: "Platform layout", detail: "Compare whether rooms, filters, and prompts feel easy to understand." },
      { label: "Private options", detail: "Check how paid or private features are explained before commitment." },
      { label: "Free browsing", detail: "Look at what can be previewed before signup." },
      { label: "Payment awareness", detail: "Review terms and confirmation steps before paying." },
    ],
    fitCards: [
      { title: "Choose free alternatives if", body: "You want public room browsing and low-commitment discovery." },
      { title: "Choose private alternatives if", body: "You want more control and clearer paid feature expectations." },
      { title: "Choose premium alternatives if", body: "You prefer guided access and verified model signals." },
    ],
    privacy: [
      "Review account settings, privacy pages, and support paths.",
      "Check what requires signup or payment.",
      "Use no-card guidance when payment friction matters.",
    ],
    mobile: [
      "Compare room cards and prompts on phones and tablets.",
      "Check whether video previews load clearly.",
      "Avoid platforms where mobile prompts feel rushed or confusing.",
    ],
    relatedAlternatives: ["free-cam-site-alternatives", "private-cam-site-alternatives", "premium-cam-site-alternatives"],
    relatedPlatforms: ["bongacams", "chaturbate", "stripchat"],
    relatedBest: ["free-cam-sites", "private-cam-sites", "mobile-cam-sites"],
    relatedCompare: ["chaturbate-vs-bongacams", "stripchat-vs-bongacams"],
    cta: {
      title: "Compare BongaCams alternatives by need",
      body: "Use live previews and guide pages to compare free browsing, private prompts, and mobile usability.",
      primaryLabel: "Compare Live Cam Options",
      primaryHref: "/go/signup",
      ...sharedCta,
    },
    faqs: [
      { question: "What should I compare against BongaCams?", answer: "Compare free cam communities, private cam sites, premium platforms, and mobile-focused alternatives based on your priorities." },
      { question: "Are BongaCams alternatives better?", answer: "Not automatically. The better fit depends on access style, privacy comfort, mobile usability, and signup expectations." },
      { question: "Should I compare payment prompts?", answer: "Yes. Payment and credit prompts can shape whether a platform feels comfortable before joining." },
    ],
  },
  "free-cam-site-alternatives": {
    slug: "free-cam-site-alternatives",
    path: "/alternatives/free-cam-site-alternatives",
    label: "Free Cam Site Alternatives",
    h1: "Free Cam Site Alternatives for Browsing Before Signup",
    title: "Free Cam Site Alternatives for Browsing Before Signup",
    description:
      "Compare free cam site alternatives by browsing access, no-signup viewing, no-card expectations, mobile usability, private upgrade prompts, and privacy basics.",
    intro: [
      "Free cam site alternatives are useful when you want to browse before signup and compare platform style without entering payment details right away.",
      "The key is knowing what free access does and does not include. Compare no-signup viewing, no-credit-card browsing, public room previews, mobile layout, and private upgrade prompts.",
    ],
    quickAnswer:
      "Choose free cam site alternatives when you want low-commitment browsing, but compare limits, signup triggers, no-card expectations, and privacy policies before interacting.",
    criteria: [
      { label: "Preview depth", detail: "Compare how much you can see before account creation." },
      { label: "No signup", detail: "Check whether browsing and interaction have different account requirements." },
      { label: "No card", detail: "Separate browsing without a card from paid feature access." },
      { label: "Upgrade clarity", detail: "Look for clear private or premium prompts." },
    ],
    fitCards: [
      { title: "Good for low-commitment browsing", body: "Free alternatives help you compare layout, room previews, and platform style before joining." },
      { title: "Not always enough for private features", body: "Private sessions, messaging, credits, or premium tools may require signup or payment." },
      { title: "Best paired with safety checks", body: "Read privacy and payment terms even when the first preview is free." },
    ],
    privacy: [
      "Free access does not remove the need to read privacy policies.",
      "Check account prompts before interacting.",
      "Avoid entering payment details until the paid feature is clear.",
    ],
    mobile: [
      "Free browsing should remain readable on mobile.",
      "Check whether prompt timing is easy to understand on small screens.",
      "Use mobile alternatives if phone usability is central.",
    ],
    relatedAlternatives: ["chaturbate-alternatives", "stripchat-alternatives", "mobile-cam-site-alternatives"],
    relatedPlatforms: ["chaturbate", "stripchat", "bongacams"],
    relatedBest: ["free-cam-sites", "cam-sites-no-signup", "cam-sites-without-credit-card"],
    relatedCompare: ["premium-vs-free-cam-sites", "private-cam-sites-vs-free-cam-sites"],
    cta: {
      title: "Compare free cam alternatives before signup",
      body: "Preview live availability and compare free browsing, no-signup expectations, no-card access, and upgrade prompts.",
      primaryLabel: "Compare Live Cam Options",
      primaryHref: "/go/signup",
      ...sharedCta,
    },
    faqs: [
      { question: "Are free cam site alternatives fully free?", answer: "Not always. Public browsing may be free while private, premium, messaging, or interactive features may require signup or payment." },
      { question: "What is the difference between no signup and no credit card?", answer: "No signup refers to account creation, while no credit card refers to payment details. A site may require one, both, or neither for certain actions." },
      { question: "Should free cam alternatives be compared on mobile?", answer: "Yes. Mobile prompt clarity and room card layout can strongly affect the experience." },
    ],
  },
  "private-cam-site-alternatives": {
    slug: "private-cam-site-alternatives",
    path: "/alternatives/private-cam-site-alternatives",
    label: "Private Cam Site Alternatives",
    h1: "Private Cam Site Alternatives for a More Controlled Experience",
    title: "Private Cam Site Alternatives for a More Controlled Experience",
    description:
      "Compare private cam site alternatives by user control, paid feature prompts, verified model signals, mobile usability, privacy, and signup expectations.",
    intro: [
      "Private cam site alternatives are for users who care about a more controlled experience and want to compare how platforms explain paid access before joining.",
      "A strong comparison should cover private feature prompts, verified model signals, account controls, payment awareness, mobile usability, and whether free preview access gives enough context first.",
    ],
    quickAnswer:
      "Choose private cam site alternatives when user control matters, but compare payment prompts, session expectations, privacy policies, and verified signals before committing.",
    criteria: [
      { label: "Control", detail: "Compare how private features are presented and confirmed." },
      { label: "Payment clarity", detail: "Check whether paid prompts explain what is being unlocked." },
      { label: "Verified signals", detail: "Use model and platform standards as one factor, not a guarantee." },
      { label: "Preview first", detail: "Look for enough public context before signup or payment." },
    ],
    fitCards: [
      { title: "Good for focused experiences", body: "Private alternatives may suit users who want clearer control than public-room browsing." },
      { title: "Not ideal for casual browsing", body: "If you only want to inspect platforms, free alternatives may be the calmer starting point." },
      { title: "Best with pricing awareness", body: "Private paths deserve extra attention to credits, confirmations, and billing terms." },
    ],
    privacy: [
      "Read account and billing terms before using private features.",
      "Compare privacy settings and support visibility.",
      "Check how easy it is to stop or step back from paid prompts.",
    ],
    mobile: [
      "Private prompts must be readable on phones and tablets.",
      "Compare confirmation steps on the device you plan to use.",
      "Check stream quality and player controls before joining.",
    ],
    relatedAlternatives: ["livejasmin-alternatives", "premium-cam-site-alternatives", "free-cam-site-alternatives"],
    relatedPlatforms: ["livejasmin", "bongacams", "stripchat"],
    relatedBest: ["private-cam-sites", "verified-cam-sites", "hd-cam-sites"],
    relatedCompare: ["private-cam-sites-vs-free-cam-sites", "premium-vs-free-cam-sites"],
    cta: {
      title: "Compare private cam alternatives carefully",
      body: "Use platform guides and live previews to compare control, privacy, payment prompts, and verified model signals.",
      primaryLabel: "Explore Private Cam Options",
      primaryHref: "/go/livejasmin",
      ...sharedCta,
    },
    faqs: [
      { question: "What makes a private cam alternative useful?", answer: "Clear private feature expectations, account controls, payment prompts, privacy information, and enough preview context before signup." },
      { question: "Do private cam alternatives require payment?", answer: "Private features commonly involve payment or credits, though browsing may be available before paying." },
      { question: "Are verified model signals enough?", answer: "No. Verification is useful context, but privacy, payment, support, and account controls also matter." },
    ],
  },
  "premium-cam-site-alternatives": {
    slug: "premium-cam-site-alternatives",
    path: "/alternatives/premium-cam-site-alternatives",
    label: "Premium Cam Site Alternatives",
    h1: "Premium Cam Site Alternatives for Verified Model Discovery",
    title: "Premium Cam Site Alternatives for Verified Model Discovery",
    description:
      "Compare premium cam site alternatives by verified model discovery, private cam focus, HD quality, payment clarity, mobile usability, and privacy expectations.",
    intro: [
      "Premium cam site alternatives are useful when you want a more polished or guided live cam platform experience, especially around verified model discovery and private feature context.",
      "Compare premium alternatives against free cam sites and private cam platforms so you understand access style, payment prompts, mobile usability, and privacy before joining.",
    ],
    quickAnswer:
      "Premium cam site alternatives may fit users who value verified model signals and private context, but free or mobile alternatives may be better for low-commitment browsing.",
    criteria: [
      { label: "Verified model discovery", detail: "Compare how platforms explain profile and verification signals." },
      { label: "Premium flow", detail: "Check whether paid and private features are guided clearly." },
      { label: "HD quality", detail: "Review stream quality as a current signal, not a guarantee." },
      { label: "Payment clarity", detail: "Read terms before buying credits or premium features." },
    ],
    fitCards: [
      { title: "Good for guided browsing", body: "Premium alternatives can suit users who want more structure before private features." },
      { title: "Not always best for free access", body: "If public previewing matters most, compare free cam site alternatives first." },
      { title: "Best with verified-signal checks", body: "Verification language should be compared with privacy, support, and payment clarity." },
    ],
    privacy: [
      "Review account, billing, privacy, and support pages together.",
      "Treat verified model signals as context rather than a safety promise.",
      "Compare alternatives before sharing payment details.",
    ],
    mobile: [
      "A premium platform should still feel clear on mobile.",
      "Check whether HD streams and private prompts fit on small screens.",
      "Use mobile alternatives if device comfort matters more than platform polish.",
    ],
    relatedAlternatives: ["livejasmin-alternatives", "private-cam-site-alternatives", "mobile-cam-site-alternatives"],
    relatedPlatforms: ["livejasmin", "stripchat", "bongacams"],
    relatedBest: ["verified-cam-sites", "private-cam-sites", "hd-cam-sites"],
    relatedCompare: ["premium-vs-free-cam-sites", "livejasmin-vs-stripchat"],
    cta: {
      title: "Compare premium cam alternatives",
      body: "Open a platform route only after comparing verified signals, private access, mobile usability, and payment expectations.",
      primaryLabel: "Start With a Premium Platform",
      primaryHref: "/go/livejasmin",
      ...sharedCta,
    },
    faqs: [
      { question: "What is a premium cam site alternative?", answer: "It is a platform path to compare when you want a more guided, private-feature-aware, or verified-signal-focused experience." },
      { question: "Are premium alternatives always better?", answer: "No. They may suit some users, while free, no-signup, or mobile-first alternatives may fit others better." },
      { question: "What should I check before paying?", answer: "Check what feature is unlocked, confirmation steps, billing terms, privacy policies, and account controls." },
    ],
  },
  "mobile-cam-site-alternatives": {
    slug: "mobile-cam-site-alternatives",
    path: "/alternatives/mobile-cam-site-alternatives",
    label: "Mobile Cam Site Alternatives",
    h1: "Mobile Cam Site Alternatives for Phones and Tablets",
    title: "Mobile Cam Site Alternatives for Phones and Tablets",
    description:
      "Compare mobile cam site alternatives by responsive layout, live model previews, video loading, signup flow, privacy on shared devices, and HD expectations.",
    intro: [
      "Mobile cam site alternatives are important when your main decision happens on a phone or tablet. A platform can look clear on desktop but feel crowded or confusing on a smaller screen.",
      "Compare mobile alternatives by responsive layout, video loading, room card clarity, signup prompts, privacy on shared devices, no-card browsing, and HD cam expectations.",
    ],
    quickAnswer:
      "Choose mobile cam site alternatives by checking responsive layout, touch navigation, video behavior, prompt clarity, privacy settings, and whether the platform remains usable before signup.",
    criteria: [
      { label: "Responsive layout", detail: "Room cards, menus, and CTAs should fit without awkward overflow." },
      { label: "Video loading", detail: "Compare preview stability and HD expectations on your connection." },
      { label: "Signup flow", detail: "Prompts should stay readable and easy to step away from." },
      { label: "Device privacy", detail: "Consider shared devices, saved forms, browser history, and notifications." },
    ],
    fitCards: [
      { title: "Good for phone-first users", body: "Mobile alternatives help you avoid platforms that only feel comfortable on desktop." },
      { title: "Useful for tablets too", body: "Tablet layout can differ from phone and desktop, so compare both orientations when possible." },
      { title: "Best paired with free previews", body: "Preview before signup so you can judge mobile comfort without rushing." },
    ],
    privacy: [
      "Check device-level privacy settings before browsing.",
      "Avoid saved forms or shared-device exposure when creating accounts.",
      "Read platform privacy and payment prompts before joining.",
    ],
    mobile: [
      "Compare phone, tablet, and desktop flows separately.",
      "Check whether buttons wrap cleanly and prompts remain readable.",
      "Use HD expectations carefully because stream quality depends on connection and room settings.",
    ],
    relatedAlternatives: ["free-cam-site-alternatives", "stripchat-alternatives", "premium-cam-site-alternatives"],
    relatedPlatforms: ["stripchat", "chaturbate", "livejasmin"],
    relatedBest: ["mobile-cam-sites", "hd-cam-sites", "cam-sites-for-beginners"],
    relatedCompare: ["livejasmin-vs-stripchat", "premium-vs-free-cam-sites"],
    cta: {
      title: "Compare mobile cam alternatives",
      body: "Preview live models and compare mobile layout, prompt clarity, HD expectations, and privacy before choosing.",
      primaryLabel: "Compare Live Cam Options",
      primaryHref: "/go/signup",
      ...sharedCta,
    },
    faqs: [
      { question: "What makes a cam site good on mobile?", answer: "Readable room cards, stable video previews, touch-friendly controls, clear signup prompts, and privacy-aware account flow all matter." },
      { question: "Should mobile users prioritize HD cam sites?", answer: "HD is useful, but layout clarity, connection stability, and prompt readability are just as important." },
      { question: "What privacy issues matter on mobile?", answer: "Shared devices, saved forms, notifications, browser history, and account prompts can all affect privacy comfort." },
    ],
  },
};

export const alternativePageLinks: SiteLink[] = alternativePageOrder.map((slug) => {
  const page = alternativePages[slug];

  return {
    href: page.path,
    label: page.label,
    description: page.description,
  };
});

export function getAlternativePage(slug: string) {
  if (slug in alternativePages) {
    return alternativePages[slug as AlternativePageSlug];
  }

  return null;
}
