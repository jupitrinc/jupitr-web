import { createContext, useMemo, useReducer } from "react"
import { companyJobsReducer } from "./companyJobsReducer"
import {
  ICompanyJobsContext,
  CompanyJobsState,
  ICompanyJobs,
} from "./companyJobs.types"

export const CompanyJobsContext = createContext({} as ICompanyJobsContext)

export const CompanyJobsContextProvider: React.FC<any> = ({ children }) => {
  const initialState: CompanyJobsState = {
    data: [] as ICompanyJobs,
    loading: false,
    error: "",
  }

  const [state, dispatch] = useReducer(companyJobsReducer, initialState)

  const value = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <CompanyJobsContext.Provider value={value}>
      {children}
    </CompanyJobsContext.Provider>
  )
}
