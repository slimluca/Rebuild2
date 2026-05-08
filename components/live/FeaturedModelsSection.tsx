import { Suspense } from "react";

import LiveModelGrid, {
  LiveModelGridSkeleton,
  type LiveModelSortMode,
} from "@/components/live/LiveModelGrid";

interface FeaturedModelsSectionProps {
  title?: string;
  description?: string;
  seed: string;
  limit?: number;
  compact?: boolean;
  categoryHint?: string;
  sortMode?: LiveModelSortMode;
}

export default function FeaturedModelsSection({
  title = "Explore Live Models While You Compare Platforms",
  description = "Use live room previews as one current browsing signal while you compare platform fit, signup expectations, mobile usability, and privacy comfort.",
  seed,
  limit = 4,
  compact = false,
  categoryHint,
  sortMode,
}: FeaturedModelsSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 pt-2 md:pb-10">
      <div className={compact ? "rounded-3xl border border-white/10 bg-white/[0.035] p-5 md:p-6" : ""}>
        <div className="mb-5">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB7FF]">
            Live preview
          </div>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-white/66">
            {description}
          </p>
        </div>
        <Suspense fallback={<LiveModelGridSkeleton count={limit} />}>
          <LiveModelGrid
            limit={limit}
            seed={seed}
            categoryHint={categoryHint}
            sortMode={sortMode}
          />
        </Suspense>
      </div>
    </section>
  );
}
