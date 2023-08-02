import { useContext } from "react"
import { UserContext } from "./UserContextProvider"

export const useUserState = () => {
  const { state } = useContext(UserContext)

  return {
    user: state.data,
    loading: state.loading,
    error: state.error,
    isLoggedIn: state.data.id ? true : false,
    accountType: state.data.account_type,
  }
}
