import React, { useEffect } from "react"
import { Loading } from "ui-library/content/loading/Loading"
import { IUser, AccountTypeEnum } from "state/user/user.types"
import { useUserAction } from "state/user/useUserAction"
import { useRouter } from "next/router"
import { supabaseClientComponent } from "services/_supabase/client"
import { Session } from "@supabase/supabase-js"
import { localStorageHelper } from "../../../helper/localStorageHelper"
import { useUserState } from "state/user/useUserState"

export const Verify = () => {
  const { setUser, updateEmail } = useUserAction()
  const { user: stateUser } = useUserState()
  const router = useRouter()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabaseClientComponent.auth.onAuthStateChange(
      async (event, session) => {
        if (
          (event === "SIGNED_IN" || event === "INITIAL_SESSION") &&
          !stateUser.id
        ) {
          if (session) {
            const res = await fetch("/api/login/verifyUser")
            const { user, session: userSession } = await res.json()
            if (user && userSession) {
              changeEmailIfRequested(user, userSession)
              setUser(user)
              redirectUser(user)
            }
          } else {
            router.push("/")
          }
        }
      }
    )
    return () => subscription.unsubscribe()
  }, [])

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

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-10">
      <Loading />
    </div>
  )
}

export default Verify
