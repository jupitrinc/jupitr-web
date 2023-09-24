import { useContext, useMemo } from "react"
import { AccountNotificationsContext } from "./AccountNotificationsContext"

export const useAccountNotificationState = () => {
  const { state } = useContext(AccountNotificationsContext)

  return {
    notifications: useMemo(() => state.data, [state.data]),
    loading: state.loading,
    success: state.success,
  }
}
