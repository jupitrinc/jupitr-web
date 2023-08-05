import { createContext, useMemo, useReducer } from "react"

import { companyProfileReducer } from "./industryReducer"
import { IIndustry, IIndustryContext, IndustryState } from "./industry.types"

export const IndustryContext = createContext({} as IIndustryContext)

export const IndustryContextProvider: React.FC<any> = ({ children }) => {
  const initialState: IndustryState = {
    data: [] as IIndustry[],
    loading: false,
    error: false,
  }
  const [state, dispatch] = useReducer(companyProfileReducer, initialState)

  const value = useMemo(() => {
    return { state, dispatch }
  }, [state])
  return (
    <IndustryContext.Provider value={value}>
      {children}
    </IndustryContext.Provider>
  )
}
