import { NextRequest } from "next/server";

import {
  LIVEJASMIN_AFFILIATE_HOST,
  LIVEJASMIN_RANDOM_ROOM_URL,
  redirectToAffiliate,
} from "@/lib/affiliate";

export const dynamic = "force-dynamic";

function getValidatedRedirectUrl(urlValue: string | null) {
  if (!urlValue) {
    return null;
  }

  try {
    const redirectUrl = new URL(decodeURIComponent(urlValue));

    if (redirectUrl.protocol !== "https:") {
      return null;
    }

    if (redirectUrl.hostname !== LIVEJASMIN_AFFILIATE_HOST) {
      return null;
    }

    return redirectUrl;
  } catch {
    return null;
  }
}

export async function GET(
  request: NextRequest,
  context: RouteContext<"/go/model/[id]">,
) {
  const { id } = await context.params;
  const redirectUrl = getValidatedRedirectUrl(request.nextUrl.searchParams.get("url"));

  if (!id.trim() || !redirectUrl) {
    return redirectToAffiliate(LIVEJASMIN_RANDOM_ROOM_URL);
  }

  return redirectToAffiliate(redirectUrl);
}
