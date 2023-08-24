import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { CookieEnum } from "helper/cookieHelper"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the Auth Helpers package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-sign-in-with-code-exchange
  const supabase = createRouteHandlerClient({ cookies })

  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")

  if (!code) {
    const res = NextResponse.redirect(`${requestUrl.origin}/`)
    return res
  }

  const { error } = await supabase.auth.exchangeCodeForSession(code)
  if (error) {
    const res = NextResponse.redirect(`${requestUrl.origin}/`)
    return res
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(`${requestUrl.origin}/login/verify`)
}
