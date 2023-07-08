import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextRequest, NextResponse } from "next/server"

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const allowedRoutes = ["/auth/callback", "/", "/login"]

  const isRouteAllowed = allowedRoutes.includes(`${pathname}`)

  const res = NextResponse.next()

  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req, res })

  // Refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session && !isRouteAllowed) {
    return NextResponse.redirect(`${new URL(req.url).origin}/login`)
  }

  return res
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
}
