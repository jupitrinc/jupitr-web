export interface ICompanyMemberProfileContext {
  state: CompanyMemberProfileState
  dispatch: ({ type }: CompanyMemberProfileAction) => void
}

export type CompanyMemberProfileState = {
  data: ICompanyMemberProfile
  loading: boolean
  error: boolean
}

export interface ICompanyMemberProfile {
  user_id: string
  job_title: string
  company_id: string
  permission: string
}

export type CompanyMemberProfileAction = {
  type:
    | CompanyMemberProfileActionEnum.GET_COMPANY_MEMBER_PROFILE_BEGIN
    | CompanyMemberProfileActionEnum.GET_COMPANY_MEMBER_PROFILE_FAILURE
    | CompanyMemberProfileActionEnum.GET_COMPANY_MEMBER_PROFILE_SUCCESS

  payload?: ICompanyMemberProfile
}

export enum CompanyMemberProfileActionEnum {
  GET_COMPANY_MEMBER_PROFILE_BEGIN = "GET_COMPANY_MEMBER_PROFILE_BEGIN",
  GET_COMPANY_MEMBER_PROFILE_FAILURE = "GET_COMPANY_MEMBER_PROFILE_FAILURE",
  GET_COMPANY_MEMBER_PROFILE_SUCCESS = "GET_COMPANY_MEMBER_PROFILE_SUCCESS",
}
