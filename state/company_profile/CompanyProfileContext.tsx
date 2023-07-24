import { createContext, useReducer } from "react"

import { companyProfileReducer } from "./companyProfileReducer"
import {
  ICompanyProfile,
  ICompanyProfileContext,
  CompanyProfileState,
} from "./companyProfile.types"

export const CompanyProfileContext = createContext({} as ICompanyProfileContext)

const CompanyProfile = () => {
  const initialState: CompanyProfileState = {
    data: test_data as ICompanyProfile,
    loading: false,
    error: false,
  }
  const [state, dispatch] = useReducer(companyProfileReducer, initialState)

  return {
    state,
    dispatch,
  }
}

export const CompanyProfileContextProvider: React.FC<any> = ({ children }) => {
  return (
    <CompanyProfileContext.Provider value={CompanyProfile()}>
      {children}
    </CompanyProfileContext.Provider>
  )
}

const test_data = {
  id: "1",
  name: "jupitr",
  logo: "https://img.freepik.com/premium-vector/astronaut-logo-illustration-vector-cute-logo-planet-vector_472355-61.jpg?w=2000",
  year_founded: "2023",
  website: "https://jupitr.tech",
  size: "1-10",
  mission:
    "We believe that innovation is fueled by the right talent in the right roles, and we are dedicated to making those connections in the tech industry.",
  industry: [
    { id: "1", name: "Recruitment" },
    { id: "2", name: "SaaS" },
    { id: "3", name: "AI" },
  ],
  created_at: "2023-06-11 18:13:59.232382+00",
  updated_at: "2023-06-11 18:13:59.232382+00",
}
