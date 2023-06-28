import { createContext, useReducer } from "react"

import { talentJobReducer } from "./talentJobReducer"
import {
  ITalentJob,
  ITalentJobContext,
  TalentJobState,
} from "./talentJob.types"

export const TalentJobContext = createContext({} as ITalentJobContext)

const TalentJob = () => {
  const initialState: TalentJobState = {
    data: {} as ITalentJob,
    loading: false,
    error: false,
  }
  const [state, dispatch] = useReducer(talentJobReducer, initialState)

  return {
    state,
    dispatch,
  }
}

export const TalentJobContextProvider: React.FC<any> = ({ children }) => {
  return (
    <TalentJobContext.Provider value={TalentJob()}>
      {children}
    </TalentJobContext.Provider>
  )
}
