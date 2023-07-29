import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import useUserService from "services/user/useUserService"

export async function GET() {
  const { getUser: getUserService } = useUserService()
  const supabase = createServerComponentClient({ cookies })
  const userSession = await supabase.auth.getSession()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data } = await getUserService(userSession.data.session!.access_token)

  // URL to redirect to after sign in process completes
  return NextResponse.json(data)
}
