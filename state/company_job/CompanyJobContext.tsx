import { createContext, useMemo, useReducer } from "react"

import { companyJobReducer } from "./companyJobReducer"
import {
  ICompanyJob,
  ICompanyJobContext,
  CompanyJobState,
} from "./companyJob.types"

export const CompanyJobContext = createContext({} as ICompanyJobContext)

export const CompanyJobContextProvider: React.FC<any> = ({ children }) => {
  const initialState: CompanyJobState = {
    data: {} as ICompanyJob,
    loading: false,
    error: "",
  }
  const [state, dispatch] = useReducer(companyJobReducer, initialState)

  const value = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])
  return (
    <CompanyJobContext.Provider value={value}>
      {children}
    </CompanyJobContext.Provider>
  )
}
