import type { SiteLink } from "@/lib/site-navigation";

export type CategoryGroup =
  | "Popular model categories"
  | "Appearance-based categories"
  | "Platform feature categories"
  | "Device and viewing categories"
  | "Region/language style categories"
  | "Comparison-focused categories";

export type CategorySortMode = "default" | "quality" | "newest" | "trending" | "popular";

export interface CategoryFaq {
  question: string;
  answer: string;
}

export interface CategoryPageData {
  slug: string;
  path: string;
  label: string;
  h1: string;
  title: string;
  description: string;
  group: CategoryGroup;
  feedHint?: string;
  sortMode?: CategorySortMode;
  intro: string[];
  comparisonAngle: string;
  comparePoints: string[];
  availabilityNote: string;
  safetyNote: string;
  relatedCategories: string[];
  relatedBest: string[];
  relatedGuides: string[];
  relatedCompare: string[];
  cta: {
    title: string;
    body: string;
    primaryLabel: string;
    primaryHref: "/go/signup" | "/go/livejasmin" | "/go/random";
    secondaryLabel: string;
    secondaryHref: "/go/signup" | "/go/livejasmin" | "/go/random";
  };
  faqs: CategoryFaq[];
}

interface CategorySeed {
  slug: string;
  label: string;
  h1: string;
  group: CategoryGroup;
  feedHint?: string;
  sortMode?: CategorySortMode;
  angle: string;
  intent: string;
  compare: string[];
  availability: string;
  safety: string;
  related: string[];
  best: string[];
  guides: string[];
  compareLinks: string[];
  primaryLabel?: string;
  primaryHref?: "/go/signup" | "/go/livejasmin" | "/go/random";
  secondaryLabel?: string;
}

export const categoryPageOrder = [
  "live-cam-models",
  "blonde-cam-models",
  "brunette-cam-models",
  "asian-cam-models",
  "latina-cam-models",
  "milf-cam-models",
  "new-cam-models",
  "private-show-models",
  "verified-cam-models",
  "hd-cam-models",
  "mobile-cam-models",
  "trending-cam-models",
  "mature-cam-models",
  "redhead-cam-models",
  "ebony-cam-models",
  "petite-cam-models",
  "curvy-cam-models",
  "tattooed-cam-models",
  "cosplay-cam-models",
  "gamer-cam-models",
  "college-cam-models",
  "couple-cam-models",
  "european-cam-models",
  "american-cam-models",
  "british-cam-models",
  "french-cam-models",
  "spanish-cam-models",
  "italian-cam-models",
  "german-cam-models",
  "brazilian-cam-models",
  "fitness-cam-models",
  "chatty-cam-models",
  "english-speaking-cam-models",
  "free-preview-cam-models",
  "premium-cam-models",
  "desktop-cam-models",
  "tablet-friendly-cam-models",
  "online-now-cam-models",
  "popular-cam-models",
  "featured-cam-models",
] as const;

export type CategoryPageSlug = (typeof categoryPageOrder)[number];

