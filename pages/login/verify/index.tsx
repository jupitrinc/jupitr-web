import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { AppLayout } from "layouts/AppLayout"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { supabaseClientComponent } from "services/_supabase/client"
import { useUserAction } from "state/user/useUserAction"
import { IUser } from "state/user/user.types"
import { Loader } from "ui-library/loader/Loader"
import { Text } from "ui-library/text/Text"

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
    if (user.account_type === "talent") {
      router.push("/jobs")
    } else if (user.account_type === "company") {
      router.push("/c/jobs")
    }
  }

  return (
    <AppLayout>
      <div className="max-w-sm mx-auto flex flex-col space-y-4 w-full items-center pt-20">
        <Loader color="standard" className="w-5 h-5" />
        <Text as="span">Loading...</Text>
      </div>
    </AppLayout>
  )
}

export default Verify
