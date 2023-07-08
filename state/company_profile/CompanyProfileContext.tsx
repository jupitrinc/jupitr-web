import { createContext, useReducer } from "react"

import { companyProfileReducer } from "./companyProfileReducer"
import {
  ICompanyProfile,
  ICompanyProfileContext,
  CompanyProfileState,
} from "./companyProfile.types"

export const CompanyProfileContext = createContext({} as ICompanyProfileContext)

const CompanyProfile = () => {
  const initialState: CompanyProfileState = {
    data: test_data as ICompanyProfile,
    loading: false,
    error: false,
  }
  const [state, dispatch] = useReducer(companyProfileReducer, initialState)

  return {
    state,
    dispatch,
  }
}

export const CompanyProfileContextProvider: React.FC<any> = ({ children }) => {
  return (
    <CompanyProfileContext.Provider value={CompanyProfile()}>
      {children}
    </CompanyProfileContext.Provider>
  )
}

const test_data = {}
