import { createContext, useMemo, useReducer } from "react"
import { talentJobReducer } from "./talentJobReducer"
import {
  ITalentJob,
  ITalentJobContext,
  TalentJobState,
} from "./talentJob.types"

export const TalentJobContext = createContext({} as ITalentJobContext)

export const TalentJobContextProvider: React.FC<any> = ({ children }) => {
  const initialState: TalentJobState = {
    data: {} as ITalentJob,
    loading: false,
    error: "",
    success: false,
  }
  const [state, dispatch] = useReducer(talentJobReducer, initialState)

  const value = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <TalentJobContext.Provider value={value}>
      {children}
    </TalentJobContext.Provider>
  )
}
