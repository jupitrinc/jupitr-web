import { useContext, useMemo } from "react"
import { UserContext } from "./UserContextProvider"

export const useUserState = () => {
  const { state } = useContext(UserContext)

  return {
    user: useMemo(() => state.data, [state.data]),
    loading: state.loading,
    success: state.success,

    isLoggedIn: state.data.id ? true : false,
    accountType: state.data.account_type,
  }
}
