import { useContext } from "react"
import { CompanyProfileContext } from "./CompanyProfileContext"

export const useCompanyProfileState = () => {
  const { state } = useContext(CompanyProfileContext)

  return {
    company_profile: state.data,
    industries: state.industries,
    loading: state.loading,
    error: state.error,
  }
}
