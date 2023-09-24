import { useContext } from "react"
import notificationService from "services/notifications/notificationsService"
import { AccountNotificationsContext } from "./AccountNotificationsContext"
import {
  AccountNotificationsActionEnum,
  IAccountNotification,
  UpdateNotificationPayload,
} from "./accountNotifications.types"

export function useAccountNotificationsAction() {
  const { dispatch } = useContext(AccountNotificationsContext)
  const {
    getNotifications: getNotificationsService,
    updateNotification: updateNotificationService,
  } = notificationService()

  const getNotifications = async (user_id: string) => {
    if (!user_id) return

    dispatch({
      type: AccountNotificationsActionEnum.GET_NOTIFICATIONS_BEGIN,
    })

    const { data, error } = await getNotificationsService(user_id)

    if (error) {
      dispatch({
        type: AccountNotificationsActionEnum.GET_NOTIFICATIONS_FAILURE,
      })
    } else {
      dispatch({
        type: AccountNotificationsActionEnum.GET_NOTIFICATIONS_SUCCESS,
        payload: data as IAccountNotification[],
      })
    }
  }

  const updateNotification = async (payload: UpdateNotificationPayload) => {
    if (!payload.id) return

    dispatch({
      type: AccountNotificationsActionEnum.UPDATE_NOTIFICATION_BEGIN,
    })

    const { data, error } = await updateNotificationService(payload)

    if (error) {
      dispatch({
        type: AccountNotificationsActionEnum.UPDATE_NOTIFICATION_FAILURE,
      })
    } else {
      dispatch({
        type: AccountNotificationsActionEnum.UPDATE_NOTIFICATION_SUCCESS,
        payload: data as IAccountNotification,
      })
    }
  }

  const clearNotifications = () => {
    dispatch({
      type: AccountNotificationsActionEnum.CLEAR_NOTIFICATIONS,
    })
  }

  return {
    getNotifications,
    clearNotifications,
    updateNotification,
  }
}
