import { useContext } from "react"
import { CompanyVideosContext } from "./CompanyVideosContext"

export const useCompanyVideosState = () => {
  const { state } = useContext(CompanyVideosContext)

  return {
    loading: state.loading,
    error: state.error,
    success: state.success,
  }
}
