import { NextResponse } from "next/server";

export const LIVEJASMIN_AFFILIATE_HOST = "ctwmsg.com";

const liveJasminTrackingParams =
  "prm[psid]=affil28&prm[pstool]=205_1&prm[psprogram]=pps";

export const LIVEJASMIN_SIGNUP_URL =
  `https://${LIVEJASMIN_AFFILIATE_HOST}/?performerName=&siteId=jasmin&categoryName=&pageName=signup&${liveJasminTrackingParams}&prm[campaign_id]=&subAffId=`;

export const LIVEJASMIN_RANDOM_ROOM_URL =
  `https://${LIVEJASMIN_AFFILIATE_HOST}/?performerName=&siteId=jasmin&categoryName=&pageName=random&${liveJasminTrackingParams}&prm[campaign_id]=&subAffId=`;

export const LIVEJASMIN_MODEL_SIGNUP_URL =
  `https://${LIVEJASMIN_AFFILIATE_HOST}/?siteId=npc&pageName=home&prm[refererid]=affil28`;

export function redirectToAffiliate(destination: string | URL) {
  const response = NextResponse.redirect(destination, 302);

  response.headers.set("Cache-Control", "no-store, max-age=0");
  response.headers.set("X-Robots-Tag", "noindex, nofollow");

  return response;
}
