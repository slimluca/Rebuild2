import type { SiteLink } from "@/lib/site-navigation";

export interface PlatformFaq {
  question: string;
  answer: string;
}

export interface PlatformPageData {
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
  suitCards: {
    title: string;
    body: string;
  }[];
  privacy: string[];
  mobile: string[];
  relatedPlatforms: string[];
  relatedAlternatives: string[];
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
  faqs: PlatformFaq[];
}

export const platformPageOrder = [
  "livejasmin",
  "chaturbate",
  "stripchat",
  "bongacams",
] as const;

export type PlatformPageSlug = (typeof platformPageOrder)[number];

const sharedSecondary = {
  secondaryLabel: "Preview Live Models",
  secondaryHref: "/go/random" as const,
};

export const platformPages: Record<PlatformPageSlug, PlatformPageData> = {
  livejasmin: {
    slug: "livejasmin",
    path: "/platforms/livejasmin",
    label: "LiveJasmin",
    h1: "LiveJasmin Guide: What to Compare Before You Join",
    title: "LiveJasmin Guide: What to Compare Before You Join",
    description:
      "Use this LiveJasmin guide to compare premium-style access, private cam focus, verified model signals, mobile usability, payment awareness, alternatives, and signup expectations.",
    intro: [
      "LiveJasmin is usually considered from a premium-style live cam platform angle, especially by users comparing private cam sites, verified model signals, and a more guided platform flow before signup.",
      "This guide is not a review and does not use scores or fake testing claims. It explains what to compare: private feature expectations, free preview limits, mobile usability, verified profile context, payment prompts, and LiveJasmin alternatives.",
    ],
    quickAnswer:
      "LiveJasmin may suit users who want a premium-style path with private cam context and verified model signals, but users should still compare signup expectations, payment prompts, privacy policies, and alternatives before joining.",
    criteria: [
      {
        label: "Platform style",
        detail:
          "Compare whether the guided premium-style layout fits better than a broad free cam community.",
      },
      {
        label: "Private access",
        detail:
          "Check where public previews end and private or paid features begin.",
      },
      {
        label: "Verified model signals",
        detail:
          "Use verification language as one comparison factor alongside policies, support, and payment clarity.",
      },
      {
        label: "Mobile flow",
        detail:
          "Confirm that room previews, signup prompts, and account steps remain clear on phones and tablets.",
      },
    ],
    suitCards: [
      {
        title: "May suit premium-first users",
        body: "LiveJasmin is worth comparing when private cam context, polished presentation, and verified model discovery matter more than open public-room browsing.",
      },
      {
        title: "May not suit preview-only users",
        body: "If you mainly want low-commitment public browsing, compare free cam site alternatives and no-signup pages before choosing.",
      },
      {
        title: "Best compared with alternatives",
        body: "Use LiveJasmin alternatives when you want to weigh premium access against free community-style platforms.",
      },
    ],
    privacy: [
      "Read privacy and account terms before creating an account.",
      "Review payment prompts carefully before using private or premium features.",
      "Use verified model signals as context, not as a safety guarantee.",
    ],
    mobile: [
      "Check whether model previews, buttons, and account prompts fit comfortably on your device.",
      "HD stream quality can depend on connection, device, room settings, and platform player behavior.",
      "If you browse on a shared phone or tablet, review device privacy settings too.",
    ],
    relatedPlatforms: ["chaturbate", "stripchat", "bongacams"],
    relatedAlternatives: ["livejasmin-alternatives", "premium-cam-site-alternatives", "private-cam-site-alternatives"],
    relatedBest: ["private-cam-sites", "verified-cam-sites", "hd-cam-sites"],
    relatedCompare: ["livejasmin-vs-chaturbate", "livejasmin-vs-stripchat", "premium-vs-free-cam-sites"],
    cta: {
      title: "Compare LiveJasmin with more context",
      body: "Open a premium-style platform route only after comparing private access, verified model signals, mobile usability, and payment expectations.",
      primaryLabel: "Start With a Premium Platform",
      primaryHref: "/go/livejasmin",
      ...sharedSecondary,
    },
    faqs: [
      {
        question: "Is this LiveJasmin page a review?",
        answer:
          "No. It is a neutral decision guide that explains what to compare before joining, without fake ratings, fake rankings, or unsupported testing claims.",
      },
      {
        question: "What should I compare before joining LiveJasmin?",
        answer:
          "Compare private feature prompts, free preview limits, verified model signals, payment expectations, privacy policies, and mobile usability.",
      },
      {
        question: "When should I compare LiveJasmin alternatives?",
        answer:
          "Compare alternatives when you are unsure whether a premium-style platform or a free cam community better matches your browsing comfort.",
      },
    ],
  },
  chaturbate: {
    slug: "chaturbate",
    path: "/platforms/chaturbate",
    label: "Chaturbate",
    h1: "Chaturbate Guide: What to Know Before Choosing a Free Cam Community",
    title: "Chaturbate Guide: What to Know Before Choosing a Free Cam Community",
    description:
      "Use this Chaturbate guide to compare free cam community style, public room browsing, signup expectations, model variety, mobile usability, privacy, and alternatives.",
    intro: [
      "Chaturbate is commonly approached as a free cam community style option where public room browsing is central to the first impression.",
      "This guide helps users compare Chaturbate without fake popularity claims. Focus on free viewing expectations, account prompts, model discovery, mobile layout, privacy considerations, and Chaturbate alternatives.",
    ],
    quickAnswer:
      "Chaturbate may suit users who want broad public-room browsing and free preview access, while users who want more private or premium-style guidance should compare alternatives before signing up.",
    criteria: [
      {
        label: "Free browsing",
        detail:
          "Compare what can be viewed before account creation and what actions trigger signup prompts.",
      },
      {
        label: "Community style",
        detail:
          "Decide whether a public-room community flow fits better than a guided premium-style platform.",
      },
      {
        label: "Model discovery",
        detail:
          "Check whether category filters, room cards, and profile signals make browsing manageable.",
      },
      {
        label: "Privacy comfort",
        detail:
          "Review public-room exposure, account settings, payment prompts, and platform policies.",
      },
    ],
    suitCards: [
      {
        title: "May suit free-preview users",
        body: "Chaturbate is relevant when you want to browse public rooms before deciding whether deeper interaction is worthwhile.",
      },
      {
        title: "May not suit premium-first users",
        body: "If you want a more guided private cam experience, compare premium or private cam site alternatives.",
      },
      {
        title: "Best checked on mobile",
        body: "Public-room communities can feel different on a phone, so check layout, player behavior, and prompts on your actual device.",
      },
    ],
    privacy: [
      "Understand what is public, what requires an account, and what payment prompts mean.",
      "Read privacy and terms pages before interacting or paying.",
      "Use no-signup and no-card comparisons if low-commitment browsing matters.",
    ],
    mobile: [
      "Check whether category discovery and room cards stay readable on smaller screens.",
      "Compare how video previews load on your phone or tablet.",
      "Look for clear account prompts before tapping through.",
    ],
    relatedPlatforms: ["stripchat", "bongacams", "livejasmin"],
    relatedAlternatives: ["chaturbate-alternatives", "free-cam-site-alternatives", "mobile-cam-site-alternatives"],
    relatedBest: ["free-cam-sites", "cam-sites-no-signup", "cam-sites-without-credit-card"],
    relatedCompare: ["livejasmin-vs-chaturbate", "chaturbate-vs-stripchat", "chaturbate-vs-bongacams"],
    cta: {
      title: "Compare free cam community options",
      body: "Preview live availability and compare public browsing, signup prompts, privacy expectations, and alternatives before choosing.",
      primaryLabel: "Compare Live Cam Options",
      primaryHref: "/go/signup",
      ...sharedSecondary,
    },
    faqs: [
      {
        question: "What is the main decision before choosing Chaturbate?",
        answer:
          "Decide whether a free public-room community style fits your needs better than a premium, private, or more guided platform.",
      },
      {
        question: "Should beginners start with free cam communities?",
        answer:
          "Free browsing can help beginners learn platform layout, but they should still compare privacy, signup prompts, mobile usability, and payment expectations.",
      },
      {
        question: "What alternatives should I compare?",
        answer:
          "Compare other free cam communities, premium platforms, private cam site alternatives, and mobile-friendly options depending on your priorities.",
      },
    ],
  },
  stripchat: {
    slug: "stripchat",
    path: "/platforms/stripchat",
    label: "Stripchat",
    h1: "Stripchat Guide: What to Compare Before Signing Up",
    title: "Stripchat Guide: What to Compare Before Signing Up",
    description:
      "Use this Stripchat guide to compare large live cam platform style, free browsing, category discovery, mobile usability, account prompts, privacy, and alternatives.",
    intro: [
      "Stripchat is often compared as a large live cam platform style option with free browsing, category discovery, and a broad room browsing flow.",
      "This page keeps the focus on decision factors rather than review claims: signup expectations, mobile usability, model discovery, free versus paid access, privacy basics, and Stripchat alternatives.",
    ],
    quickAnswer:
      "Stripchat may suit users who want broad category browsing and a modern free-preview flow, while alternatives may fit better if you want a premium private path or simpler beginner navigation.",
    criteria: [
      {
        label: "Category discovery",
        detail:
          "Compare whether categories help you narrow model discovery without creating a cluttered experience.",
      },
      {
        label: "Free versus paid areas",
        detail:
          "Check where free browsing ends and where account or payment prompts become relevant.",
      },
      {
        label: "Mobile usability",
        detail:
          "Review how room cards, filters, and player controls work on phones and tablets.",
      },
      {
        label: "Alternatives",
        detail:
          "Compare premium, private, and free cam site alternatives if platform style is still unclear.",
      },
    ],
    suitCards: [
      {
        title: "May suit category browsers",
        body: "Stripchat is worth comparing when category-based room discovery is part of how you choose live cam platforms.",
      },
      {
        title: "May not suit minimal layouts",
        body: "If you prefer a simpler first screen or guided private context, compare beginner-friendly and premium alternatives.",
      },
      {
        title: "Best compared by device",
        body: "Check desktop, tablet, and mobile flow because broad room discovery can feel different across screen sizes.",
      },
    ],
    privacy: [
      "Check what actions require an account and what paid prompts explain.",
      "Read privacy and terms pages before using interactive or paid features.",
      "Compare no-card and no-signup guidance if you want low-friction browsing.",
    ],
    mobile: [
      "Inspect how filters, room cards, and player controls respond on small screens.",
      "Compare HD expectations with your connection and device.",
      "Make sure account prompts do not feel rushed or unclear.",
    ],
    relatedPlatforms: ["chaturbate", "bongacams", "livejasmin"],
    relatedAlternatives: ["stripchat-alternatives", "free-cam-site-alternatives", "mobile-cam-site-alternatives"],
    relatedBest: ["mobile-cam-sites", "free-cam-sites", "hd-cam-sites"],
    relatedCompare: ["livejasmin-vs-stripchat", "chaturbate-vs-stripchat", "stripchat-vs-bongacams"],
    cta: {
      title: "Compare Stripchat-style browsing carefully",
      body: "Use live previews and decision guides to compare category discovery, mobile flow, free access, and signup expectations.",
      primaryLabel: "Compare Live Cam Options",
      primaryHref: "/go/signup",
      ...sharedSecondary,
    },
    faqs: [
      {
        question: "What should I compare before signing up for Stripchat?",
        answer:
          "Compare category browsing, free access, account prompts, mobile usability, privacy information, and alternatives with different platform styles.",
      },
      {
        question: "Is Stripchat better for mobile users?",
        answer:
          "Do not assume. Compare the mobile layout, video behavior, prompts, and navigation on the device you plan to use.",
      },
      {
        question: "Which Stripchat alternatives should I consider?",
        answer:
          "Consider free cam site alternatives, mobile cam site alternatives, and premium or private options if you want a different access style.",
      },
    ],
  },
  bongacams: {
    slug: "bongacams",
    path: "/platforms/bongacams",
    label: "BongaCams",
    h1: "BongaCams Guide: What to Compare Before Joining",
    title: "BongaCams Guide: What to Compare Before Joining",
    description:
      "Use this BongaCams guide to compare free browsing, private feature expectations, platform layout, mobile experience, payment awareness, alternatives, and signup flow.",
    intro: [
      "BongaCams is best approached as another live cam platform style option to compare by browsing flow, private feature prompts, and overall usability before joining.",
      "This guide explains what to check without fake ratings: free browsing expectations, platform layout, mobile experience, payment awareness, privacy basics, and BongaCams alternatives by user need.",
    ],
    quickAnswer:
      "BongaCams may suit users comparing broad live cam browsing with private feature options, but the better choice depends on signup clarity, mobile usability, privacy comfort, and alternatives.",
    criteria: [
      {
        label: "Browsing flow",
        detail:
          "Compare how easy it is to understand public rooms, categories, and next-step prompts.",
      },
      {
        label: "Private features",
        detail:
          "Check when private or paid options appear and whether they are explained clearly.",
      },
      {
        label: "Layout clarity",
        detail:
          "Evaluate whether the interface feels manageable on desktop, tablet, and mobile.",
      },
      {
        label: "Payment awareness",
        detail:
          "Read payment prompts and terms before using credits, private features, or upgrades.",
      },
    ],
    suitCards: [
      {
        title: "May suit broad browsers",
        body: "BongaCams is worth comparing when you want public room discovery with the option to evaluate private features later.",
      },
      {
        title: "May not suit premium-first users",
        body: "If verified model signals and a more guided private path matter more, compare premium alternatives first.",
      },
      {
        title: "Best compared with similar platforms",
        body: "Use BongaCams comparisons against Chaturbate and Stripchat when you want to choose between free cam community styles.",
      },
    ],
    privacy: [
      "Review what is public, what requires an account, and what payment prompts mean.",
      "Read privacy and support information before joining or paying.",
      "Compare no-signup and no-credit-card pages if you want a lower-commitment path.",
    ],
    mobile: [
      "Check room cards, menus, and player controls on your device.",
      "Make sure private and payment prompts fit clearly on smaller screens.",
      "Compare HD expectations against connection quality and player behavior.",
    ],
    relatedPlatforms: ["chaturbate", "stripchat", "livejasmin"],
    relatedAlternatives: ["bongacams-alternatives", "free-cam-site-alternatives", "private-cam-site-alternatives"],
    relatedBest: ["free-cam-sites", "private-cam-sites", "mobile-cam-sites"],
    relatedCompare: ["livejasmin-vs-bongacams", "chaturbate-vs-bongacams", "stripchat-vs-bongacams"],
    cta: {
      title: "Compare BongaCams with other platform styles",
      body: "Use current live previews and decision pages to compare browsing, private prompts, mobile flow, and alternatives.",
      primaryLabel: "Compare Live Cam Options",
      primaryHref: "/go/signup",
      ...sharedSecondary,
    },
    faqs: [
      {
        question: "What should I compare before joining BongaCams?",
        answer:
          "Compare public browsing, private feature prompts, account flow, payment expectations, mobile usability, and alternatives.",
      },
      {
        question: "Is BongaCams a premium or free-style platform?",
        answer:
          "It should be compared as a live cam platform with public browsing and private or paid feature paths, rather than reduced to one label.",
      },
      {
        question: "Which BongaCams alternatives are relevant?",
        answer:
          "Compare free cam community alternatives, private cam site alternatives, and premium platforms depending on how much control and guidance you want.",
      },
    ],
  },
};

export const platformPageLinks: SiteLink[] = platformPageOrder.map((slug) => {
  const page = platformPages[slug];

  return {
    href: page.path,
    label: page.label,
    description: page.description,
  };
});

export function getPlatformPage(slug: string) {
  if (slug in platformPages) {
    return platformPages[slug as PlatformPageSlug];
  }

  return null;
}
