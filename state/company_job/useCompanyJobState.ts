import { useContext } from "react"
import { CompanyJobContext } from "./CompanyJobContext"

export const useCompanyJobState = () => {
  const { state } = useContext(CompanyJobContext)

  return {
    company_job: state.data,
    loading: state.loading,
    error: state.error,
  }
}
