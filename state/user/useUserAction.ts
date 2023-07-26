import { useContext, useEffect } from "react"
import { useRouter } from "next/router"
import { UserActionEnum } from "./user.types"
import { UserContext } from "./UserContextProvider"
import { supabaseClientComponent } from "services/_supabase/client"
import { useUserState } from "./useUserState"
import useAuthService from "services/auth/useAuthService"

export function useUserAction() {
  const { dispatch } = useContext(UserContext)
  const { user } = useUserState()
  const { signInWithOtp, signInWithGoogle } = useAuthService()
  const router = useRouter()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabaseClientComponent.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        dispatch({
          type: UserActionEnum.SIGN_IN_SUCCESS,
          payload: {
            ...user,
            id: session?.user?.id || "",
            email: session?.user?.email || "",
            account_type: session?.user?.user_metadata.accountType,
          },
        })
        // router.replace("/profile")
      }
    })
    return () => subscription.unsubscribe()
  }, [supabaseClientComponent])

  const signInWithEmail = async (email: string) => {
    dispatch({ type: UserActionEnum.SIGN_IN_BEGIN })
    const { error } = await signInWithOtp(email)
    if (error) {
      dispatch({ type: UserActionEnum.SIGN_IN_FAILURE })
    }
    dispatch({
      type: UserActionEnum.SIGN_IN_SUCCESS,
    })
  }

  const signInwithGoogleAccount = async () => {
    dispatch({ type: UserActionEnum.SIGN_IN_BEGIN })
    const { error } = await signInWithGoogle()
    if (error) {
      dispatch({ type: UserActionEnum.SIGN_IN_FAILURE })
    }
    dispatch({
      type: UserActionEnum.SIGN_IN_SUCCESS,
    })
  }

  const signOut = async () => {
    const { error } = await supabaseClientComponent.auth.signOut()
    if (error) {
    }
    dispatch({
      type: UserActionEnum.SIGN_OUT,
    })
    router.push("/")
  }

  return {
    signInWithEmail,
    signInwithGoogleAccount,
    signOut,
  }
}
