import Link from "next/link";

import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo";

const footerGroups = [
  {
    title: "Compare",
    links: [
      { href: "/best", label: "Best" },
      { href: "/compare", label: "Compare" },
      { href: "/platforms", label: "Platforms" },
      { href: "/alternatives", label: "Alternatives" },
      { href: "/become-a-webcam-model", label: "Become a Model" },
    ],
  },
  {
    title: "Models",
    links: [
      { href: "/models", label: "Models" },
      { href: "/categories", label: "Categories" },
      { href: "/categories/live-cam-models", label: "Live Cam Models" },
      { href: "/categories/verified-cam-models", label: "Verified Cam Models" },
      { href: "/categories/hd-cam-models", label: "HD Cam Models" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/guides", label: "Guides" },
      { href: "/resources", label: "Resources" },
      { href: "/features", label: "Features" },
      { href: "/answers", label: "Answers" },
      { href: "/site-map", label: "Site Map" },
    ],
  },
  {
    title: "Tools",
    links: [
      { href: "/tools", label: "Tools" },
      { href: "/tools/cam-site-chooser", label: "Cam Site Chooser" },
      { href: "/tools/privacy-checklist", label: "Privacy Checklist" },
      { href: "/tools/model-category-finder", label: "Model Category Finder" },
    ],
  },
  {
    title: "Trust",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/editorial-policy", label: "Editorial Policy" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-of-service", label: "Terms of Service" },
    ],
  },
];

const friendSites = [
  { href: "https://sessochat.net", label: "Sesso Chat" },
  { href: "https://webcamsex.site", label: "Webcam Sex" },
  { href: "https://modellewebcam.com", label: "Modelle Webcam" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#030305] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.36)] md:p-7">
          <div className="grid gap-8 border-b border-white/10 pb-8 xl:grid-cols-[1.05fr_2fr]">
            <div>
              <Link href="/" className="inline-flex items-center gap-3 text-2xl font-semibold text-white">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-[#7C5CFF]/45 bg-[linear-gradient(135deg,rgba(124,92,255,0.5),rgba(0,171,255,0.18))] text-lg">
                  W
                </span>
                {SITE_NAME}
              </Link>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/62 md:text-base">
                {SITE_TAGLINE}. A practical decision hub for comparing live cam
                platforms by access style, privacy needs, mobile use,
                verification standards, model availability, and overall fit.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/48">
                Adults only. Independent comparison and decision guidance.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {footerGroups.map((group) => (
                <div key={group.title}>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
                    {group.title}
                  </h2>
                  <div className="mt-4 grid gap-2.5">
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-white/66 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
                  Friend Sites
                </h2>
                <div className="mt-4 grid gap-2.5">
                  {friendSites.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-sm text-white/66 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
            <p>Compare by user need before opening any platform route.</p>
            <p>{SITE_NAME}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