const seeds: CategorySeed[] = [
  {
    slug: "live-cam-models",
    label: "Live Cam Models",
    h1: "Live Cam Models",
    group: "Popular model categories",
    angle: "general live model discovery across platform style, preview depth, HD quality, and signup comfort",
    intent: "Use live cam models as a current browsing signal while you compare the best live cam sites by privacy, free access, private options, and mobile flow.",
    compare: [
      "Room preview clarity and whether the model card gives enough context before you open a platform route.",
      "Whether the destination platform keeps browsing, signup, and payment prompts readable.",
      "How live availability, language signals, mobile streams, and HD indicators shape your first impression.",
    ],
    availability: "Live model availability changes constantly, so use this page as a preview layer rather than a fixed model database.",
    safety: "Treat every live preview as a starting point for comparison, then review the destination platform policies before creating an account.",
    related: ["online-now-cam-models", "featured-cam-models", "verified-cam-models"],
    best: ["free-cam-sites", "private-cam-sites"],
    guides: ["how-to-choose-a-cam-site", "are-cam-sites-safe"],
    compareLinks: ["premium-vs-free-cam-sites"],
  },
  {
    slug: "blonde-cam-models",
    label: "Blonde Cam Models",
    h1: "Blonde Cam Models",
    group: "Appearance-based categories",
    feedHint: "blonde",
    angle: "appearance-based browsing without losing sight of platform quality, preview clarity, and privacy basics",
    intent: "Compare blonde cam models as one discovery preference while still checking whether the cam platform feels clear, mobile friendly, and safe to evaluate before signup.",
    compare: [
      "Whether hair-color filters feel accurate or only approximate in the live feed.",
      "How profile previews, room cards, and platform filters help you narrow choices without relying on one visual cue.",
      "Whether free preview access gives enough context before a signup or payment prompt appears.",
    ],
    availability: "Hair-color data depends on what the live feed exposes, so the grid may use a best-available match and general live previews if exact matches are limited.",
    safety: "Do not use appearance alone as a decision point; compare privacy pages, platform prompts, and verified model signals too.",
    related: ["brunette-cam-models", "redhead-cam-models", "hd-cam-models"],
    best: ["free-cam-sites", "verified-cam-sites"],
    guides: ["verified-cam-models", "how-to-choose-a-cam-site"],
    compareLinks: ["livejasmin-vs-chaturbate"],
  },
  {
    slug: "brunette-cam-models",
    label: "Brunette Cam Models",
    h1: "Brunette Cam Models",
    group: "Appearance-based categories",
    feedHint: "brunette",
    angle: "brunette model browsing paired with practical checks for live preview quality and platform fit",
    intent: "Use brunette cam model previews to compare model variety while also judging mobile layout, HD availability, free browsing limits, and signup expectations.",
    compare: [
      "Whether category filters return enough relevant live rooms without hiding useful nearby choices.",
      "How clearly the platform presents public previews, private options, and account prompts.",
      "Whether model cards remain readable on phone, tablet, and desktop before you open a live room.",
    ],
    availability: "Live performer data changes as models come online, go private, or update profile details.",
    safety: "Keep the comparison grounded in platform transparency, not just profile presentation.",
    related: ["blonde-cam-models", "redhead-cam-models", "popular-cam-models"],
    best: ["mobile-cam-sites", "hd-cam-sites"],
    guides: ["best-cam-sites-for-mobile", "live-cam-site-safety-checklist"],
    compareLinks: ["chaturbate-vs-stripchat"],
  },
  {
    slug: "asian-cam-models",
    label: "Asian Cam Models",
    h1: "Asian Cam Models",
    group: "Appearance-based categories",
    feedHint: "asian",
    angle: "regional and appearance discovery with careful attention to language options and platform filters",
    intent: "Compare Asian cam models by live availability, profile clarity, language signals, HD quality, and whether the platform makes browsing expectations clear.",
    compare: [
      "Whether region or ethnicity labels are platform-provided and useful without being treated as exact guarantees.",
      "Language indicators, profile detail, mobile usability, and preview quality.",
      "How easily you can move from browsing to a platform decision without rushed signup prompts.",
    ],
    availability: "Region and appearance filters depend on feed detail, so availability may broaden to general live previews when exact labels are not exposed.",
    safety: "Use respectful category browsing and review platform policies before interacting or paying.",
    related: ["english-speaking-cam-models", "popular-cam-models", "verified-cam-models"],
    best: ["verified-cam-sites", "mobile-cam-sites"],
    guides: ["verified-cam-models", "how-to-choose-a-cam-site"],
    compareLinks: ["livejasmin-vs-stripchat"],
  },
  {
    slug: "latina-cam-models",
    label: "Latina Cam Models",
    h1: "Latina Cam Models",
    group: "Appearance-based categories",
    feedHint: "latina",
    angle: "Latina model discovery with comparison guidance around language, preview access, and platform standards",
    intent: "Browse Latina cam model previews while comparing whether the platform supports clear filters, mobile browsing, HD streams, and privacy-aware signup steps.",
    compare: [
      "How the platform labels regional or appearance categories and whether those labels are easy to refine.",
      "Whether language, stream quality, and free preview details are visible before joining.",
      "How related categories such as Brazilian, Spanish, or featured models broaden discovery.",
    ],
    availability: "Exact category matches can vary by live feed fields, so the grid uses the best available signals and live fallback behavior.",
    safety: "Compare destination platform policies and payment prompts before sharing personal or billing details.",
    related: ["brazilian-cam-models", "spanish-cam-models", "featured-cam-models"],
    best: ["free-cam-sites", "cam-sites-no-signup"],
    guides: ["cam-sites-no-signup", "free-cam-sites"],
    compareLinks: ["premium-vs-free-cam-sites"],
  },
  {
    slug: "milf-cam-models",
    label: "MILF Cam Models",
    h1: "MILF Cam Models",
    group: "Appearance-based categories",
    feedHint: "milf",
    angle: "mature-style browsing with realistic expectations about labels, live availability, and platform control",
    intent: "Compare MILF cam model previews by profile clarity, platform filters, private feature expectations, and whether a site gives enough context before signup.",
    compare: [
      "Whether mature-style labels are feed-provided, self-described, or inferred from limited profile details.",
      "How private show prompts, account flow, and payment steps are presented.",
      "Whether mobile and HD previews make it easy to compare before choosing.",
    ],
    availability: "MILF-style matching may depend on age or category signals, and live supply can change quickly.",
    safety: "Use platform standards, privacy pages, and verified signals as part of the decision process.",
    related: ["mature-cam-models", "premium-cam-models", "private-show-models"],
    best: ["private-cam-sites", "verified-cam-sites"],
    guides: ["verified-cam-models", "live-cam-pricing-explained"],
    compareLinks: ["private-cam-sites-vs-free-cam-sites"],
  },
  {
    slug: "new-cam-models",
    label: "New Cam Models",
    h1: "New Cam Models",
    group: "Popular model categories",
    feedHint: "new",
    sortMode: "newest",
    angle: "new performer discovery for users who want fresh rooms while comparing platform onboarding and profile clarity",
    intent: "Use new cam model previews to see how platforms present recently added performers, public previews, and signup prompts before you choose a live cam site.",
    compare: [
      "Whether new-model indicators are visible and easy to understand.",
      "How much profile context appears before you open a live room.",
      "Whether the platform makes free viewing, private options, and account requirements obvious.",
    ],
    availability: "New model indicators depend on live feed data and can change as performers move through platform onboarding.",
    safety: "Do not treat a new badge as a trust guarantee; compare policies, payment prompts, and verified signals.",
    related: ["featured-cam-models", "online-now-cam-models", "verified-cam-models"],
    best: ["cam-sites-for-beginners", "free-cam-sites"],
    guides: ["best-cam-sites-for-beginners", "how-to-choose-a-cam-site"],
    compareLinks: ["premium-vs-free-cam-sites"],
  },
  {
    slug: "private-show-models",
    label: "Private Show Models",
    h1: "Private Show Models",
    group: "Platform feature categories",
    feedHint: "private",
    angle: "private-feature discovery focused on control, payment awareness, and platform transparency",
    intent: "Compare private show models by how a platform explains private access, account expectations, payment prompts, and user control before signup.",
    compare: [
      "Whether private or premium session labels are visible before you click through.",
      "How clearly the platform explains credits, payment prompts, or account requirements.",
      "Whether verified model signals and support pages are easy to locate.",
    ],
    availability: "Private availability changes by room status, so current grid results should be treated as a live browsing sample.",
    safety: "Read private feature prompts and platform terms before paying for any session or credit-based action.",
    related: ["premium-cam-models", "verified-cam-models", "hd-cam-models"],
    best: ["private-cam-sites", "verified-cam-sites"],
    guides: ["live-cam-pricing-explained", "live-cam-site-safety-checklist"],
    compareLinks: ["private-cam-sites-vs-free-cam-sites"],
    primaryLabel: "Explore Private Cam Options",
  },
  {
    slug: "verified-cam-models",
    label: "Verified Cam Models",
    h1: "Verified Cam Models",
    group: "Platform feature categories",
    sortMode: "quality",
    angle: "verification-aware browsing that treats platform standards as one signal rather than a guarantee",
    intent: "Use verified cam model guidance to compare profile clarity, platform standards, privacy information, and real model discovery before joining.",
    compare: [
      "Whether the platform explains what verification means in plain language.",
      "How profile consistency, support visibility, and account controls support confidence.",
      "Whether HD, mobile, and private features are explained before signup or payment.",
    ],
    availability: "If the feed does not expose a verified-only field, this page uses general live previews and explains verification as a platform signal to check at the destination.",
    safety: "Verification language is helpful, but it should not replace privacy, payment, and support checks.",
    related: ["private-show-models", "hd-cam-models", "featured-cam-models"],
    best: ["verified-cam-sites", "private-cam-sites"],
    guides: ["verified-cam-models", "are-cam-sites-safe"],
    compareLinks: ["livejasmin-vs-chaturbate"],
    primaryLabel: "Start With a Verified Platform",
    primaryHref: "/go/livejasmin",
  },
  {
    slug: "hd-cam-models",
    label: "HD Cam Models",
    h1: "HD Cam Models",
    group: "Platform feature categories",
    feedHint: "hd",
    sortMode: "quality",
    angle: "video clarity comparison across stream quality, device fit, and realistic HD expectations",
    intent: "Compare HD cam models by stream clarity signals, device quality, connection stability, and whether a platform keeps video previews readable before signup.",
    compare: [
      "Stream quality indicators, player stability, and whether previews load cleanly.",
      "How HD expectations change on desktop, tablet, and mobile connections.",
      "Whether the platform explains private, premium, and payment prompts near the player.",
    ],
    availability: "HD availability depends on model stream settings, device, connection, and platform player behavior.",
    safety: "A clear stream does not replace platform checks for privacy, signup prompts, and payment clarity.",
    related: ["mobile-cam-models", "tablet-friendly-cam-models", "verified-cam-models"],
    best: ["hd-cam-sites", "mobile-cam-sites"],
    guides: ["best-cam-sites-for-mobile", "how-to-choose-a-cam-site"],
    compareLinks: ["livejasmin-vs-stripchat"],
  },
  {
    slug: "mobile-cam-models",
    label: "Mobile Cam Models",
    h1: "Mobile Cam Models",
    group: "Device and viewing categories",
    feedHint: "mobile",
    angle: "mobile-first model browsing for phones and tablets",
    intent: "Compare mobile cam models by live preview fit, touch navigation, player loading, HD expectations, and how signup prompts behave on small screens.",
    compare: [
      "Whether live previews, buttons, and room cards remain readable on a phone.",
      "How quickly model cards load and whether HD streams stay practical on mobile data.",
      "Whether account, privacy, and payment prompts are clear before tapping through.",
    ],
    availability: "Mobile stream signals depend on feed data and platform player behavior, so use the grid as a current preview sample.",
    safety: "Be mindful of shared devices, saved forms, browser history, and notification settings.",
    related: ["tablet-friendly-cam-models", "hd-cam-models", "desktop-cam-models"],
    best: ["mobile-cam-sites", "hd-cam-sites"],
    guides: ["best-cam-sites-for-mobile", "live-cam-site-safety-checklist"],
    compareLinks: ["stripchat-vs-bongacams"],
  },
  {
    slug: "trending-cam-models",
    label: "Trending Cam Models",
    h1: "Trending Cam Models",
    group: "Popular model categories",
    sortMode: "trending",
    angle: "current discovery without claiming fixed popularity scores",
    intent: "Browse trending cam model previews as a live snapshot while comparing platform discovery style, room access, mobile usability, and private feature prompts.",
    compare: [
      "Which rooms are active now without treating the order as a permanent ranking.",
      "Whether the platform gives enough room context before signup or payment prompts.",
      "How trending-style discovery differs from verified, HD, or category-based browsing.",
    ],
    availability: "Trending availability is a live browsing signal, not a fixed leaderboard or traffic claim.",
    safety: "Avoid choosing only by momentum; compare policies, privacy, and payment flow too.",
    related: ["popular-cam-models", "featured-cam-models", "online-now-cam-models"],
    best: ["free-cam-sites", "cam-sites-no-signup"],
    guides: ["free-cam-sites", "how-to-choose-a-cam-site"],
    compareLinks: ["chaturbate-vs-stripchat"],
  },
  {
    slug: "mature-cam-models",
    label: "Mature Cam Models",
    h1: "Mature Cam Models",
    group: "Appearance-based categories",
    feedHint: "mature",
    angle: "mature model browsing with a focus on profile context and private feature clarity",
    intent: "Compare mature cam models by live availability, platform filters, profile clarity, private options, and whether the site feels clear before signup.",
    compare: [
      "Whether mature category labels come from profile data, platform filters, or general room context.",
      "How private and premium prompts are explained when browsing mature-style rooms.",
      "Whether HD and mobile previews give enough context for a decision.",
    ],
    availability: "Mature category matching can vary by feed fields and profile updates.",
    safety: "Use account, payment, and privacy checks before moving from preview to platform signup.",
    related: ["milf-cam-models", "premium-cam-models", "private-show-models"],
    best: ["private-cam-sites", "verified-cam-sites"],
    guides: ["live-cam-pricing-explained", "verified-cam-models"],
    compareLinks: ["private-cam-sites-vs-free-cam-sites"],
  },
  {
    slug: "redhead-cam-models",
    label: "Redhead Cam Models",
    h1: "Redhead Cam Models",
    group: "Appearance-based categories",
    feedHint: "redhead",
    angle: "redhead model browsing as one preference within broader platform comparison",
    intent: "Compare redhead cam model previews by filter accuracy, live room clarity, HD quality, and whether the destination platform explains browsing limits.",
    compare: [
      "Whether hair-color signals are exact, approximate, or unavailable in the feed.",
      "How useful related appearance categories are when exact live matches are limited.",
      "Whether signup, private, and payment prompts are easy to understand.",
    ],
    availability: "Exact redhead matches may vary with who is online and which profile details are exposed.",
    safety: "Pair appearance browsing with platform trust checks and privacy awareness.",
    related: ["blonde-cam-models", "brunette-cam-models", "featured-cam-models"],
    best: ["free-cam-sites", "hd-cam-sites"],
    guides: ["how-to-choose-a-cam-site", "are-cam-sites-safe"],
    compareLinks: ["premium-vs-free-cam-sites"],
  },
  {
    slug: "ebony-cam-models",
    label: "Ebony Cam Models",
    h1: "Ebony Cam Models",
    group: "Appearance-based categories",
    feedHint: "ebony",
    angle: "appearance and discovery browsing handled through respectful live comparison guidance",
    intent: "Compare ebony cam model previews by live availability, profile clarity, platform filter usefulness, free access, and mobile usability.",
    compare: [
      "Whether the feed exposes relevant profile or category signals for accurate discovery.",
      "How room previews and related categories help when exact filters are limited.",
      "Whether destination platform privacy and payment prompts are visible before signup.",
    ],
    availability: "Feed labels may be incomplete, so the page uses best-available live matches and general previews when needed.",
    safety: "Use respectful browsing and compare platform standards before joining.",
    related: ["featured-cam-models", "popular-cam-models", "english-speaking-cam-models"],
    best: ["free-cam-sites", "verified-cam-sites"],
    guides: ["verified-cam-models", "live-cam-site-safety-checklist"],
    compareLinks: ["livejasmin-vs-bongacams"],
  },
  {
    slug: "petite-cam-models",
    label: "Petite Cam Models",
    h1: "Petite Cam Models",
    group: "Appearance-based categories",
    feedHint: "petite",
    angle: "petite category browsing with realistic filter expectations and platform checks",
    intent: "Browse petite cam model previews while comparing live feed accuracy, mobile layout, profile detail, and signup comfort.",
    compare: [
      "Whether body-style labels are available or only loosely inferred from profile terms.",
      "How much room information is visible before opening the platform.",
      "Whether free preview access is enough for comparison before account prompts.",
    ],
    availability: "Body-style filters are not always exposed consistently, so live results may include broader model previews.",
    safety: "Do not treat profile labels as platform proof; read policies and prompts directly.",
    related: ["curvy-cam-models", "fitness-cam-models", "featured-cam-models"],
    best: ["cam-sites-for-beginners", "mobile-cam-sites"],
    guides: ["best-cam-sites-for-beginners", "best-cam-sites-for-mobile"],
    compareLinks: ["premium-vs-free-cam-sites"],
  },
  {
    slug: "curvy-cam-models",
    label: "Curvy Cam Models",
    h1: "Curvy Cam Models",
    group: "Appearance-based categories",
    feedHint: "curvy",
    angle: "curvy model browsing with comparison guidance around category precision and platform transparency",
    intent: "Compare curvy cam model previews by profile clarity, filter usefulness, free browsing access, HD signals, and platform privacy basics.",
    compare: [
      "Whether body-style categories are clearly labeled by the platform or only approximate.",
      "How related categories help if current live availability is narrow.",
      "Whether the platform explains private access and payment prompts before signup.",
    ],
    availability: "Curvy category availability depends on live profile fields and current rooms.",
    safety: "Use destination policies and account controls as part of your comparison.",
    related: ["petite-cam-models", "fitness-cam-models", "popular-cam-models"],
    best: ["free-cam-sites", "private-cam-sites"],
    guides: ["free-cam-sites", "live-cam-pricing-explained"],
    compareLinks: ["private-cam-sites-vs-free-cam-sites"],
  },
  {
    slug: "tattooed-cam-models",
    label: "Tattooed Cam Models",
    h1: "Tattooed Cam Models",
    group: "Appearance-based categories",
    feedHint: "tattooed",
    angle: "style-led discovery using live profile hints and platform comparison checks",
    intent: "Compare tattooed cam model previews by style signals, profile detail, HD visibility, and whether the platform makes browsing requirements clear.",
    compare: [
      "Whether tattoo or style information appears in profile details or category fields.",
      "How image clarity and HD stream cues affect style-led discovery.",
      "Whether platform filters, privacy pages, and signup prompts are easy to evaluate.",
    ],
    availability: "Style-specific signals may be sparse, so the live grid falls back to broader previews when needed.",
    safety: "Use style categories as discovery, then compare platform policies and payment flow.",
    related: ["cosplay-cam-models", "gamer-cam-models", "featured-cam-models"],
    best: ["hd-cam-sites", "verified-cam-sites"],
    guides: ["verified-cam-models", "how-to-choose-a-cam-site"],
    compareLinks: ["livejasmin-vs-stripchat"],
  },
  {
    slug: "cosplay-cam-models",
    label: "Cosplay Cam Models",
    h1: "Cosplay Cam Models",
    group: "Appearance-based categories",
    feedHint: "cosplay",
    angle: "theme-based discovery for users comparing platform variety and category filters",
    intent: "Use cosplay cam model previews to compare how platforms surface themed rooms, profile tags, mobile previews, and signup expectations.",
    compare: [
      "Whether theme tags are supported by the live feed or need to be checked through platform filters.",
      "How related categories such as gamer, featured, and popular models broaden discovery.",
      "Whether mobile and desktop layouts make theme browsing easy before signup.",
    ],
    availability: "Cosplay signals may not be exact in the feed, so check live platform filters for the most current themed rooms.",
    safety: "Compare privacy, payment prompts, and account settings before using interactive features.",
    related: ["gamer-cam-models", "tattooed-cam-models", "featured-cam-models"],
    best: ["cam-sites-for-beginners", "free-cam-sites"],
    guides: ["best-cam-sites-for-beginners", "free-cam-sites"],
    compareLinks: ["chaturbate-vs-stripchat"],
  },
  {
    slug: "gamer-cam-models",
    label: "Gamer Cam Models",
    h1: "Gamer Cam Models",
    group: "Appearance-based categories",
    feedHint: "gamer",
    angle: "interest-led browsing where platform tags and live filters matter more than fixed directories",
    intent: "Compare gamer cam model previews by platform tagging, room discovery, chatty profile signals, and whether browsing stays clear before signup.",
    compare: [
      "Whether interest tags appear in the feed or need to be refined on the platform.",
      "How chat-focused, themed, or featured categories overlap with gamer discovery.",
      "Whether account prompts interrupt browsing before you have enough context.",
    ],
    availability: "Interest tags can be inconsistent, so use related categories and live filters to refine your search.",
    safety: "Keep personal information private and read platform rules before interacting.",
    related: ["chatty-cam-models", "cosplay-cam-models", "featured-cam-models"],
    best: ["free-cam-sites", "cam-sites-no-signup"],
    guides: ["cam-sites-no-signup", "are-cam-sites-safe"],
    compareLinks: ["premium-vs-free-cam-sites"],
  },
  {
    slug: "college-cam-models",
    label: "College Cam Models",
    h1: "College Cam Models",
    group: "Appearance-based categories",
    feedHint: "college",
    angle: "youthful-style category browsing with clear limits around live feed precision",
    intent: "Compare college cam model previews by profile tags, beginner-friendly navigation, free access, and whether platform prompts are transparent.",
    compare: [
      "Whether category labels are actually supported by platform filters.",
      "How beginner-friendly the platform feels when browsing public previews.",
      "Whether related new, popular, and featured categories give better current discovery.",
    ],
    availability: "College-style tags may not be exact in the feed, so use this as a broad discovery page and confirm filters on the destination platform.",
    safety: "Only use platforms that present policies, prompts, and account controls clearly.",
    related: ["new-cam-models", "popular-cam-models", "featured-cam-models"],
    best: ["cam-sites-for-beginners", "free-cam-sites"],
    guides: ["best-cam-sites-for-beginners", "how-to-choose-a-cam-site"],
    compareLinks: ["chaturbate-vs-bongacams"],
  },
  {
    slug: "couple-cam-models",
    label: "Couple Cam Models",
    h1: "Couple Cam Models",
    group: "Appearance-based categories",
    feedHint: "couple",
    angle: "multi-performer room discovery with attention to room labels and platform expectations",
    intent: "Compare couple cam model previews by room category clarity, private feature prompts, HD quality, and whether the platform explains access before signup.",
    compare: [
      "Whether room labels or performer counts make couple categories easy to identify.",
      "How private, premium, and group-style prompts appear around multi-performer rooms.",
      "Whether mobile previews fit cleanly when more information is shown.",
    ],
    availability: "Couple room availability changes live and may depend on category labels or performer data.",
    safety: "Read platform rules, private feature terms, and payment prompts before using paid tools.",
    related: ["private-show-models", "premium-cam-models", "hd-cam-models"],
    best: ["private-cam-sites", "hd-cam-sites"],
    guides: ["live-cam-pricing-explained", "live-cam-site-safety-checklist"],
    compareLinks: ["private-cam-sites-vs-free-cam-sites"],
  },
  {
    slug: "european-cam-models",
    label: "European Cam Models",
    h1: "European Cam Models",
    group: "Region/language style categories",
    feedHint: "european",
    angle: "regional discovery across language, time-of-day availability, and platform filters",
    intent: "Compare European cam model previews by language signals, current availability, HD quality, mobile usability, and regional filter clarity.",
    compare: [
      "Whether country or language fields help narrow discovery without overclaiming precision.",
      "How European subcategories such as British, French, Spanish, Italian, and German differ.",
      "Whether free preview and signup expectations are clear before joining.",
    ],
    availability: "Regional matching depends on feed country and language fields, so live results can broaden when exact details are missing.",
    safety: "Review destination policies and terms because regional labels do not replace platform transparency.",
    related: ["british-cam-models", "french-cam-models", "german-cam-models"],
    best: ["verified-cam-sites", "mobile-cam-sites"],
    guides: ["verified-cam-models", "best-cam-sites-for-mobile"],
    compareLinks: ["livejasmin-vs-bongacams"],
  },
  {
    slug: "american-cam-models",
    label: "American Cam Models",
    h1: "American Cam Models",
    group: "Region/language style categories",
    feedHint: "american",
    angle: "country-style browsing with attention to language, schedule, and platform discovery tools",
    intent: "Compare American cam model previews by current live availability, language fit, platform filters, free access, and privacy prompts.",
    compare: [
      "Whether country fields, language labels, or platform filters support the category.",
      "How online-now and popular categories change discovery during different browsing windows.",
      "Whether no-signup or no-card viewing gives enough context first.",
    ],
    availability: "Country signals may not always be present in the feed, so this page uses best-available matching and general live previews.",
    safety: "Compare account and payment steps before sharing information.",
    related: ["english-speaking-cam-models", "online-now-cam-models", "popular-cam-models"],
    best: ["cam-sites-no-signup", "cam-sites-without-credit-card"],
    guides: ["cam-sites-without-credit-card", "cam-sites-no-signup"],
    compareLinks: ["chaturbate-vs-stripchat"],
  },
  {
    slug: "british-cam-models",
    label: "British Cam Models",
    h1: "British Cam Models",
    group: "Region/language style categories",
    feedHint: "british",
    angle: "British model discovery with English-language fit and current live availability in mind",
    intent: "Compare British cam model previews by language signals, regional filters, mobile usability, HD quality, and signup clarity.",
    compare: [
      "Whether the feed exposes country or language data clearly enough for useful matching.",
      "How British, European, and English-speaking categories overlap.",
      "Whether platform prompts remain understandable before account creation.",
    ],
    availability: "British category availability depends on live country, language, and profile data.",
    safety: "Read platform privacy and billing prompts directly before joining.",
    related: ["english-speaking-cam-models", "european-cam-models", "featured-cam-models"],
    best: ["mobile-cam-sites", "free-cam-sites"],
    guides: ["best-cam-sites-for-mobile", "free-cam-sites"],
    compareLinks: ["livejasmin-vs-stripchat"],
  },
  {
    slug: "french-cam-models",
    label: "French Cam Models",
    h1: "French Cam Models",
    group: "Region/language style categories",
    feedHint: "french",
    angle: "French model discovery through language and regional comparison signals",
    intent: "Compare French cam model previews by country or language hints, preview quality, platform filters, and privacy-aware signup flow.",
    compare: [
      "Whether French language or country fields are visible enough to guide browsing.",
      "How European and regional categories help refine live discovery.",
      "Whether HD and mobile previews are strong enough before account prompts.",
    ],
    availability: "French matching uses best-available feed signals and may fall back to general live previews.",
    safety: "Confirm platform terms and privacy expectations on the destination site.",
    related: ["european-cam-models", "spanish-cam-models", "italian-cam-models"],
    best: ["verified-cam-sites", "hd-cam-sites"],
    guides: ["verified-cam-models", "how-to-choose-a-cam-site"],
    compareLinks: ["livejasmin-vs-bongacams"],
  },
  {
    slug: "spanish-cam-models",
    label: "Spanish Cam Models",
    h1: "Spanish Cam Models",
    group: "Region/language style categories",
    feedHint: "spanish",
    angle: "Spanish model browsing across regional, language, and Latina discovery paths",
    intent: "Compare Spanish cam model previews by language fit, live availability, related Latina categories, mobile usability, and signup expectations.",
    compare: [
      "Whether Spanish language or country fields are available in the live feed.",
      "How Spanish, Latina, and European category paths overlap for discovery.",
      "Whether no-card or no-signup browsing gives enough platform context.",
    ],
    availability: "Spanish category precision depends on available country and language fields.",
    safety: "Review privacy and payment prompts before moving from browsing to interaction.",
    related: ["latina-cam-models", "european-cam-models", "brazilian-cam-models"],
    best: ["free-cam-sites", "cam-sites-without-credit-card"],
    guides: ["cam-sites-without-credit-card", "free-cam-sites"],
    compareLinks: ["premium-vs-free-cam-sites"],
  },
  {
    slug: "italian-cam-models",
    label: "Italian Cam Models",
    h1: "Italian Cam Models",
    group: "Region/language style categories",
    feedHint: "italian",
    angle: "Italian model discovery with region filters and platform usability as the decision layer",
    intent: "Compare Italian cam model previews by regional signals, model card clarity, HD stream expectations, and safe signup basics.",
    compare: [
      "Whether country or language fields make Italian discovery practical.",
      "How related European categories expand current live browsing.",
      "Whether destination platforms keep payment and account prompts clear.",
    ],
    availability: "Italian matches depend on live feed detail and may vary as rooms change status.",
    safety: "Treat regional labels as discovery aids, then compare platform trust signals separately.",
    related: ["european-cam-models", "french-cam-models", "german-cam-models"],
    best: ["hd-cam-sites", "verified-cam-sites"],
    guides: ["how-to-choose-a-cam-site", "verified-cam-models"],
    compareLinks: ["livejasmin-vs-stripchat"],
  },
  {
    slug: "german-cam-models",
    label: "German Cam Models",
    h1: "German Cam Models",
    group: "Region/language style categories",
    feedHint: "german",
    angle: "German model browsing where country, language, and platform filter quality matter",
    intent: "Compare German cam model previews by regional matching, language cues, mobile layout, and whether platform policies are easy to inspect.",
    compare: [
      "Whether German country or language signals are exposed by the feed.",
      "How European and English-speaking categories support discovery if exact matches are limited.",
      "Whether the platform gives clear privacy, signup, and payment context.",
    ],
    availability: "German category matching is best effort and depends on current model data.",
    safety: "Read platform prompts and terms directly before account or payment steps.",
    related: ["european-cam-models", "british-cam-models", "english-speaking-cam-models"],
    best: ["mobile-cam-sites", "cam-sites-for-beginners"],
    guides: ["best-cam-sites-for-mobile", "best-cam-sites-for-beginners"],
    compareLinks: ["stripchat-vs-bongacams"],
  },
  {
    slug: "brazilian-cam-models",
    label: "Brazilian Cam Models",
    h1: "Brazilian Cam Models",
    group: "Region/language style categories",
    feedHint: "brazilian",
    angle: "Brazilian model discovery paired with Latina-related browsing and platform comparison checks",
    intent: "Compare Brazilian cam model previews by regional signals, live availability, preview quality, mobile usability, and signup transparency.",
    compare: [
      "Whether Brazilian country or profile signals are available in the feed.",
      "How Brazilian, Latina, and popular model categories overlap during live browsing.",
      "Whether free preview access provides enough context before account prompts.",
    ],
    availability: "Brazilian matching depends on live feed country data and can broaden to general previews when exact data is not present.",
    safety: "Use privacy, payment, and platform policy checks before joining.",
    related: ["latina-cam-models", "spanish-cam-models", "popular-cam-models"],
    best: ["free-cam-sites", "cam-sites-no-signup"],
    guides: ["cam-sites-no-signup", "free-cam-sites"],
    compareLinks: ["chaturbate-vs-bongacams"],
  },
  {
    slug: "fitness-cam-models",
    label: "Fitness Cam Models",
    h1: "Fitness Cam Models",
    group: "Appearance-based categories",
    feedHint: "fitness",
    angle: "fitness-style discovery with useful checks for profile tags, video clarity, and platform trust",
    intent: "Compare fitness cam model previews by style tags, HD quality, mobile player behavior, and whether platform filters are practical.",
    compare: [
      "Whether fitness or athletic tags are exposed by profile or category data.",
      "How HD and mobile previews support visual comparison without overclaiming quality.",
      "Whether privacy and payment prompts are clear before signup.",
    ],
    availability: "Fitness-style tags may be limited in the feed, so related categories can help broaden discovery.",
    safety: "Compare platform policies and account controls before interacting.",
    related: ["curvy-cam-models", "petite-cam-models", "hd-cam-models"],
    best: ["hd-cam-sites", "mobile-cam-sites"],
    guides: ["best-cam-sites-for-mobile", "are-cam-sites-safe"],
    compareLinks: ["livejasmin-vs-stripchat"],
  },
  {
    slug: "chatty-cam-models",
    label: "Chatty Cam Models",
    h1: "Chatty Cam Models",
    group: "Comparison-focused categories",
    feedHint: "chatty",
    angle: "conversation-focused browsing where language, room context, and platform controls matter",
    intent: "Compare chatty cam model previews by language signals, public room access, private feature prompts, and how easy the platform is for beginners.",
    compare: [
      "Whether language and room context are visible before opening a platform route.",
      "How free preview access supports low-pressure comparison.",
      "Whether chat features require signup, credits, or private access.",
    ],
    availability: "Conversation style is not always a structured feed field, so use live platform filters for the most precise chat-focused browsing.",
    safety: "Avoid sharing personal details and check platform account controls before interacting.",
    related: ["english-speaking-cam-models", "gamer-cam-models", "free-preview-cam-models"],
    best: ["cam-sites-for-beginners", "free-cam-sites"],
    guides: ["best-cam-sites-for-beginners", "are-cam-sites-safe"],
    compareLinks: ["private-cam-sites-vs-free-cam-sites"],
  },
  {
    slug: "english-speaking-cam-models",
    label: "English Speaking Cam Models",
    h1: "English Speaking Cam Models",
    group: "Region/language style categories",
    feedHint: "english-speaking",
    angle: "language-first discovery for users who want clearer room context before signup",
    intent: "Compare English speaking cam model previews by language fields, profile clarity, mobile usability, and platform signup expectations.",
    compare: [
      "Whether English language signals are visible in model details.",
      "How language fit changes the usefulness of chatty, British, American, or featured categories.",
      "Whether account and payment prompts are readable before deeper interaction.",
    ],
    availability: "Language fields depend on live feed data and may change when models update profiles.",
    safety: "Keep conversations privacy-aware and review platform rules before interacting.",
    related: ["british-cam-models", "american-cam-models", "chatty-cam-models"],
    best: ["cam-sites-for-beginners", "mobile-cam-sites"],
    guides: ["best-cam-sites-for-beginners", "best-cam-sites-for-mobile"],
    compareLinks: ["chaturbate-vs-stripchat"],
  },
  {
    slug: "free-preview-cam-models",
    label: "Free Preview Cam Models",
    h1: "Free Preview Cam Models",
    group: "Platform feature categories",
    feedHint: "free-preview",
    angle: "preview-first browsing for users comparing free access before signup or payment",
    intent: "Compare free preview cam models by what you can see before signup, how room cards explain access, and when private or paid features may begin.",
    compare: [
      "Whether the live room is visible before account creation.",
      "How clearly the platform marks free, private, premium, or credit-based steps.",
      "Whether no-signup and no-card expectations are separate and easy to understand.",
    ],
    availability: "Free preview availability depends on current room status and destination platform rules.",
    safety: "Free preview access is useful for comparison, but users should still review privacy and payment terms.",
    related: ["live-cam-models", "online-now-cam-models", "popular-cam-models"],
    best: ["free-cam-sites", "cam-sites-no-signup"],
    guides: ["free-cam-sites", "cam-sites-no-signup"],
    compareLinks: ["premium-vs-free-cam-sites"],
    primaryLabel: "View Live Models",
    primaryHref: "/go/random",
  },
  {
    slug: "premium-cam-models",
    label: "Premium Cam Models",
    h1: "Premium Cam Models",
    group: "Platform feature categories",
    feedHint: "premium",
    sortMode: "quality",
    angle: "premium-style discovery focused on controlled access, private features, and clearer platform expectations",
    intent: "Compare premium cam model previews by HD quality, private feature context, verified signals, payment prompts, and mobile usability.",
    compare: [
      "Whether premium or private access is explained before payment details are requested.",
      "How HD quality, profile clarity, and platform polish support the decision.",
      "Whether support, privacy, and account controls are easy to find.",
    ],
    availability: "Premium-style indicators vary by room status and platform data, so use this as a decision aid rather than a fixed ranking.",
    safety: "Read payment prompts and platform terms carefully before using premium features.",
    related: ["private-show-models", "verified-cam-models", "hd-cam-models"],
    best: ["private-cam-sites", "verified-cam-sites"],
    guides: ["live-cam-pricing-explained", "verified-cam-models"],
    compareLinks: ["premium-vs-free-cam-sites"],
    primaryLabel: "Start With a Premium Platform",
    primaryHref: "/go/livejasmin",
  },
  {
    slug: "desktop-cam-models",
    label: "Desktop Cam Models",
    h1: "Desktop Cam Models",
    group: "Device and viewing categories",
    angle: "desktop browsing for users comparing wider layouts, tables, filters, and video clarity",
    intent: "Compare desktop cam model previews by room card density, HD player space, filter controls, and whether signup or payment prompts are easy to inspect.",
    compare: [
      "Whether larger screens make model discovery, filters, and comparison easier.",
      "How desktop HD previews differ from mobile stream behavior.",
      "Whether account prompts, privacy links, and terms are easier to review.",
    ],
    availability: "The feed is not desktop-exclusive, so this page uses general live previews with desktop-focused decision guidance.",
    safety: "Desktop browsing still requires privacy awareness around browser history, saved forms, and account data.",
    related: ["mobile-cam-models", "tablet-friendly-cam-models", "hd-cam-models"],
    best: ["hd-cam-sites", "mobile-cam-sites"],
    guides: ["best-cam-sites-for-mobile", "live-cam-site-safety-checklist"],
    compareLinks: ["livejasmin-vs-stripchat"],
  },
  {
    slug: "tablet-friendly-cam-models",
    label: "Tablet Friendly Cam Models",
    h1: "Tablet Friendly Cam Models",
    group: "Device and viewing categories",
    feedHint: "mobile",
    angle: "tablet browsing that sits between phone convenience and desktop space",
    intent: "Compare tablet friendly cam model previews by responsive layout, touch controls, HD behavior, and signup prompt clarity.",
    compare: [
      "Whether model grids and live previews remain readable at tablet widths.",
      "How touch controls, menus, and account prompts behave in portrait and landscape.",
      "Whether HD streams and private feature prompts are understandable before signup.",
    ],
    availability: "Tablet-specific feed filters are not exact, so mobile stream signals and general live previews are used.",
    safety: "Shared tablet use can affect privacy, saved forms, and notification comfort.",
    related: ["mobile-cam-models", "desktop-cam-models", "hd-cam-models"],
    best: ["mobile-cam-sites", "hd-cam-sites"],
    guides: ["best-cam-sites-for-mobile", "are-cam-sites-safe"],
    compareLinks: ["stripchat-vs-bongacams"],
  },
  {
    slug: "online-now-cam-models",
    label: "Online Now Cam Models",
    h1: "Online Now Cam Models",
    group: "Popular model categories",
    feedHint: "online-now",
    sortMode: "popular",
    angle: "current live availability without fixed rankings or fake online counts",
    intent: "Browse online now cam model previews to compare current room availability, free preview access, mobile flow, and platform prompts before joining.",
    compare: [
      "Which rooms are currently available through the live feed.",
      "How room status labels help you understand free, private, or member-only access.",
      "Whether the platform gives enough context before signup or payment prompts.",
    ],
    availability: "Online status changes constantly, so this page is a live snapshot rather than a permanent list.",
    safety: "Do not treat online availability as a quality claim; compare platform policies and privacy settings.",
    related: ["trending-cam-models", "popular-cam-models", "free-preview-cam-models"],
    best: ["free-cam-sites", "cam-sites-no-signup"],
    guides: ["cam-sites-no-signup", "how-to-choose-a-cam-site"],
    compareLinks: ["premium-vs-free-cam-sites"],
  },
  {
    slug: "popular-cam-models",
    label: "Popular Cam Models",
    h1: "Popular Cam Models",
    group: "Popular model categories",
    sortMode: "popular",
    angle: "popular-style browsing without fake rankings, stars, or traffic claims",
    intent: "Compare popular cam model previews as a discovery shortcut while still checking platform style, signup expectations, mobile usability, and privacy basics.",
    compare: [
      "How active room status and stream quality can guide browsing without becoming a fake score.",
      "Whether related trending, online-now, and featured categories help refine current discovery.",
      "Whether the destination platform makes access and payment expectations clear.",
    ],
    availability: "This page does not claim fixed popularity numbers; it uses live feed signals as a current browsing aid.",
    safety: "Avoid choosing only by visibility. Compare policies, support, account controls, and payment prompts.",
    related: ["trending-cam-models", "online-now-cam-models", "featured-cam-models"],
    best: ["free-cam-sites", "verified-cam-sites"],
    guides: ["how-to-choose-a-cam-site", "are-cam-sites-safe"],
    compareLinks: ["chaturbate-vs-stripchat"],
  },
  {
    slug: "featured-cam-models",
    label: "Featured Cam Models",
    h1: "Featured Cam Models",
    group: "Popular model categories",
    sortMode: "quality",
    angle: "curated-feeling discovery based on live preview quality rather than fake editorial rankings",
    intent: "Use featured cam model previews to compare polished room cards, HD signals, platform style, and whether the browsing path feels clear before signup.",
    compare: [
      "Whether featured-style previews give enough context before opening a room.",
      "How HD, mobile, language, and room status signals support the first decision.",
      "Whether related categories help you narrow by need instead of chasing rankings.",
    ],
    availability: "Featured ordering is a preview quality sort, not a review score or platform ranking.",
    safety: "Use featured previews as a starting point, then inspect privacy, payment, and signup details directly.",
    related: ["popular-cam-models", "trending-cam-models", "verified-cam-models"],
    best: ["verified-cam-sites", "hd-cam-sites"],
    guides: ["verified-cam-models", "how-to-choose-a-cam-site"],
    compareLinks: ["livejasmin-vs-chaturbate"],
  },
];

