import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import useUserService from "services/user/useUserService"

export async function GET(request: Request) {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { getUser: getUserService } = useUserService()
    const cookieStore = cookies()

    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
    const userSession = await supabase.auth.getSession()
    console.log("=>(route.ts:12) userSession", userSession)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { data, error } = await getUserService(
      userSession.data.session!.access_token
    )
    console.log("getUserService data", data)
    if (error) throw error
    const userData = {
      user: data,
      session: userSession.data.session,
    }
    console.log("=>(route.ts:18) userData", userData)
    return NextResponse.json(userData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "bad request" }, { status: 400 })
  }
}
