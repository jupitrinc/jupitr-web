import { createContext, useMemo, useReducer } from "react"
import {
  CompanyMembersState,
  ICompanyMember,
  ICompanyMembersContext,
} from "./companyMembers.types"
import { companyMembersReducer } from "./companyMembersReducer"

export const CompanyMembersContext = createContext({} as ICompanyMembersContext)

export const CompanyMembersContextProvider: React.FC<any> = ({ children }) => {
  const initialState: CompanyMembersState = {
    data: [] as ICompanyMember[],
    loading: false,
  }
  const [state, dispatch] = useReducer(companyMembersReducer, initialState)

  const value = useMemo(() => {
    return { state, dispatch }
  }, [state])
  return (
    <CompanyMembersContext.Provider value={value}>
      {children}
    </CompanyMembersContext.Provider>
  )
}
