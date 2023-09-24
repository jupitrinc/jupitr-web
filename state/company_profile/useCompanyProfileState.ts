import { useContext } from "react"
import { CompanyProfileContext } from "./CompanyProfileContext"

export const useCompanyProfileState = () => {
  const { state } = useContext(CompanyProfileContext)

  return {
    company_profile: state.data,
    loading: state.loading,
  }
}
