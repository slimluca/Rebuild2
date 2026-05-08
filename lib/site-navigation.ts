export interface SiteLink {
  href: string;
  label: string;
  description?: string;
}

export const primaryNavigation: SiteLink[] = [
  {
    href: "/best",
    label: "Best",
    description: "Compare live cam site categories by user need.",
  },
  {
    href: "/compare",
    label: "Compare",
    description: "Compare platforms by privacy, access, mobile flow, and trust.",
  },
  {
    href: "/guides",
    label: "Guides",
    description: "Practical explainers for choosing live cam platforms.",
  },
  {
    href: "/models",
    label: "Models",
    description: "Preview current model availability while comparing platforms.",
  },
  {
    href: "/categories",
    label: "Categories",
    description: "Browse live model categories by practical discovery need.",
  },
  {
    href: "/resources",
    label: "Resources",
    description: "Editorial resources, policies, and navigation shortcuts.",
  },
];

export const footerLinks: SiteLink[] = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/editorial-policy", label: "Editorial Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/models", label: "Models" },
  { href: "/categories", label: "Categories" },
  { href: "/resources", label: "Resources" },
  { href: "/site-map", label: "Site Map" },
];

export const phaseOneRoutes: SiteLink[] = [
  { href: "/", label: "Home" },
  ...footerLinks,
];
