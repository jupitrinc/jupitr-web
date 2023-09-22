import React, { useEffect } from "react"
import { Loading } from "ui-library/content/loading/Loading"
import { IUser, AccountTypeEnum } from "state/user/user.types"
import { useUserAction } from "state/user/useUserAction"
import { useRouter } from "next/router"
import { supabaseClientComponent } from "services/_supabase/client"
import { Session } from "@supabase/supabase-js"
import { localStorageHelper } from "../../../helper/localStorageHelper"
import { useUserState } from "state/user/useUserState"
import { useNotificationAction } from "state/notification/useNotificationAction"

export const Verify = () => {
  const { setUser, updateEmail } = useUserAction()
  const { notify } = useNotificationAction()

  const { user: stateUser } = useUserState()
  const router = useRouter()

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
              handleError()
              router.push("/")
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
      redirectUser(user)
    }
  }
  const redirectUser = (userData: IUser) => {
    const jobId = localStorageHelper.getItem("jobId")
    const basePath =
      userData.account_type === AccountTypeEnum.talent ? "/jobs" : "/c/jobs"
    const path = jobId ? `${basePath}/${jobId}` : basePath

    setTimeout(() => {
      localStorageHelper.removeItem("jobId")
    }, 5000)
    return router.push(path)
  }

  const changeEmailIfRequested = (custoDB: IUser, supabase: Session) => {
    if (!custoDB.email || !supabase.user.email) return

    if (custoDB.email !== supabase.user.email) {
      updateEmail(supabase.user.id, supabase.user.email)
    }
  }

  const handleError = () => {
    if (
      typeof window !== "undefined" &&
      window.location.href.includes("error_code")
    ) {
      notify({
        message: "Email link is invalid or has expired. Sign in again",
        type: "warning",
      })
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-10">
      <Loading />
    </div>
  )
}

export default Verify
