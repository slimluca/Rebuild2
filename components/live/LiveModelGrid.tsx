import Image from "next/image";
import Link from "next/link";

import { getLiveJasminModels, type LiveJasminModel } from "@/lib/livejasmin/feed";

const STATUS_LABELS: Record<string, string> = {
  free_chat: "Live now",
  group_show: "Group show",
  private_chat: "Private session",
  member_chat: "Members only",
  vip_show: "VIP session",
  offline: "Offline",
};

interface LiveModelGridProps {
  limit?: number;
  seed?: string;
  categoryHint?: string;
  sortMode?: LiveModelSortMode;
}

export type LiveModelSortMode = "default" | "quality" | "newest" | "trending" | "popular";

function hashString(value: string) {
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function getPrimaryImage(model: LiveJasminModel) {
  return (
    model.profilePictureUrl?.size800x600 ??
    model.profilePictureUrl?.size320x240 ??
    null
  );
}

function getStatusLabel(status: string) {
  return (
    STATUS_LABELS[status] ??
    status
      .split("_")
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join(" ")
  );
}

function getDecisionCue(model: LiveJasminModel) {
  if (model.isMobileStream) {
    return "Mobile stream";
  }

  if ((model.details?.streamQuality ?? 0) >= 80) {
    return "HD signal";
  }

  if (model.isNewbie) {
    return "New performer";
  }

  return "Live preview";
}

function getSubcopy(model: LiveJasminModel) {
  if (model.details?.languages?.length) {
    return `Languages: ${model.details.languages
      .slice(0, 2)
      .map((language) => language.charAt(0).toUpperCase() + language.slice(1))
      .join(", ")}`;
  }

  if (model.category) {
    return `${model.category} room on LiveJasmin`;
  }

  return "Live room available through the platform feed";
}

function normalize(value: unknown) {
  return typeof value === "string" ? value.toLowerCase() : "";
}

function getPersonText(model: LiveJasminModel) {
  return (model.persons ?? [])
    .map((person) =>
      [
        person.ethnicity,
        person.country,
        person.body?.hairColor,
        person.body?.build,
      ]
        .filter(Boolean)
        .join(" "),
    )
    .join(" ");
}

function getModelSearchText(model: LiveJasminModel) {
  return normalize(
    [
      model.category,
      model.details?.about,
      ...(model.details?.appearances ?? []),
      ...(model.details?.languages ?? []),
      getPersonText(model),
    ].join(" "),
  );
}

function getModelAge(model: LiveJasminModel) {
  const parsedAge = Number.parseInt(model.persons?.[0]?.age ?? "", 10);

  return Number.isFinite(parsedAge) ? parsedAge : null;
}

function hasCountry(model: LiveJasminModel, countries: string[]) {
  const text = getModelSearchText(model);

  return countries.some((country) => text.includes(country));
}

function matchesCategoryHint(model: LiveJasminModel, categoryHint?: string) {
  if (!categoryHint) {
    return true;
  }

  const hint = normalize(categoryHint);
  const text = getModelSearchText(model);
  const age = getModelAge(model);
  const status = normalize(model.status);

  switch (hint) {
    case "blonde":
    case "brunette":
    case "redhead":
      return text.includes(hint);
    case "asian":
      return text.includes("asian");
    case "latina":
      return text.includes("latin") || text.includes("latina");
    case "ebony":
      return text.includes("ebony") || text.includes("black") || text.includes("african");
    case "milf":
      return text.includes("milf") || (age !== null && age >= 30);
    case "mature":
      return text.includes("mature") || (age !== null && age >= 35);
    case "petite":
      return text.includes("petite") || text.includes("slim");
    case "curvy":
      return text.includes("curvy") || text.includes("bbw");
    case "tattooed":
      return text.includes("tattoo");
    case "cosplay":
    case "gamer":
    case "college":
    case "fitness":
    case "chatty":
      return text.includes(hint);
    case "couple":
      return text.includes("couple") || (model.persons?.length ?? 0) > 1;
    case "european":
      return hasCountry(model, [
        "france",
        "spain",
        "italy",
        "germany",
        "britain",
        "united kingdom",
        "europe",
      ]);
    case "american":
      return hasCountry(model, ["united states", "usa", "america"]);
    case "british":
      return hasCountry(model, ["britain", "united kingdom", "uk", "england"]);
    case "french":
      return hasCountry(model, ["france", "french"]);
    case "spanish":
      return hasCountry(model, ["spain", "spanish"]);
    case "italian":
      return hasCountry(model, ["italy", "italian"]);
    case "german":
      return hasCountry(model, ["germany", "german"]);
    case "brazilian":
      return hasCountry(model, ["brazil", "brazilian"]);
    case "english-speaking":
      return (model.details?.languages ?? []).some((language) =>
        normalize(language).includes("english"),
      );
    case "free-preview":
      return status === "free_chat";
    case "premium":
    case "private":
      return ["private_chat", "group_show", "member_chat", "vip_show"].includes(status);
    case "new":
      return Boolean(model.isNewbie);
    case "hd":
      return (model.details?.streamQuality ?? 0) >= 80;
    case "mobile":
      return Boolean(model.isMobileStream);
    case "online-now":
      return status !== "offline";
    default:
      return true;
  }
}

function sortForPreview(
  models: LiveJasminModel[],
  seed: string,
  sortMode: LiveModelSortMode = "default",
) {
  return [...models].sort((left, right) => {
    if (sortMode === "newest") {
      const newbieDelta = Number(Boolean(right.isNewbie)) - Number(Boolean(left.isNewbie));

      if (newbieDelta !== 0) {
        return newbieDelta;
      }
    }

    if (sortMode === "popular" || sortMode === "trending") {
      const statusOrder = ["free_chat", "group_show", "private_chat", "member_chat", "vip_show"];
      const leftStatus = statusOrder.indexOf(left.status);
      const rightStatus = statusOrder.indexOf(right.status);
      const statusDelta =
        (rightStatus === -1 ? 0 : statusOrder.length - rightStatus) -
        (leftStatus === -1 ? 0 : statusOrder.length - leftStatus);

      if (statusDelta !== 0) {
        return statusDelta;
      }
    }

    const leftQuality = left.details?.streamQuality ?? 0;
    const rightQuality = right.details?.streamQuality ?? 0;
    const qualityDelta = rightQuality - leftQuality;

    if (qualityDelta !== 0) {
      return qualityDelta;
    }

    return (
      hashString(`${seed}:${left.performerId}`) -
      hashString(`${seed}:${right.performerId}`)
    );
  });
}

function selectModels({
  models,
  limit,
  seed,
  categoryHint,
  sortMode,
}: {
  models: LiveJasminModel[];
  limit: number;
  seed: string;
  categoryHint?: string;
  sortMode?: LiveModelSortMode;
}) {
  const matchedModels = categoryHint
    ? models.filter((model) => matchesCategoryHint(model, categoryHint))
    : models;
  const source = matchedModels.length ? matchedModels : models;

  return sortForPreview(source, seed, sortMode).slice(0, limit);
}

function LiveModelCard({
  model,
}: {
  model: LiveJasminModel;
}) {
  const imageUrl = getPrimaryImage(model);
  const performerRoute = `/go/model/${encodeURIComponent(model.performerId)}`;
  const performerHref = {
    pathname: performerRoute,
    query: {
      url: model.chatRoomUrl,
    },
  };

  return (
    <Link
      href={performerHref}
      prefetch={false}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#7C5CFF]/24 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.035))] shadow-[0_22px_70px_rgba(0,0,0,0.3),0_0_0_1px_rgba(143,183,255,0.08)] transition hover:-translate-y-1 hover:border-[#8FB7FF]/46 hover:bg-white/[0.07]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[linear-gradient(160deg,#17132A_0%,#080812_56%,#030305_100%)]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${model.displayName} live room preview`}
            fill
            sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-white/45">
            Preview unavailable
          </div>
        )}

        <div className="absolute left-3 top-3 rounded-full border border-[#8FB7FF]/22 bg-black/58 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C8DAFF] backdrop-blur">
          {getStatusLabel(model.status)}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#030305] via-[#030305]/72 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col space-y-2 p-3.5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-white">{model.displayName}</h3>
          <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-2 py-1 text-[11px] uppercase tracking-[0.12em] text-white/56">
            {getDecisionCue(model)}
          </span>
        </div>
        <p className="line-clamp-2 text-sm leading-5 text-white/63">{getSubcopy(model)}</p>
        <div className="mt-auto pt-2 text-sm font-semibold text-[#8FB7FF] transition group-hover:text-[#C8DAFF]">
          Open live room
        </div>
      </div>
    </Link>
  );
}

