import { useContext } from "react"
import { UserContext } from "./UserContext"

export const userState = () => {
  const { state } = useContext(UserContext)

  return {
    user: state.data,
    loading: state.loading,
    error: state.error,
  }
}
