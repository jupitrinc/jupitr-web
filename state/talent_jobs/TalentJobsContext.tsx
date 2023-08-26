import { createContext, useMemo, useReducer } from "react"

import { talentJobsReducer } from "./talentJobsReducer"
import {
  TalentJobs,
  ITalentJobsContext,
  TalentJobsState,
} from "./talentJobs.types"
import { talent_jobs_test_data } from "./talentJobs.testdata"

export const TalentJobsContext = createContext({} as ITalentJobsContext)

export const TalentJobsContextProvider: React.FC<any> = ({ children }) => {
  const initialState: TalentJobsState = {
    data: talent_jobs_test_data as TalentJobs,
    loading: false,
    error: "",
    success: false,
  }
  const [state, dispatch] = useReducer(talentJobsReducer, initialState)

  const value = useMemo(() => {
    return { state, dispatch }
  }, [state])
  return (
    <TalentJobsContext.Provider value={value}>
      {children}
    </TalentJobsContext.Provider>
  )
}
