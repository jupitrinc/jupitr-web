import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
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

  return NextResponse.redirect(`${requestUrl.origin}/login/verify`)
}
