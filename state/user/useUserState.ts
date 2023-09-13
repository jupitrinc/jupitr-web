import { useContext, useMemo } from "react"
import { UserContext } from "./UserContextProvider"

export const useUserState = () => {
  const { state } = useContext(UserContext)

  return {
    user: useMemo(() => state.data, [state.data]),
    loading: state.loading,
    isLoggedIn: state.data.id ? true : false,
    accountType: state.data.account_type,
  }
}
