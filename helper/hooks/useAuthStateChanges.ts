import { useEffect } from "react"
import { useRouter } from "next/router"
import { supabaseClientComponent } from "services/_supabase/client"
import { useUserAction } from "state/user/useUserAction"
import { IUser, AccountTypeEnum } from "state/user/user.types"
import { useUserState } from "state/user/useUserState"

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
        const userData: IUser = await res.json()
        setUser(userData)
        redirectUser(userData)
      } else if (event === "USER_UPDATED") {
        updateEmail(user.id, user.email)
        signOut()
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
}

export default useAuthStateChanges
