import { useContext } from "react"
import { CompanyJobVideosContext } from "./CompanyJobVideosContext"

export const useCompanyJobVideosState = () => {
  const { state } = useContext(CompanyJobVideosContext)

  return {
    loading: state.loading,
    success: state.success,
  }
}
