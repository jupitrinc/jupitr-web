import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextRequest, NextResponse } from "next/server"

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const allowedRoutes = ["/auth/callback", "/", "/c/signup", "/login/verify"]

  const isRouteAllowed = allowedRoutes.includes(`${pathname}`)
  const res = NextResponse.next()
  const parts = pathname.split("/")

  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req, res })

  // Refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (parts[1] === "jobs" && parts.length === 3) {
    return res
  }
  if (!session && !isRouteAllowed) {
    return NextResponse.redirect(`${new URL(req.url).origin}/`)
  } else {
    return res
  }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
}
