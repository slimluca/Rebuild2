import { LIVEJASMIN_RANDOM_ROOM_URL, redirectToAffiliate } from "@/lib/affiliate";

export const dynamic = "force-dynamic";

export async function GET() {
  return redirectToAffiliate(LIVEJASMIN_RANDOM_ROOM_URL);
}
