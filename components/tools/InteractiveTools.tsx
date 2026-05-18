"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const chooserOptions = [
  {
    id: "free",
    label: "I want free preview access",
    href: "/best/free-cam-sites",
    title: "Free preview focused",
    body: "Start with free cam site guidance and compare preview depth, upgrade prompts, and no-card browsing.",
  },
  {
    id: "private",
    label: "I want private cam options",
    href: "/best/private-cam-sites",
    title: "Private experience focused",
    body: "Compare private cam sites by user control, payment clarity, verified model signals, and privacy comfort.",
  },
  {
    id: "mobile",
    label: "I am browsing on mobile",
    href: "/best/mobile-cam-sites",
    title: "Mobile usability focused",
    body: "Check responsive layout, video behavior, clear prompts, and device privacy before joining.",
  },
  {
    id: "nosignup",
    label: "I want no signup viewing first",
    href: "/best/cam-sites-no-signup",
    title: "No-signup viewing focused",
    body: "Compare what can be previewed before account creation and where registration becomes useful.",
  },
  {
    id: "nocard",
    label: "I want to avoid entering a credit card before browsing",
    href: "/best/cam-sites-without-credit-card",
    title: "No-card browsing focused",
    body: "Review free browsing, billing prompt timing, payment terms, and no-card expectations.",
  },
  {
    id: "verified",
    label: "Verified model signals are important",
    href: "/best/verified-cam-sites",
    title: "Verified signal focused",
    body: "Compare platform verification language, profile clarity, and model discovery signals without treating them as guarantees.",
  },
  {
    id: "beginner",
    label: "I am new to cam sites",
    href: "/best/cam-sites-for-beginners",
    title: "Beginner friendly route",
    body: "Start with clear navigation, privacy basics, payment awareness, and calmer signup expectations.",
  },
];

