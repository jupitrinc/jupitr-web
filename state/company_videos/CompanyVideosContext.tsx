import { createContext, useMemo, useReducer } from "react"
import {
  CompanyVideosState,
  ICompanyVideosContext,
} from "./companyVideos.types"
import { companyVideosReducer } from "./companyVideosReducer"

export const CompanyVideosContext = createContext({} as ICompanyVideosContext)

export const CompanyVideosContextProvider: React.FC<any> = ({ children }) => {
  const initialState: CompanyVideosState = {
    loading: false,
    error: "",
    success: false,
  }
  const [state, dispatch] = useReducer(companyVideosReducer, initialState)

  const value = useMemo(() => {
    return { state, dispatch }
  }, [state])
  return (
    <CompanyVideosContext.Provider value={value}>
      {children}
    </CompanyVideosContext.Provider>
  )
}
