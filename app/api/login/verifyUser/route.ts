import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import userService from "services/user/userService"

export async function GET(_request: Request) {
  try {
    const { getUser: getUserService } = userService()

    const supabase = createRouteHandlerClient({ cookies })
    const userSession = await supabase.auth.getSession()

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
