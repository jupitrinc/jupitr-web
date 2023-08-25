import { useContext, useMemo } from "react"
import { CompanyMembersContext } from "./CompanyMembersContext"

export const useCompanyMembersState = () => {
  const { state } = useContext(CompanyMembersContext)

  return {
    company_members: useMemo(() => state.data, [state.data]),
    loading: state.loading,
    error: state.error,
  }
}
