import { createContext, useReducer } from "react"

import { userReducer } from "./userReducer"
import { UserContextInterface, UserStateType, UserType } from "./user.types"

export const UserContext = createContext({} as UserContextInterface)

const User = () => {
  const initialState: UserStateType = {
    data: {} as UserType,
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
