import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import useUserService from "services/user/useUserService"

export async function GET() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getUser: getUserService } = useUserService()
  const supabase = createServerComponentClient({ cookies })
  const userSession = await supabase.auth.getSession()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data } = await getUserService(userSession.data.session!.access_token)
  const userData = {
    user: data,
    session: userSession.data.session,
  }
  return NextResponse.json(userData)
}
