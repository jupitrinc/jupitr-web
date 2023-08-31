import { createContext, useMemo, useReducer } from "react"
import {
  TalentApplicationState,
  ITalentApplicationContext,
} from "./talentApplication.types"
import { talentApplicationReducer } from "./talentApplicationReducer"

export const TalentApplicationContext = createContext(
  {} as ITalentApplicationContext
)

export const TalentApplicationContextProvider: React.FC<any> = ({
  children,
}) => {
  const initialState: TalentApplicationState = {
    loading: false,
    error: "",
    success: false,
    status: "inactive",
  }
  const [state, dispatch] = useReducer(talentApplicationReducer, initialState)

  const value = useMemo(() => {
    return { state, dispatch }
  }, [state])
  return (
    <TalentApplicationContext.Provider value={value}>
      {children}
    </TalentApplicationContext.Provider>
  )
}
