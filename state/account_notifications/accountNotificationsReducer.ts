import {
  AccountNotificationsAction,
  AccountNotificationsActionEnum,
  AccountNotificationsState,
  IAccountNotification,
} from "./accountNotifications.types"

export const accountNotificationsReducer = (
  state: AccountNotificationsState,
  action: AccountNotificationsAction
): AccountNotificationsState => {
  switch (action.type) {
    case AccountNotificationsActionEnum.GET_NOTIFICATIONS_BEGIN:
    case AccountNotificationsActionEnum.UPDATE_NOTIFICATION_BEGIN:
      return {
        ...state,
        loading: true,
        success: false,
      }

    case AccountNotificationsActionEnum.GET_NOTIFICATIONS_FAILURE:
    case AccountNotificationsActionEnum.UPDATE_NOTIFICATION_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
      }

    case AccountNotificationsActionEnum.GET_NOTIFICATIONS_SUCCESS:
      const notification_payload = action.payload as IAccountNotification[]

      return {
        ...state,
        data: notification_payload,
        loading: false,
        success: true,
      }

    case AccountNotificationsActionEnum.UPDATE_NOTIFICATION_SUCCESS:
      const update_notification_payload = action.payload as IAccountNotification

      const update_notification_state = [...state.data].filter(
        (n) => n.id !== update_notification_payload.id
      )

      return {
        ...state,
        data: [...update_notification_state, update_notification_payload],
        loading: false,
        success: true,
      }

    case AccountNotificationsActionEnum.CLEAR_NOTIFICATIONS:
      return {
        ...state,
        data: [] as IAccountNotification[],
      }

    default:
      return state
  }
}
