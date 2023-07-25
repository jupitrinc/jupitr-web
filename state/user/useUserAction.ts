import { useContext } from "react"
import { useRouter } from "next/router"
import { UserActionEnum } from "./user.types"
import { UserContext } from "./UserContextProvider"
import { supabase, supabaseClientComponent } from "services/_supabase/client"
import { useUserState } from "./useUserState"
import { cookieHelper } from "../../helper/cookieHelper"
export interface IUser {
  //common
  id: string
  updated_at: string
  avatar_url: string
  name: string
  active: boolean
  account_type: string
}

export interface ICompanyMemberProfile extends IUser {
  //company member profile
  job_title: string
  company_id: number
  roles: number
}
export interface ITalentProfile extends IUser {
  // talent profile
  skills: string
  socials: string
  preferences: string
  jobs: string
}

export function useUserAction() {
  const { dispatch } = useContext(UserContext)
  const { user } = useUserState()
  const router = useRouter()
  const { deleteAll } = cookieHelper

  const signInWithOtp = async () => {
    dispatch({ type: UserActionEnum.SIGN_IN_BEGIN })
    const { data, error } = await supabaseClientComponent.auth.getUser()
    if (error) {
      dispatch({ type: UserActionEnum.SIGN_IN_FAILURE })
    }
    const { data: session } = await supabaseClientComponent.auth.getSession()
    console.log(session)
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
    const { error } = await supabaseClientComponent.auth.signOut()
    if (error) {
    }
    dispatch({
      type: UserActionEnum.SIGN_OUT,
    })
    deleteAll()
    router.push("/")
  }

  return {
    signInWithOtp,
    signOut,
  }
}
