import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import useUserService from "services/user/useUserService"

export async function GET(request: Request) {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { getUser: getUserService } = useUserService()

    const supabase = createRouteHandlerClient({ cookies })
    const userSession = await supabase.auth.getSession()
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { data, error } = await getUserService(
      userSession.data.session!.access_token
    )
    if (error) throw error
    const userData = {
      user: data,
      session: userSession.data.session,
    }
    return NextResponse.json(userData, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "bad request" }, { status: 400 })
  }
}
