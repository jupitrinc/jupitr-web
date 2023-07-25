import { createContext, useReducer } from "react"
import { userReducer } from "./userReducer"
import { IUser, IUserContext, UserState } from "./user.types"

export const UserContext = createContext({} as IUserContext)

const User = () => {
  const initialState: UserState = {
    data: test_data as IUser,
    loading: false,
    error: false,
  }
  const [state, dispatch] = useReducer(userReducer, initialState)

  return {
    state,
    dispatch,
  }
}

export const UserContextProvider: React.FC<any> = ({ children }) => {
  return <UserContext.Provider value={User()}>{children}</UserContext.Provider>
}

const test_data = {
  id: "test1d",
  name: "Ava Sky",
  avatar_url:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
  account_type: "company",
  email: "ava@jupitr.tech",
  created_at: "2023-06-11 18:13:59.232382+00",
  updated_at: "2023-06-11 18:13:59.232382+00",
  active: true,
}
