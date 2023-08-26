import { createContext, useMemo, useReducer } from "react"
import {
  CompanyJobVideosState,
  ICompanyJobVideosContext,
} from "./companyJobVideos.types"
import { companyJobVideosReducer } from "./companyJobVideosReducer"

export const CompanyJobVideosContext = createContext(
  {} as ICompanyJobVideosContext
)

export const CompanyJobVideosContextProvider: React.FC<any> = ({
  children,
}) => {
  const initialState: CompanyJobVideosState = {
    loading: false,
    error: "",
    success: false,
  }
  const [state, dispatch] = useReducer(companyJobVideosReducer, initialState)

  const value = useMemo(() => {
    return { state, dispatch }
  }, [state])
  return (
    <CompanyJobVideosContext.Provider value={value}>
      {children}
    </CompanyJobVideosContext.Provider>
  )
}
