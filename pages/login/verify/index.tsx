import React, { useEffect } from "react"
import { Loading } from "ui-library/content/loading/Loading"
import { IUser } from "state/user/user.types"
import { useUserAction } from "state/user/useUserAction"
import { useRouter } from "next/router"
import { supabaseClientComponent } from "services/_supabase/client"
import { Session } from "@supabase/supabase-js"
import { useUserState } from "state/user/useUserState"

export const Verify = () => {
  const router = useRouter()
  const { setUser, updateEmail } = useUserAction()
  const { user: stateUser } = useUserState()

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.replace("#", ""))
    const access_token = params.get("access_token") as string
    const refresh_token = params.get("refresh_token") as string

    if (access_token && refresh_token) {
      setNewSession(access_token, refresh_token)
    } else {
      const {
        data: { subscription },
      } = supabaseClientComponent.auth.onAuthStateChange(
        async (event, session) => {
          if (
            (event === "SIGNED_IN" || event === "INITIAL_SESSION") &&
            !stateUser.id
          ) {
            if (session) {
              await handleSession()
            } else {
              router.push("/login")
            }
          }
        }
      )
      return () => subscription.unsubscribe()
    }
  }, [])

  const setNewSession = async (accessToken: string, refreshToken: string) => {
    const { data } = await supabaseClientComponent.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    })
    if (data.session) {
      await handleSession()
    }
  }

  const handleSession = async () => {
    const res = await fetch("/api/login/verifyUser")
    const { user, session: userSession } = await res.json()
    if (user && userSession) {
      changeEmailIfRequested(user, userSession)
      setUser(user)
      redirectUser()
    }
  }
  const redirectUser = () => {
    const path = "/profile"
    return router.push(path)
  }

  const changeEmailIfRequested = (custoDB: IUser, supabase: Session) => {
    if (!custoDB.email || !supabase.user.email) return

    if (custoDB.email !== supabase.user.email) {
      updateEmail(supabase.user.id, supabase.user.email)
    }
  }

  return (
    <div className="mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <Loading />
    </div>
  )
}

export default Verify
