import { useContext, useMemo } from "react"
import { NotificationContext } from "./NotificationContext"

export const useNotificationState = () => {
  const { state } = useContext(NotificationContext)

  return {
    notifications: useMemo(() => state.data, [state.data]),
  }
}
