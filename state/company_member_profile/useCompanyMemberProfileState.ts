import { useContext } from "react"
import { CompanyMemberProfileContext } from "./CompanyMemberProfileContext"

export const useCompanyMemberProfileState = () => {
  const { state } = useContext(CompanyMemberProfileContext)

  return {
    company_member_profile: state.data,
    loading: state.loading,
    error: state.error,
  }
}
