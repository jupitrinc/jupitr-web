import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextRequest, NextResponse } from "next/server"
import { authTokenCookie } from "./services/auth/useAuthService"
import { urlHelper } from "./helper/urlHelper"

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const { isPublicUrl, isPublicJobRoute } = urlHelper
  const publicRoute = isPublicUrl(pathname)
  const authRoute = ["/c/signup", "/login"].includes(`${pathname}`)
  const publicJobRoute = isPublicJobRoute(pathname)
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  if (publicJobRoute) {
    return res
  }

  if (req.cookies.get(authTokenCookie)) {
    const {
      data: { session },
    } = await supabase.auth.getSession()
    if ((!session?.user && !publicRoute) || (session?.user && authRoute)) {
      return NextResponse.redirect(`${new URL(req.url).origin}/`)
    } else {
      return res
    }
  }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next|monitoring).*)",
}
