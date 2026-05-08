export interface SiteLink {
  href: string;
  label: string;
  description?: string;
}

export const primaryNavigation: SiteLink[] = [
  {
    href: "/best",
    label: "Best Cam Sites",
    description: "Compare live cam site categories by user need.",
  },
  {
    href: "/resources#compare-sites",
    label: "Compare Sites",
    description: "Compare platforms by privacy, access, mobile flow, and trust.",
  },
  {
    href: "/resources#guides",
    label: "Guides",
    description: "Practical explainers for choosing live cam platforms.",
  },
  {
    href: "/#live-models",
    label: "Live Models",
    description: "Preview current model availability while comparing platforms.",
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
  { href: "/resources", label: "Resources" },
  { href: "/site-map", label: "Site Map" },
];

export const phaseOneRoutes: SiteLink[] = [
  { href: "/", label: "Home" },
  ...footerLinks,
];
