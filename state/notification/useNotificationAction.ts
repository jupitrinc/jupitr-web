import { useContext } from "react"
import { NotificationContext } from "./NotificationContext"
import { INotification, NotificationActionEnum } from "./notification.types"
import { stringHelper } from "helper/stringHelper"

export function useNotificationAction() {
  const { dispatch } = useContext(NotificationContext)

  const notify = async (payload: Omit<INotification, "id">) => {
    if (!payload.message || !payload.type) return

    dispatch({
      type: NotificationActionEnum.SHOW_NOTIFICATION,
      payload: { ...payload, id: stringHelper.randomHash() },
    })
  }

  const hideNotification = async (id: string) => {
    if (!id) return

    dispatch({
      type: NotificationActionEnum.HIDE_NOTIFICATION,
      payload: id,
    })
  }

  return {
    notify,
    hideNotification,
  }
}
