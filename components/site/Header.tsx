import Link from "next/link";

import { primaryNavigation } from "@/lib/site-navigation";
import { SITE_NAME } from "@/lib/seo";

const navLinkClass =
  "text-sm font-medium text-white/72 transition hover:text-white xl:text-base";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 shadow-[0_18px_54px_rgba(0,0,0,0.38)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex min-h-[76px] items-center gap-4">
          <Link
            href="/"
            className="group inline-flex shrink-0 items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-[#7C5CFF]/45 bg-[#7C5CFF]/16 text-lg font-semibold text-white shadow-[0_0_28px_rgba(124,92,255,0.28)]">
              W
            </span>
            <span className="grid">
              <span className="text-lg font-semibold tracking-[0.01em] text-white">
                {SITE_NAME}
              </span>
              <span className="hidden text-xs uppercase tracking-[0.16em] text-[#8FB7FF] sm:block">
                Compare before you join
              </span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-5 lg:flex xl:gap-7">
            {primaryNavigation.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-4">
            <Link
              href="/go/signup"
              prefetch={false}
              className="whitespace-nowrap rounded-full bg-[#7C5CFF] px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(124,92,255,0.34)] transition hover:bg-[#8B70FF]"
            >
              Compare & Join
            </Link>
            <Link
              href="/go/random"
              prefetch={false}
              className="hidden whitespace-nowrap rounded-full border border-[#8FB7FF]/30 bg-[#8FB7FF]/10 px-4 py-2 text-sm font-semibold text-[#C8DAFF] transition hover:border-[#8FB7FF]/48 hover:bg-[#8FB7FF]/14 md:inline-flex"
            >
              Live Preview
            </Link>
          </div>
        </div>

        <nav className="grid grid-cols-2 gap-2 border-t border-white/10 py-3 sm:flex sm:flex-wrap lg:hidden">
          {primaryNavigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/10 px-3 py-2 text-center text-xs font-medium text-white/72 transition hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
