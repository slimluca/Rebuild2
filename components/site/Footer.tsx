import Link from "next/link";

import { footerLinks, primaryNavigation } from "@/lib/site-navigation";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#030305] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.028] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.34)] md:p-8">
          <div className="grid gap-8 border-b border-white/10 pb-8 lg:grid-cols-[1.2fr_2fr]">
            <div>
              <Link href="/" className="text-2xl font-semibold text-white">
                {SITE_NAME}
              </Link>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/62 md:text-base">
                {SITE_TAGLINE}. Built as a practical decision hub for comparing
                live cam platforms by access style, privacy needs, mobile use,
                verification standards, and overall fit.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
                  Explore
                </h2>
                <div className="mt-4 grid gap-2.5">
                  {primaryNavigation.map((link) => (
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

              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
                  Site
                </h2>
                <div className="mt-4 grid gap-2.5">
                  {footerLinks.map((link) => (
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
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p>Adults only. Independent comparison and decision guidance.</p>
              <p className="max-w-2xl leading-6">
                Looking for an Italian-language webcam chat guide? Visit{" "}
                <a
                  href="https://sessochat.net"
                  target="_blank"
                  rel="noopener"
                  className="text-[#8FB7FF] transition hover:text-[#C8DAFF]"
                >
                  SessoChat.net
                </a>{" "}
                for Italian editorial guides, webcam chat topics, and live
                model discovery.
              </p>
            </div>
            <p>{SITE_NAME}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
