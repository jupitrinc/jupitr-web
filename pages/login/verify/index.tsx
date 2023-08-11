import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { WebsiteLayout } from "layouts/WebsiteLayout"
import Loading from "layouts/components/Loader"
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
        const userData: IUser = await res.json()
        setUser(userData)
        redirectUser(userData)
      }
    })
    return () => subscription.unsubscribe()
  }, [supabaseClientComponent])

  const redirectUser = (userData: IUser) => {
    if (userData.account_type === AccountTypeEnum.talent) {
      router.push("/jobs")
    } else if (userData.account_type === AccountTypeEnum.company) {
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
