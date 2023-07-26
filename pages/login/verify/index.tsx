import React, { useEffect } from "react"
import { supabaseClientComponent } from "services/_supabase/client"

export const Verify = () => {
  useEffect(() => {
    const {
      data: { subscription },
    } = supabaseClientComponent.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        localStorage.setItem("session", JSON.stringify(session))
        // router.replace("/profile")
      }

      //   const data = JSON.parse(localStorage.getItem("session") || "{}")
      //   if (data !== "{}") {
      //     dispatch({
      //       type: UserActionEnum.SIGN_IN_SUCCESS,
      //       payload: {
      //         ...user,
      //         id: session?.user?.id || "",
      //         email: session?.user?.email || "",
      //         account_type: session?.user?.user_metadata.accountType,
      //       },
      //     })
      //   }
      //   console.log("useeffect")
    })
    return () => subscription.unsubscribe()
  }, [supabaseClientComponent])

  return <div>loading...</div>
}

export default Verify