export function CamSiteChooser() {
  const [selected, setSelected] = useState<string[]>(["free"]);

  const results = useMemo(() => {
    const matches = chooserOptions.filter((option) => selected.includes(option.id));
    return matches.length > 0 ? matches : chooserOptions.slice(0, 3);
  }, [selected]);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
        Interactive chooser
      </div>
      <h2 className="mt-3 text-3xl font-semibold text-white">
        Choose the needs that matter most
      </h2>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {chooserOptions.map((option) => (
          <label
            key={option.id}
            className="flex cursor-pointer gap-3 rounded-2xl border border-white/10 bg-black/24 p-4 text-sm leading-6 text-white/72 transition hover:border-[#8FB7FF]/36"
          >
            <input
              type="checkbox"
              checked={selected.includes(option.id)}
              onChange={(event) => {
                setSelected((current) =>
                  event.target.checked
                    ? [...current, option.id]
                    : current.filter((id) => id !== option.id),
                );
              }}
              className="mt-1 size-4 accent-[#7C5CFF]"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {results.map((result) => (
          <Link
            key={result.href}
            href={result.href}
            className="rounded-2xl border border-[#8FB7FF]/18 bg-[#8FB7FF]/8 p-4 transition hover:border-[#8FB7FF]/42 hover:bg-[#8FB7FF]/12"
          >
            <h3 className="text-base font-semibold text-white">{result.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/64">{result.body}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

const selectorResults = {
  free: {
    title: "Free preview focused",
    body: "Start with free cam site and no-signup guidance when you want public browsing before account or payment steps.",
    href: "/best/free-cam-sites",
  },
  private: {
    title: "Private experience focused",
    body: "Start with private cam site guidance when control, paid feature clarity, and verified platform signals matter more.",
    href: "/best/private-cam-sites",
  },
  balanced: {
    title: "Balanced browsing route",
    body: "Use the private-vs-free comparison when you want to understand both public previewing and private feature expectations.",
    href: "/compare/private-cam-sites-vs-free-cam-sites",
  },
  beginner: {
    title: "Beginner friendly route",
    body: "Start with beginner pages if you want a slower path through layout, privacy basics, free previews, and payment awareness.",
    href: "/best/cam-sites-for-beginners",
  },
};

export function PrivateFreeSelector() {
  const [value, setValue] = useState<keyof typeof selectorResults>("balanced");
  const result = selectorResults[value];

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
        Selector
      </div>
      <h2 className="mt-3 text-3xl font-semibold text-white">
        Pick the browsing style closest to your comfort level
      </h2>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {Object.entries(selectorResults).map(([key, option]) => (
          <label
            key={key}
            className="flex cursor-pointer gap-3 rounded-2xl border border-white/10 bg-black/24 p-4 text-sm leading-6 text-white/72 transition hover:border-[#8FB7FF]/36"
          >
            <input
              type="radio"
              name="private-free-selector"
              checked={value === key}
              onChange={() => setValue(key as keyof typeof selectorResults)}
              className="mt-1 size-4 accent-[#7C5CFF]"
            />
            <span>{option.title}</span>
          </label>
        ))}
      </div>
      <Link
        href={result.href}
        className="mt-6 block rounded-2xl border border-[#8FB7FF]/20 bg-[#8FB7FF]/10 p-5 transition hover:border-[#8FB7FF]/42 hover:bg-[#8FB7FF]/14"
      >
        <h3 className="text-xl font-semibold text-white">{result.title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/64">{result.body}</p>
      </Link>
    </section>
  );
}

const categoryGroups = {
  verified: [
    { href: "/categories/verified-cam-models", label: "Verified Cam Models" },
    { href: "/best/verified-cam-sites", label: "Verified Cam Sites" },
  ],
  hd: [
    { href: "/categories/hd-cam-models", label: "HD Cam Models" },
    { href: "/best/hd-cam-sites", label: "HD Cam Sites" },
  ],
  mobile: [
    { href: "/categories/mobile-cam-models", label: "Mobile Cam Models" },
    { href: "/best/mobile-cam-sites", label: "Mobile Cam Sites" },
  ],
  private: [
    { href: "/categories/private-show-models", label: "Private Show Models" },
    { href: "/best/private-cam-sites", label: "Private Cam Sites" },
  ],
  current: [
    { href: "/categories/new-cam-models", label: "New Cam Models" },
    { href: "/categories/popular-cam-models", label: "Popular Cam Models" },
    { href: "/categories/trending-cam-models", label: "Trending Cam Models" },
  ],
  appearance: [
    { href: "/categories/blonde-cam-models", label: "Blonde Cam Models" },
    { href: "/categories/brunette-cam-models", label: "Brunette Cam Models" },
    { href: "/categories/latina-cam-models", label: "Latina Cam Models" },
    { href: "/categories/asian-cam-models", label: "Asian Cam Models" },
  ],
};

export function ModelCategoryFinder() {
  const [value, setValue] = useState<keyof typeof categoryGroups>("verified");
  const results = categoryGroups[value];

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
        Category finder
      </div>
      <h2 className="mt-3 text-3xl font-semibold text-white">
        Choose a live model browsing intent
      </h2>
      <select
        value={value}
        onChange={(event) => setValue(event.target.value as keyof typeof categoryGroups)}
        className="mt-5 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm font-semibold text-white outline-none ring-0 focus:border-[#8FB7FF]/50 md:max-w-md"
      >
        <option value="verified">Verified models</option>
        <option value="hd">HD models</option>
        <option value="mobile">Mobile browsing</option>
        <option value="private">Private show models</option>
        <option value="current">New, popular, or trending models</option>
        <option value="appearance">Appearance categories</option>
      </select>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {[{ href: "/models", label: "Live Models" }, ...results].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-2xl border border-[#8FB7FF]/18 bg-[#8FB7FF]/8 p-4 text-sm font-semibold text-white transition hover:border-[#8FB7FF]/42 hover:bg-[#8FB7FF]/12"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-white/60">
        Live availability can change. Use these category links as browsing
        paths, not fixed availability claims.
      </p>
    </section>
  );
}
