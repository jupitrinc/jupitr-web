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
  //TODO return the data property I'm sending and the session as well
  // the session will have supabases auth data so we can compare the 2 user tables
  const { data } = await getUserService(userSession.data.session!.access_token)
  const userData = {
    user: data,
    session: userSession.data.session,
  }

  // URL to redirect to after sign in process completes
  return NextResponse.json(userData)
}
