import { useContext, useMemo } from "react"
import { CompanyJobApplicationContext } from "./CompanyJobApplicationContext"

export const useCompanyJobApplicationState = () => {
  const { state } = useContext(CompanyJobApplicationContext)

  return {
    company_job_applications: useMemo(() => state.data, [state.data]),
    loading: state.loading,
    success: state.success,
  }
}
