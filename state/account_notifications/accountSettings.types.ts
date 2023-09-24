export interface IAccountNotificationsContext {
  state: AccountNotificationsState
  dispatch: ({ type }: AccountNotificationsAction) => void
}

export type AccountNotificationsState = {
  data: IAccountNotifications[]
  loading: boolean
  success: boolean
}

export interface IAccountNotifications {
  active: boolean
  alert: NotificationTypeEnum
  created_at: string
  id: string
  interval: "daily" | "weekly" | null | undefined
  type: ["email"]
  updated_at: string
  user_id: string
}

export enum NotificationTypeEnum {
  JOB_ALERT = "job_alert",
  COLLAB_ALERT = "collab_alert",
  APPLICATIONS_ALERT = "applications_alert",
}

export type AccountNotificationsAction = {
  type:
    | AccountNotificationsActionEnum.GET_NOTIFICATION_BEGIN
    | AccountNotificationsActionEnum.GET_NOTIFICATION_FAILURE
    | AccountNotificationsActionEnum.GET_NOTIFICATION_SUCCESS
    | AccountNotificationsActionEnum.UPDATE_NOTIFICATION_BEGIN
    | AccountNotificationsActionEnum.UPDATE_NOTIFICATION_FAILURE
    | AccountNotificationsActionEnum.UPDATE_NOTIFICATION_SUCCESS
    | AccountNotificationsActionEnum.CLEAR_ACCOUNT_NOTIFICATIONS

  payload?: IAccountNotifications[]
}

export enum AccountNotificationsActionEnum {
  GET_NOTIFICATION_BEGIN = "GET_NOTIFICATION_BEGIN",
  GET_NOTIFICATION_FAILURE = "GET_NOTIFICATION_FAILURE",
  GET_NOTIFICATION_SUCCESS = "GET_NOTIFICATION_SUCCESS",

  UPDATE_NOTIFICATION_BEGIN = "UPDATE_NOTIFICATION_BEGIN",
  UPDATE_NOTIFICATION_FAILURE = "UPDATE_NOTIFICATION_FAILURE",
  UPDATE_NOTIFICATION_SUCCESS = "UPDATE_NOTIFICATION_SUCCESS",

  CLEAR_ACCOUNT_NOTIFICATIONS = "CLEAR_ACCOUNT_NOTIFICATIONS",
}
