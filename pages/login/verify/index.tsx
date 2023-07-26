import React, { useEffect } from "react"
import { supabaseClientComponent } from "services/_supabase/client"
import { useUserAction } from "state/user/useUserAction"

export const Verify = () => {
  const { getUser } = useUserAction()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabaseClientComponent.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        getUser(session.access_token)
        // localStorage.setItem("session", JSON.stringify(session))
        // router.replace("/profile")
      }
    })
    return () => subscription.unsubscribe()
  }, [supabaseClientComponent])

  return <div>loading...</div>
}

export default Verify
