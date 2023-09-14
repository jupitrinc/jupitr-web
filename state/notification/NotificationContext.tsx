import { createContext, useMemo, useReducer } from "react"
import { INotificationContext, NotificationState } from "./notification.types"
import { notificationReducer } from "./notificationReducer"

export const NotificationContext = createContext({} as INotificationContext)

export const NotificationContextProvider: React.FC<any> = ({ children }) => {
  const initialState: NotificationState = {
    data: [],
  }
  const [state, dispatch] = useReducer(notificationReducer, initialState)

  const value = useMemo(() => {
    return { state, dispatch }
  }, [state])

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  )
}
