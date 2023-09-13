import { createContext, useMemo, useReducer } from "react"

import { talentJobsReducer } from "./talentJobsReducer"
import { ITalentJobsContext, TalentJobsState } from "./talentJobs.types"

export const TalentJobsContext = createContext({} as ITalentJobsContext)

export const TalentJobsContextProvider: React.FC<any> = ({ children }) => {
  const initialState: TalentJobsState = {
    data: [],
    loading: false,
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
