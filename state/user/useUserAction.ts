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

  const signInWithEmail = async (email: string) => {
    dispatch({ type: UserActionEnum.SIGN_IN_BEGIN })
    const { error } = await signInWithOtp(email)
    if (error) {
      dispatch({ type: UserActionEnum.SIGN_IN_FAILURE })
    } else {
      dispatch({
        type: UserActionEnum.SIGN_IN_SUCCESS,
      })
    }
  }

  const signInwithGoogleAccount = async () => {
    dispatch({ type: UserActionEnum.SIGN_IN_BEGIN })
    const { error } = await signInWithGoogle()
    if (error) {
      dispatch({ type: UserActionEnum.SIGN_IN_FAILURE })
    } else {
      dispatch({
        type: UserActionEnum.SIGN_IN_SUCCESS,
      })
    }
  }

  const signOut = async () => {
    const { error } = await supabaseClientComponent.auth.signOut()
    if (error) {
    }
    dispatch({
      type: UserActionEnum.SIGN_OUT,
    })
    localStorage.clear()
    router.push("/")
  }

  return {
    signInWithEmail,
    signInwithGoogleAccount,
    signOut,
    loadSession,
  }
}
