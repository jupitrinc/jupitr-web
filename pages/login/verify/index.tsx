import { WebsiteLayout } from "layouts/WebsiteLayout"
import Loading from "layouts/components/Loader"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { supabaseClientComponent } from "services/_supabase/client"
import { useUserAction } from "state/user/useUserAction"
import { AccountTypeEnum, IUser } from "state/user/user.types"

export const Verify = () => {
  const { setUser } = useUserAction()
  const router = useRouter()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabaseClientComponent.auth.onAuthStateChange(async (event) => {
      if (event === "SIGNED_IN") {
        const res = await fetch("/login/verifyUser")
        const userData = await res.json()
        setUser(userData)
        redirectUser(userData)
      }
    })
    return () => subscription.unsubscribe()
  }, [supabaseClientComponent])

  const redirectUser = (user: IUser) => {
    if (user.account_type === AccountTypeEnum.talent) {
      router.push("/jobs")
    } else if (user.account_type === AccountTypeEnum.company) {
      router.push("/c/jobs")
    }
  }

  return (
    <WebsiteLayout>
      <Loading />
    </WebsiteLayout>
  )
}

export default Verify
