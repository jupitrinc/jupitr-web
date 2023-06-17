import { createContext, useReducer } from "react"
import { userReducer } from "./userReducer"
import { IUserContext, UserStateType, UserType } from "./user.types"

export const UserContext = createContext({} as IUserContext)

const User = () => {
  const initialState: UserStateType = {
    data: test_data as UserType, // {}
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
  avatar:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
  account_type: "talent",
  email: "ava@jupitr.tech",
}
