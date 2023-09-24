import { createContext, useMemo, useReducer } from "react"
import {
  AccountNotificationsState,
  IAccountNotifications,
  IAccountNotificationsContext,
} from "./accountSettings.types"
import { notificationReducer } from "./accountSettingsReducer"

export const AccountNotificationsContext = createContext(
  {} as IAccountNotificationsContext
)

export const AccountNotificationContextProvider: React.FC<any> = ({
  children,
}) => {
  const initialState: AccountNotificationsState = {
    data: [] as IAccountNotifications[],
    loading: false,
    success: false,
  }
  const [state, dispatch] = useReducer(notificationReducer, initialState)

  const value = useMemo(() => {
    return { state, dispatch }
  }, [state])

  return (
    <AccountNotificationsContext.Provider value={value}>
      {children}
    </AccountNotificationsContext.Provider>
  )
}
