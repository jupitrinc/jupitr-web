import { useContext } from "react"
import { CompanyJobsContext } from "./CompanyJobsContext"

export const useCompanyJobsState = () => {
  const { state } = useContext(CompanyJobsContext)

  return {
    company_jobs: state.data,
    loading: state.loading,
    error: state.error,
  }
}
