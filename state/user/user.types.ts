export interface UserContextInterface {
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
    | UserActionEnum.FETCH_USER_BEGIN
    | UserActionEnum.FETCH_USER_FAILURE
    | UserActionEnum.FETCH_USER_SUCCESS
  payload?: UserType
}

export enum UserActionEnum {
  FETCH_USER_BEGIN = "FETCH_USER_BEGIN",
  FETCH_USER_FAILURE = "FETCH_USER_FAILURE",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
}
