import React, { useEffect } from "react"
import { WebsiteLayout } from "layouts/WebsiteLayout"
import Loading from "layouts/components/Loader"
import { IUser, AccountTypeEnum } from "state/user/user.types"
import { useUserAction } from "state/user/useUserAction"
import { useRouter } from "next/router"
import { supabaseClientComponent } from "services/_supabase/client"
import { Session } from "@supabase/supabase-js"

export const Verify = () => {
  const { setUser, updateEmail } = useUserAction()
  const router = useRouter()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabaseClientComponent.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" || event === "INITIAL_SESSION") {
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
  }, [supabaseClientComponent])

  const redirectUser = (userData: IUser) => {
    if (userData.account_type === AccountTypeEnum.talent) {
      router.push("/jobs")
    } else if (userData.account_type === AccountTypeEnum.company) {
      router.push("/c/jobs")
    }
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
