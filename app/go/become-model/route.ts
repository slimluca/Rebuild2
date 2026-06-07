import { LIVEJASMIN_MODEL_SIGNUP_URL, redirectToAffiliate } from "@/lib/affiliate";

export const dynamic = "force-dynamic";

export async function GET() {
  return redirectToAffiliate(LIVEJASMIN_MODEL_SIGNUP_URL);
}
