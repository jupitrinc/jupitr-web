import { useContext, useMemo } from "react"
import { CompanyJobApplicationContext } from "./CompanyJobApplicationContext"

export const useCompanyJobApplicationState = () => {
  const { state } = useContext(CompanyJobApplicationContext)

  return {
    company_job_applications: state.data,
    loading: state.loading,
    error: state.error,
  }
}
