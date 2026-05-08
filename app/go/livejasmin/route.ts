import { LIVEJASMIN_SIGNUP_URL, redirectToAffiliate } from "@/lib/affiliate";

export const dynamic = "force-dynamic";

export async function GET() {
  return redirectToAffiliate(LIVEJASMIN_SIGNUP_URL);
}