const fallbackCta = {
  primaryLabel: "Compare Live Cam Options",
  primaryHref: "/go/signup" as const,
  secondaryLabel: "View Live Models",
  secondaryHref: "/go/random" as const,
};

function buildPage(seed: CategorySeed): CategoryPageData {
  const path = `/categories/${seed.slug}`;
  const title = `${seed.label} | WebcamSex.me`;
  const description = `Browse ${seed.label.toLowerCase()} with live model previews and compare platform filters, free access, mobile usability, HD quality, privacy signals, and signup expectations before joining.`;

  return {
    slug: seed.slug,
    path,
    label: seed.label,
    h1: seed.h1,
    title,
    description,
    group: seed.group,
    feedHint: seed.feedHint,
    sortMode: seed.sortMode,
    intro: [
      seed.intent,
      `This category is built for practical cam model discovery: compare ${seed.angle}, then use related best cam site and guide pages when you need more context before signing up.`,
    ],
    comparisonAngle: seed.angle,
    comparePoints: seed.compare,
    availabilityNote: seed.availability,
    safetyNote: seed.safety,
    relatedCategories: seed.related,
    relatedBest: seed.best,
    relatedGuides: seed.guides,
    relatedCompare: seed.compareLinks,
    cta: {
      title: `Compare ${seed.label.toLowerCase()} before choosing a platform`,
      body: "Use the live preview as a starting point, then compare privacy, mobile usability, free access, verified model signals, and signup expectations before opening a platform route.",
      primaryLabel: seed.primaryLabel ?? fallbackCta.primaryLabel,
      primaryHref: seed.primaryHref ?? fallbackCta.primaryHref,
      secondaryLabel: seed.secondaryLabel ?? fallbackCta.secondaryLabel,
      secondaryHref: fallbackCta.secondaryHref,
    },
    faqs: [
      {
        question: `What should I compare on ${seed.label.toLowerCase()} pages?`,
        answer:
          "Compare live availability, profile clarity, platform filters, free preview access, mobile usability, HD signals, privacy pages, and when signup or payment prompts appear.",
      },
      {
        question: `Are ${seed.label.toLowerCase()} results always exact?`,
        answer:
          "No. Live feed fields vary by platform and model profile. WebcamSex.me uses the best available feed signals and avoids pretending a filter is exact when the data does not prove it.",
      },
      {
        question: "Why compare platforms before opening a live room?",
        answer:
          "Different platforms handle browsing, private features, payment prompts, mobile layouts, and privacy information differently, so comparison helps you choose with more context.",
      },
    ],
  };
}

