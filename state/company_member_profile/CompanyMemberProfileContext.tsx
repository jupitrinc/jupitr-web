import { createContext, useReducer } from "react"

import { companyProfileReducer } from "./companyMemberProfileReducer"
import {
  ICompanyMemberProfile,
  ICompanyMemberProfileContext,
  CompanyMemberProfileState,
} from "./companyMemberProfile.types"

export const CompanyMemberProfileContext = createContext(
  {} as ICompanyMemberProfileContext
)

const CompanyMemberProfile = () => {
  const initialState: CompanyMemberProfileState = {
    data: test_data as ICompanyMemberProfile,
    loading: false,
    error: false,
  }
  const [state, dispatch] = useReducer(companyProfileReducer, initialState)

  return {
    state,
    dispatch,
  }
}

export const CompanyMemberProfileContextProvider: React.FC<any> = ({
  children,
}) => {
  return (
    <CompanyMemberProfileContext.Provider value={CompanyMemberProfile()}>
      {children}
    </CompanyMemberProfileContext.Provider>
  )
}

const test_data = {
  user_id: "1",
  job_title: "Software engineer",
  company_id: "1",
  permission: "write",
}
