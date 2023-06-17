export interface IUserContext {
  state: UserStateType
  dispatch: ({ type }: UserActionType) => void
}

export type UserType = {
  id: string
  name: string
  account_type: "talent" | "company"
  email: string
  avatar: string
}

export type UserStateType = {
  data: UserType
  loading: boolean
  error: boolean
}

export type UserActionType = {
  type:
    | UserActionEnum.GET_USER_BEGIN
    | UserActionEnum.GET_USER_FAILURE
    | UserActionEnum.GET_USER_SUCCESS
    | UserActionEnum.SIGN_OUT_USER
  payload?: UserType
}

export enum UserActionEnum {
  GET_USER_BEGIN = "GET_USER_BEGIN",
  GET_USER_FAILURE = "GET_USER_FAILURE",
  GET_USER_SUCCESS = "GET_USER_SUCCESS",

  SIGN_OUT_USER = "SIGN_OUT_USER",
}
