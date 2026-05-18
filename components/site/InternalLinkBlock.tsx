import Link from "next/link";

export interface InternalLinkItem {
  href: string;
  label: string;
  description?: string;
}

interface InternalLinkBlockProps {
  eyebrow?: string;
  title: string;
  description?: string;
  links: InternalLinkItem[];
  columns?: "three" | "four";
}

export default function InternalLinkBlock({
  eyebrow = "Popular paths",
  title,
  description,
  links,
  columns = "four",
}: InternalLinkBlockProps) {
  const gridClass =
    columns === "three"
      ? "mt-5 grid items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-3"
      : "mt-5 grid items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-4";

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-4xl text-base leading-7 text-white/66">
          {description}
        </p>
      ) : null}
      <div className={gridClass}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="h-full rounded-2xl border border-white/10 bg-black/24 p-4 transition hover:border-[#8FB7FF]/36 hover:bg-white/[0.045]"
          >
            <h3 className="text-base font-semibold text-white">{link.label}</h3>
            {link.description ? (
              <p className="mt-2 text-sm leading-6 text-white/60">
                {link.description}
              </p>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
