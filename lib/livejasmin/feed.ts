const LIVEJASMIN_FEED_URL = "https://atwmcd.com/api/model/feed";

const LIVEJASMIN_FEED_PARAMS = {
  psId: "affil28",
  accessKey: "0861d4a47cf6a25b6e7c5406352b2f92",
  siteId: "jsm",
  responseFormat: "json",
  imageSizes: "320x240,800x600",
  category: "girl",
  extendedDetails: "1",
  showOffline: "0",
} as const;

const LIVEJASMIN_FEED_TIMEOUT_MS = 8_000;
const LIVEJASMIN_FEED_REVALIDATE_SECONDS = 120;

export type LiveJasminModelStatus =
  | "free_chat"
  | "group_show"
  | "private_chat"
  | "member_chat"
  | "vip_show"
  | "offline"
  | (string & {});

export interface LiveJasminProfilePictureUrl {
  size320x240?: string;
  size800x600?: string;
  [key: string]: string | undefined;
}

export interface LiveJasminModelPerson {
  age?: string;
  ethnicity?: string;
  country?: string;
  body?: {
    hairColor?: string;
    build?: string;
  };
}

export interface LiveJasminModel {
  uniqueModelId: string;
  performerId: string;
  displayName: string;
  status: LiveJasminModelStatus;
  category?: string;
  details?: {
    chargeAmount?: string;
    languages?: string[];
    modelRating?: number;
    streamQuality?: number;
    appearances?: string[];
    about?: string;
  };
  persons?: LiveJasminModelPerson[];
  profilePictureUrl?: LiveJasminProfilePictureUrl | null;
  isMobileStream?: boolean;
  isNewbie?: number;
  chatRoomUrl: string;
}

interface LiveJasminFeedResponse {
  data?: {
    models?: LiveJasminModel[];
  };
}

function buildFeedUrl() {
  const url = new URL(LIVEJASMIN_FEED_URL);

  for (const [key, value] of Object.entries(LIVEJASMIN_FEED_PARAMS)) {
    url.searchParams.set(key, value);
  }

  return url;
}

function isLiveJasminModel(value: unknown): value is LiveJasminModel {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<LiveJasminModel>;

  return (
    typeof candidate.uniqueModelId === "string" &&
    typeof candidate.performerId === "string" &&
    typeof candidate.displayName === "string" &&
    typeof candidate.chatRoomUrl === "string" &&
    typeof candidate.status === "string"
  );
}

export async function getLiveJasminModels(limit?: number) {
  const response = await fetch(buildFeedUrl(), {
    headers: {
      accept: "application/json",
    },
    next: {
      revalidate: LIVEJASMIN_FEED_REVALIDATE_SECONDS,
    },
    signal: AbortSignal.timeout(LIVEJASMIN_FEED_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`LiveJasmin feed request failed with ${response.status}`);
  }

  const payload = (await response.json()) as LiveJasminFeedResponse;
  const models = payload.data?.models ?? [];
  const liveModels = models.filter(isLiveJasminModel);

  return typeof limit === "number" ? liveModels.slice(0, limit) : liveModels;
}
