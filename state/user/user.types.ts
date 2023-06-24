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
    | UserActionEnum.SIGN_IN_BEGIN
    | UserActionEnum.SIGN_IN_FAILURE
    | UserActionEnum.SIGN_IN_SUCCESS
    | UserActionEnum.SIGN_OUT_BEGIN
    | UserActionEnum.SIGN_OUT_FAILURE
    | UserActionEnum.SIGN_OUT_SUCCESS
  payload?: IUser
}

export enum UserActionEnum {
  SIGN_IN_BEGIN = "SIGN_IN_BEGIN",
  SIGN_IN_FAILURE = "SIGN_IN_FAILURE",
  SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
  SIGN_OUT_BEGIN = "SIGN_OUT_BEGIN",
  SIGN_OUT_FAILURE = "SIGN_OUT_FAILURE",
  SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS",
}
