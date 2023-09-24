import {
  AccountNotificationsAction,
  AccountNotificationsActionEnum,
  AccountNotificationsState,
  IAccountNotifications,
} from "./accountSettings.types"

export const notificationReducer = (
  state: AccountNotificationsState,
  action: AccountNotificationsAction
): AccountNotificationsState => {
  switch (action.type) {
    case AccountNotificationsActionEnum.GET_NOTIFICATION_BEGIN:
      return {
        ...state,
        loading: true,
        success: false,
      }

    case AccountNotificationsActionEnum.GET_NOTIFICATION_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
      }

    case AccountNotificationsActionEnum.GET_NOTIFICATION_SUCCESS:
      const notification_payload = action.payload as IAccountNotifications[]

      return {
        ...state,
        data: notification_payload,
        loading: false,
        success: true,
      }

    case AccountNotificationsActionEnum.CLEAR_ACCOUNT_NOTIFICATIONS:
      return {
        ...state,
        data: [] as IAccountNotifications[],
      }

    default:
      return state
  }
}
