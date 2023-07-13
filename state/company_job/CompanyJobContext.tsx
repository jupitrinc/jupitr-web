import { createContext, useReducer } from "react"

import { companyJobReducer } from "./companyJobReducer"
import {
  ICompanyJob,
  ICompanyJobContext,
  CompanyJobState,
} from "./companyJob.types"
import { sample_job } from "state/company_jobs/CompanyJobsContext"

export const CompanyJobContext = createContext({} as ICompanyJobContext)

const CompanyJob = () => {
  const initialState: CompanyJobState = {
    data: sample_job as ICompanyJob,
    loading: false,
    error: false,
  }
  const [state, dispatch] = useReducer(companyJobReducer, initialState)

  return {
    state,
    dispatch,
  }
}

export const CompanyJobContextProvider: React.FC<any> = ({ children }) => {
  return (
    <CompanyJobContext.Provider value={CompanyJob()}>
      {children}
    </CompanyJobContext.Provider>
  )
}
