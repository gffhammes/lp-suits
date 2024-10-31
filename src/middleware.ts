import { type NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

const variants = {
  elegance: "elegance",
  ease: "ease",
};

const THRESHOLD = 0.5;
const COOKIE_NAME = "tm_var";

export function middleware(req: NextRequest) {
  const variant =
    req.cookies.get(COOKIE_NAME)?.value ||
    (Math.random() < THRESHOLD ? variants.ease : variants.elegance);

  const url = req.nextUrl.clone();

  if (variant === variants.ease) {
    url.pathname = "/praticidade";
  } else {
    url.pathname = "/elegancia";
  }

  const res = NextResponse.rewrite(url);

  if (!req.cookies.get(COOKIE_NAME)) {
    res.cookies.set(COOKIE_NAME, variant);
  }
  return res;
}
