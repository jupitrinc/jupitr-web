export interface IUserContext {
  state: UserState
  dispatch: ({ type }: UserAction) => void
}

export interface IUser {
  id: string
  name: string
  account_type: string
  email: string
  avatar_url: string
  created_at: string
  updated_at: string
}

export enum AccountTypeEnum {
  talent = "talent",
  company = "company",
}

export enum AccountPermissionEnum {
  read = "read",
  write = "write",
}

export type UserState = {
  data: IUser
  loading: boolean
  error: boolean
}

export type UserAction = {
  type:
    | UserActionEnum.SIGN_IN_BEGIN
    | UserActionEnum.SIGN_IN_FAILURE
    | UserActionEnum.SIGN_IN_SUCCESS
    | UserActionEnum.SIGN_OUT
  payload?: IUser
}

export enum UserActionEnum {
  SIGN_IN_BEGIN = "SIGN_IN_BEGIN",
  SIGN_IN_FAILURE = "SIGN_IN_FAILURE",
  SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",

  SIGN_OUT = "SIGN_OUT",
}
