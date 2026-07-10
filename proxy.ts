import { NextResponse, type NextRequest } from "next/server";

const gonePaths = new Set([
  "/ashley-ashleysinnx-bio-cam-review",
  "/bbw",
  "/canela-canelasungirl-bio-cam-review",
  "/comments/feed",
  "/elementor-448",
  "/feet",
  "/free-webcam-sex-with-chloe",
  "/gay",
  "/teens",
  "/trans",
]);

function normalizePath(pathname: string) {
  if (pathname !== "/" && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export function proxy(request: NextRequest) {
  const pathname = normalizePath(request.nextUrl.pathname);

  if (gonePaths.has(pathname)) {
    return new NextResponse("Gone", {
      status: 410,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "x-robots-tag": "noindex, nofollow",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon|apple-icon).*)"],
};
