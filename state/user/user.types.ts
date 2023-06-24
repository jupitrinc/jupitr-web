export interface IUserContext {
  state: UserStateType
  dispatch: ({ type }: UserActionType) => void
}

export interface IUser {
  id: string
  name: string
  account_type: "talent" | "company"
  email: string
  avatar: string
}

export type UserStateType = {
  data: IUser
  loading: boolean
  error: boolean
}

export type UserActionType = {
  type:
    | UserActionEnum.GET_USER_BEGIN
    | UserActionEnum.GET_USER_FAILURE
    | UserActionEnum.GET_USER_SUCCESS
    | UserActionEnum.SIGN_OUT_USER
  payload?: IUser
}

export enum UserActionEnum {
  GET_USER_BEGIN = "GET_USER_BEGIN",
  GET_USER_FAILURE = "GET_USER_FAILURE",
  GET_USER_SUCCESS = "GET_USER_SUCCESS",

  SIGN_OUT_USER = "SIGN_OUT_USER",
}
