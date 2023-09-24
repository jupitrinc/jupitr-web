import { createContext, useMemo, useReducer } from "react"
import {
  AccountNotificationsState,
  IAccountNotification,
  IAccountNotificationsContext,
} from "./accountNotifications.types"
import { accountNotificationsReducer } from "./accountNotificationsReducer"

export const AccountNotificationsContext = createContext(
  {} as IAccountNotificationsContext
)

export const AccountNotificationContextProvider: React.FC<any> = ({
  children,
}) => {
  const initialState: AccountNotificationsState = {
    data: [] as IAccountNotification[],
    loading: false,
    success: false,
  }
  const [state, dispatch] = useReducer(
    accountNotificationsReducer,
    initialState
  )

  const value = useMemo(() => {
    return { state, dispatch }
  }, [state])

  return (
    <AccountNotificationsContext.Provider value={value}>
      {children}
    </AccountNotificationsContext.Provider>
  )
}
