import { createContext, useReducer } from "react"

import { companyProfileReducer } from "./industryReducer"
import { IIndustry, IIndustryContext, IndustryState } from "./industry.types"

export const IndustryContext = createContext({} as IIndustryContext)

const Industry = () => {
  const initialState: IndustryState = {
    data: test_data as IIndustry[],
    loading: false,
    error: false,
  }
  const [state, dispatch] = useReducer(companyProfileReducer, initialState)

  return {
    state,
    dispatch,
  }
}

export const IndustryContextProvider: React.FC<any> = ({ children }) => {
  return (
    <IndustryContext.Provider value={Industry()}>
      {children}
    </IndustryContext.Provider>
  )
}

const test_data = [{ id: "1", name: "AI" }]
