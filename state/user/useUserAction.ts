import { useContext } from "react"
import { useRouter } from "next/router"
import { UserActionEnum } from "./user.types"
import { UserContext } from "./UserContextProvider"
import { supabaseClientComponent } from "services/_supabase/client"
import { useUserState } from "./useUserState"
import { cookiesHelper } from "../../helper/cookiesHelper"

export function useUserAction() {
  const { dispatch } = useContext(UserContext)
  const { user } = useUserState()
  const router = useRouter()
  const { deleteAll } = cookiesHelper

  const signInWithOtp = async () => {
    dispatch({ type: UserActionEnum.SIGN_IN_BEGIN })
    const { data, error } = await supabaseClientComponent.auth.getUser()
    if (error) {
      dispatch({ type: UserActionEnum.SIGN_IN_FAILURE })
    }
    dispatch({
      type: UserActionEnum.SIGN_IN_SUCCESS,
      payload: {
        ...user,
        id: data.user?.id || "",
        email: data.user?.email || "",
        account_type: data.user?.user_metadata.accountType,
      },
    })
  }

  const signOut = async () => {
    dispatch({ type: UserActionEnum.SIGN_OUT_BEGIN })
    const { error } = await supabaseClientComponent.auth.signOut()
    if (error) {
      dispatch({ type: UserActionEnum.SIGN_OUT_FAILURE })
    }
    dispatch({
      type: UserActionEnum.SIGN_OUT_SUCCESS,
    })
    deleteAll()
    router.push("/")
  }

  return {
    signInWithOtp,
    signOut,
  }
}
