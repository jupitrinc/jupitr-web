export interface INotificationContext {
  state: NotificationState
  dispatch: ({ type }: NotificationAction) => void
}

export type NotificationState = {
  data: INotification[]
}

export interface INotification {
  id: string
  message: string
  type: "warning" | "info" | "success"
}

export type NotificationAction = {
  type:
    | NotificationActionEnum.SHOW_NOTIFICATION
    | NotificationActionEnum.HIDE_NOTIFICATION

  payload?: INotification | INotification["id"]
}

export enum NotificationActionEnum {
  SHOW_NOTIFICATION = "SHOW_NOTIFICATION",
  HIDE_NOTIFICATION = "HIDE_NOTIFICATION",
}
