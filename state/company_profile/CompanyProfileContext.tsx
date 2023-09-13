import { createContext, useMemo, useReducer } from "react"
import { companyProfileReducer } from "./companyProfileReducer"
import {
  ICompanyProfile,
  ICompanyProfileContext,
  CompanyProfileState,
} from "./companyProfile.types"

export const CompanyProfileContext = createContext({} as ICompanyProfileContext)

export const CompanyProfileContextProvider: React.FC<any> = ({ children }) => {
  const initialState: CompanyProfileState = {
    data: {} as ICompanyProfile,
    loading: false,
  }
  const [state, dispatch] = useReducer(companyProfileReducer, initialState)

  const value = useMemo(() => {
    return { state, dispatch }
  }, [state])

  return (
    <CompanyProfileContext.Provider value={value}>
      {children}
    </CompanyProfileContext.Provider>
  )
}
