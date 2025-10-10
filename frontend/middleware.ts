import { NextRequest, NextResponse } from "next/server";

const PROTECTED_PREFIXES = ["/dashboard", "/dashboard/transactions", "/dashboard/pots", "/dashboard/recurring-bills", "dashboard/budgets"];
const PUBLIC_ROUTES = ["/", "signin", "signup"];

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get("access_token")?.value;

  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
  const isProtectedRoute = PROTECTED_PREFIXES.some(
    (route) => pathname === route,
  );

  let isAuthenticated = false;
  if (token) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
        headers: { cookie: `access_token=${token}` },
        cache: "no-store",
      });
        
    isAuthenticated = res.ok;
        
    } catch {
        isAuthenticated = false;
    }
  }

  if (isProtectedRoute && !isAuthenticated) {
    const url = req.nextUrl.clone()
    url.pathname = '/login'
    url.searchParams.set('next', pathname)
    return NextResponse.redirect(url)
  }

  if (isPublicRoute && isAuthenticated && !pathname.startsWith('/dashboard')) {
    const url = req.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}