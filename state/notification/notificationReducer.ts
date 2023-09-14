import {
  INotification,
  NotificationAction,
  NotificationActionEnum,
  NotificationState,
} from "./notification.types"

export const notificationReducer = (
  state: NotificationState,
  action: NotificationAction
): NotificationState => {
  switch (action.type) {
    case NotificationActionEnum.SHOW_NOTIFICATION:
      const show_notification_payload = action.payload as INotification

      return {
        ...state,
        data: [...state.data, show_notification_payload],
      }

    case NotificationActionEnum.HIDE_NOTIFICATION:
      const hide_notification_payload = action.payload as string

      return {
        ...state,
        data: [...state.data.filter((n) => n.id !== hide_notification_payload)],
      }

    default:
      return state
  }
}
