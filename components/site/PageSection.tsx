import type { ReactNode } from "react";

interface PageSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export default function PageSection({
  eyebrow,
  title,
  description,
  children,
}: PageSectionProps) {
  return (
    <section className="rounded-[1.25rem] border border-white/10 bg-[#0d0d14] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.22)] md:p-6">
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-normal text-white md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-4xl text-base leading-7 text-white/68 md:text-lg">
          {description}
        </p>
      ) : null}
      <div className="mt-5 space-y-4 text-base leading-7 text-white/68 [&_a]:text-[#8FB7FF] [&_a]:transition [&_a:hover]:text-[#C8DAFF]">
        {children}
      </div>
    </section>
  );
}