export function LiveModelGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl border border-[#7C5CFF]/22 bg-white/[0.045]"
        >
          <div className="aspect-[4/5] animate-pulse bg-gradient-to-b from-[#17132A] to-[#080812]" />
          <div className="space-y-3 p-4">
            <div className="h-4 w-2/3 animate-pulse rounded bg-white/10" />
            <div className="h-4 w-full animate-pulse rounded bg-white/8" />
            <div className="h-4 w-1/3 animate-pulse rounded bg-white/10" />
          </div>
        </div>
      ))}
    </div>
  );
}

function LiveModelGridFallback() {
  return (
    <div className="rounded-[1.6rem] border border-[#7C5CFF]/24 bg-white/[0.045] p-5 text-white/70 md:p-6">
      <p className="text-base font-semibold text-white">
        Live model previews are temporarily unavailable.
      </p>
      <p className="mt-2 text-sm leading-6 text-white/62">
        The comparison hub still works while the live feed refreshes. You can
        open an active room through the internal redirect route.
      </p>
      <Link
        href="/go/random"
        prefetch={false}
        className="mt-5 inline-flex rounded-full border border-[#8FB7FF]/32 bg-[#8FB7FF]/10 px-4 py-2 text-sm font-semibold text-[#C8DAFF] transition hover:border-[#8FB7FF]/50 hover:bg-[#8FB7FF]/15"
      >
        Open Live Preview
      </Link>
    </div>
  );
}

export default async function LiveModelGrid({
  limit = 8,
  seed = "webcamsex-me-live-preview",
  categoryHint,
  sortMode = "default",
}: LiveModelGridProps) {
  let selectedModels: LiveJasminModel[];

  try {
    const models = await getLiveJasminModels();
    selectedModels = selectModels({
      models,
      limit,
      seed,
      categoryHint,
      sortMode,
    });

    if (!selectedModels.length) {
      throw new Error("LiveJasmin feed returned no usable models");
    }
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Failed to render LiveJasmin model grid", error);
    }

    return <LiveModelGridFallback />;
  }

  return (
    <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {selectedModels.map((model) => (
        <LiveModelCard key={model.uniqueModelId} model={model} />
      ))}
    </div>
  );
}
