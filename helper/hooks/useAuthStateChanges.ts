import { useEffect } from "react"
import { useRouter } from "next/router"
import { supabaseClientComponent } from "services/_supabase/client"
import { useUserAction } from "state/user/useUserAction"
import { IUser, AccountTypeEnum } from "state/user/user.types"
import { Session } from "@supabase/supabase-js"

const useAuthStateChanges = () => {
  const { setUser, updateEmail } = useUserAction()
  const router = useRouter()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabaseClientComponent.auth.onAuthStateChange(async (event) => {
      if (event === "SIGNED_IN" || event === "INITIAL_SESSION") {
        const res = await fetch("/api/login/verifyUser")
        const { user, session } = await res.json()
        verifyEmails(user, session)
        setUser(user)
        redirectUser(user)
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

  const verifyEmails = (db: IUser, supabase: Session) => {
    if (db.email !== supabase.user.email) {
      updateEmail(db.id, supabase.user.email!)
    }
  }
}

export default useAuthStateChanges
