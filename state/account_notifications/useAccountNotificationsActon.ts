import { useContext } from "react"
import { useUserState } from "state/user/useUserState"
import notificationService from "services/notifications/useNotifications"
import { AccountNotificationsContext } from "./AccountNotificationsContext"
import {
  AccountNotificationsActionEnum,
  IAccountNotifications,
} from "./accountSettings.types"

export function useAccountNotificationsAction() {
  const { dispatch } = useContext(AccountNotificationsContext)
  const { user } = useUserState()
  const {
    getNotifications: getNotificationsService,
    updateNotification: updateNotificationService,
  } = notificationService()

  const getNotifications = async () => {
    dispatch({
      type: AccountNotificationsActionEnum.GET_NOTIFICATION_BEGIN,
    })

    const { data, error } = await getNotificationsService(user.id)

    if (error) {
      dispatch({
        type: AccountNotificationsActionEnum.GET_NOTIFICATION_FAILURE,
      })

      return
    } else {
      dispatch({
        type: AccountNotificationsActionEnum.GET_NOTIFICATION_SUCCESS,
        payload: data as IAccountNotifications[],
      })

      return
    }
  }

  const updateNotifications = async (payload: IAccountNotifications) => {
    if (!payload) return

    dispatch({
      type: AccountNotificationsActionEnum.UPDATE_NOTIFICATION_BEGIN,
    })

    const { data, error } = await updateNotificationService(user.id, payload)

    if (error) {
      dispatch({
        type: AccountNotificationsActionEnum.UPDATE_NOTIFICATION_FAILURE,
      })

      return
    } else {
      dispatch({
        type: AccountNotificationsActionEnum.UPDATE_NOTIFICATION_SUCCESS,
        payload: data as IAccountNotifications[],
      })
    }
  }

  const clearAccountNotifications = () => {
    dispatch({
      type: AccountNotificationsActionEnum.CLEAR_ACCOUNT_NOTIFICATIONS,
    })
  }

  return {
    getNotifications,
    clearAccountNotifications,
    updateNotifications,
  }
}
