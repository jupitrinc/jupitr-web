export interface IUserContext {
  state: UserState
  dispatch: ({ type }: UserAction) => void
}

export interface IUser {
  id: string
  updated_at?: string
  avatar_url: string
  name: string
  active: boolean
}
export interface ICompanyMemberProfile {
  //company member profile
  job_title: string
  company_id: number
  roles: number
}
export interface ITalentProfile {
  // talent profile
  skills: object[]
  socials: object[]
  preferences: object[]
  jobs: object[]
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
