import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextRequest, NextResponse } from "next/server"

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const parts = pathname.split("/")

  const routes = ["/auth/callback", "/", "/c/signup", "/login/verify"]
  const publicRoute = routes.includes(`${pathname}`)
  const authRoute = ["/c/signup"].includes(`${pathname}`)
  const publicJobRoute = parts[1] === "jobs" && parts.length === 3

  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (publicJobRoute) {
    return res
  }

  if ((!session && !publicRoute) || (session && authRoute)) {
    return NextResponse.redirect(`${new URL(req.url).origin}/`)
  } else {
    return res
  }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
}
