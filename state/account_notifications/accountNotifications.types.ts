export interface IAccountNotificationsContext {
  state: AccountNotificationsState
  dispatch: ({ type }: AccountNotificationsAction) => void
}

export type AccountNotificationsState = {
  data: IAccountNotification[]
  loading: boolean
  success: boolean
}

export interface IAccountNotification {
  id: string
  user_id: string
  company_id?: string
  active: boolean
  alert: NotificationTypeEnum
  interval?: "daily" | "weekly" | null | undefined
  type: ["email"]
  updated_at: string
  created_at: string
}

export enum NotificationTypeEnum {
  JOB_ALERT = "job_alert",
  APPLICATIONS_ALERT = "applications_alert",
}

export type AccountNotificationsAction = {
  type:
    | AccountNotificationsActionEnum.GET_NOTIFICATIONS_BEGIN
    | AccountNotificationsActionEnum.GET_NOTIFICATIONS_FAILURE
    | AccountNotificationsActionEnum.GET_NOTIFICATIONS_SUCCESS
    | AccountNotificationsActionEnum.UPDATE_NOTIFICATION_BEGIN
    | AccountNotificationsActionEnum.UPDATE_NOTIFICATION_FAILURE
    | AccountNotificationsActionEnum.UPDATE_NOTIFICATION_SUCCESS
    | AccountNotificationsActionEnum.CLEAR_NOTIFICATIONS

  payload?: IAccountNotification[] | IAccountNotification
}

export enum AccountNotificationsActionEnum {
  GET_NOTIFICATIONS_BEGIN = "GET_NOTIFICATIONS_BEGIN",
  GET_NOTIFICATIONS_FAILURE = "GET_NOTIFICATIONS_FAILURE",
  GET_NOTIFICATIONS_SUCCESS = "GET_NOTIFICATIONS_SUCCESS",

  UPDATE_NOTIFICATION_BEGIN = "UPDATE_NOTIFICATION_BEGIN",
  UPDATE_NOTIFICATION_FAILURE = "UPDATE_NOTIFICATION_FAILURE",
  UPDATE_NOTIFICATION_SUCCESS = "UPDATE_NOTIFICATION_SUCCESS",

  CLEAR_NOTIFICATIONS = "CLEAR_NOTIFICATIONS",
}

export interface UpdateNotificationPayload {
  id: string
  active: boolean
}
