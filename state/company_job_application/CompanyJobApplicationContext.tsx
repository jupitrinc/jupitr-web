import { createContext, useMemo, useReducer } from "react"

import { useCompanyJobApplicationReducer } from "./useCompanyJobApplicationReducer"
import {
  ICompanyJobApplication,
  ICompanyJobApplicationContext,
  CompanyJobApplicationState,
} from "./companyJobApplication.types"

export const CompanyJobApplicationContext = createContext(
  {} as ICompanyJobApplicationContext
)

export const CompanyJobApplicationContextProvider: React.FC<any> = ({
  children,
}) => {
  const initialState: CompanyJobApplicationState = {
    data: {} as ICompanyJobApplication,
    loading: false,
    success: false,
  }
  const [state, dispatch] = useReducer(
    useCompanyJobApplicationReducer,
    initialState
  )

  const value = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])
  return (
    <CompanyJobApplicationContext.Provider value={value}>
      {children}
    </CompanyJobApplicationContext.Provider>
  )
}
