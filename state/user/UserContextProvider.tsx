import { createContext, useMemo, useReducer } from "react"
import { userReducer } from "./userReducer"
import { ISuperUser, IUserContext, UserState } from "./user.types"

export const UserContext = createContext({} as IUserContext)

export const UserContextProvider: React.FC<any> = ({ children }) => {
  const initialState: UserState = {
    data: {} as ISuperUser,
    loading: false,
    error: "",
  }

  const [state, dispatch] = useReducer(userReducer, initialState)

  const value = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