export const categoryPages = Object.fromEntries(
  seeds.map((seed) => [seed.slug, buildPage(seed)]),
) as Record<CategoryPageSlug, CategoryPageData>;

export const categoryPageLinks: SiteLink[] = categoryPageOrder.map((slug) => {
  const page = categoryPages[slug];

  return {
    href: page.path,
    label: page.label,
    description: page.description,
  };
});

export const categoryGroups: {
  title: CategoryGroup;
  description: string;
  slugs: CategoryPageSlug[];
}[] = [
  {
    title: "Popular model categories",
    description: "Start with broad live discovery paths such as online now, trending, popular, featured, and new model previews.",
    slugs: ["live-cam-models", "online-now-cam-models", "popular-cam-models", "trending-cam-models", "featured-cam-models", "new-cam-models"],
  },
  {
    title: "Appearance-based categories",
    description: "Use appearance and style categories as browsing aids while still checking platform filters and privacy signals.",
    slugs: [
      "blonde-cam-models",
      "brunette-cam-models",
      "redhead-cam-models",
      "asian-cam-models",
      "latina-cam-models",
      "ebony-cam-models",
      "milf-cam-models",
      "mature-cam-models",
      "petite-cam-models",
      "curvy-cam-models",
      "tattooed-cam-models",
      "fitness-cam-models",
      "cosplay-cam-models",
      "gamer-cam-models",
      "college-cam-models",
      "couple-cam-models",
    ],
  },
  {
    title: "Platform feature categories",
    description: "Compare practical platform signals such as verified profiles, private access, premium flow, free previews, and HD quality.",
    slugs: ["verified-cam-models", "private-show-models", "premium-cam-models", "free-preview-cam-models", "hd-cam-models"],
  },
  {
    title: "Device and viewing categories",
    description: "Choose a viewing path around phone, tablet, or desktop usability before you commit to a site.",
    slugs: ["mobile-cam-models", "tablet-friendly-cam-models", "desktop-cam-models"],
  },
  {
    title: "Region/language style categories",
    description: "Use regional and language categories as flexible discovery paths, not fixed guarantees.",
    slugs: [
      "english-speaking-cam-models",
      "european-cam-models",
      "american-cam-models",
      "british-cam-models",
      "french-cam-models",
      "spanish-cam-models",
      "italian-cam-models",
      "german-cam-models",
      "brazilian-cam-models",
    ],
  },
  {
    title: "Comparison-focused categories",
    description: "Use these pages when model browsing is part of a broader decision about free access, private options, and beginner-friendly platforms.",
    slugs: ["chatty-cam-models", "free-preview-cam-models", "premium-cam-models", "verified-cam-models"],
  },
];

export function getCategoryPage(slug: string) {
  if (slug in categoryPages) {
    return categoryPages[slug as CategoryPageSlug];
  }

  return null;
}

export function getRelatedCategoryLinks(page: CategoryPageData): SiteLink[] {
  return page.relatedCategories.map((slug) => {
    const categoryPage = categoryPages[slug as CategoryPageSlug];

    return {
      href: categoryPage.path,
      label: categoryPage.label,
      description: categoryPage.description,
    };
  });
}

export function getCategoryCards(slugs: readonly string[]): SiteLink[] {
  return slugs.map((slug) => {
    const categoryPage = categoryPages[slug as CategoryPageSlug];

    return {
      href: categoryPage.path,
      label: categoryPage.label,
      description: categoryPage.description,
    };
  });
}
