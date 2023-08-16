import { useEffect } from "react"
import { useRouter } from "next/router"
import { supabaseClientComponent } from "services/_supabase/client"
import { useUserAction } from "state/user/useUserAction"
import { IUser, AccountTypeEnum } from "state/user/user.types"
import { useUserState } from "state/user/useUserState"
import { Session } from "@supabase/supabase-js"

const useAuthStateChanges = () => {
  const { user } = useUserState()
  const { setUser, updateEmail, signOut } = useUserAction()
  const router = useRouter()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabaseClientComponent.auth.onAuthStateChange(async (event) => {
      if (event === "SIGNED_IN") {
        const res = await fetch("/login/verifyUser")
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
      updateEmail(db.id, db.email)
    }
  }
}

export default useAuthStateChanges
