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
    ],
  },
  {
    title: "Models",
    links: [
      { href: "/models", label: "Live Models" },
      { href: "/categories", label: "Categories" },
      { href: "/categories/verified-cam-models", label: "Verified Cam Models" },
      { href: "/categories/mobile-cam-models", label: "Mobile Models" },
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
      { href: "/become-a-webcam-model", label: "Become a Model" },
    ],
  },
];

const friendSites = [
  { href: "https://sessochat.net", label: "Sesso Chat" },
  { href: "https://webcamsex.site", label: "Webcam Sex" },
  { href: "https://modellewebcam.com", label: "Modelle Webcam" },
  { href: "https://livecamitalia.it", label: "Live Cam Italia" },
  { href: "https://webcamsex.co.za", label: "Webcam Sex South Africa" },
];

export default function Footer() {
  const linkClass =
    "block whitespace-nowrap text-sm leading-5 text-white/62 transition hover:text-white";
  const headingClass =
    "text-[11px] font-semibold uppercase leading-4 tracking-[0.18em] text-[#8FB7FF]";

  return (
    <footer className="mt-auto border-t border-white/10 bg-[#030305] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-12">
        <div className="rounded-[1.25rem] border border-white/10 bg-[#0b0b12] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.34)] md:p-6">
          <div className="grid items-start gap-x-7 gap-y-7 border-b border-white/10 pb-7 md:grid-cols-3 lg:grid-cols-[minmax(220px,0.95fr)_repeat(3,minmax(0,1fr))] xl:grid-cols-[minmax(210px,0.9fr)_repeat(5,minmax(118px,1fr))_minmax(154px,1.2fr)]">
            <div className="md:col-span-3 lg:col-span-1 xl:col-span-1">
              <Link
                href="/"
                className="inline-flex items-center gap-3 text-xl font-semibold text-white"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-[#7C5CFF]/45 bg-[linear-gradient(135deg,rgba(124,92,255,0.5),rgba(0,171,255,0.18))] text-base">
                  W
                </span>
                {SITE_NAME}
              </Link>
              <p className="mt-4 max-w-[18rem] text-sm leading-6 text-white/62">
                {SITE_TAGLINE}. A practical decision hub for comparing live cam
                platforms by access style, privacy needs, mobile use, model
                availability, and overall fit.
              </p>
              <p className="mt-3 max-w-[18rem] text-sm leading-6 text-white/48">
                Adults only. Independent comparison and decision guidance.
              </p>
            </div>

            {footerGroups.map((group) => (
              <div key={group.title} className="min-w-0">
                <h2 className={headingClass}>{group.title}</h2>
                <div className="mt-3 grid gap-2.5">
                  {group.links.map((link) => (
                    <Link key={link.href} href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="min-w-0">
              <h2 className={headingClass}>Friend Sites</h2>
              <div className="mt-3 grid gap-2.5">
                {friendSites.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={linkClass}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2 text-sm leading-6 text-white/45 sm:text-left md:flex-row md:items-center md:justify-between">
            <p>Compare by user need before opening any platform route.</p>
            <p>{SITE_NAME}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
