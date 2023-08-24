import { CompanyMemberPermission } from "state/company_member_profile/companyMemberProfile.types"
import { ISuperUser } from "state/user/user.types"

export interface ICompanyMembersContext {
  state: CompanyMembersState
  dispatch: ({ type }: CompanyMembersAction) => void
}

export type CompanyMembersState = {
  data: ICompanyMember[]
  loading: boolean
  error: string
}

export interface ICompanyMember {
  user_id: string
  name: string
  avatar_url: string
  job_title: string
  permission: CompanyMemberPermission
}

export type CompanyMembersAction = {
  type:
    | CompanyMembersActionEnum.GET_MEMBERS_BEGIN
    | CompanyMembersActionEnum.GET_MEMBERS_FAILURE
    | CompanyMembersActionEnum.GET_MEMBERS_SUCCESS
    | CompanyMembersActionEnum.UPDATE_MEMBER_ROLE_BEGIN
    | CompanyMembersActionEnum.UPDATE_MEMBER_ROLE_FAILURE
    | CompanyMembersActionEnum.UPDATE_MEMBER_ROLE_SUCCESS
    | CompanyMembersActionEnum.ADD_MEMBER_BEGIN
    | CompanyMembersActionEnum.ADD_MEMBER_FAILURE
    | CompanyMembersActionEnum.ADD_MEMBER_SUCCESS
    | CompanyMembersActionEnum.CLEAR_MEMBERS

  payload?: ICompanyMember[] | ICompanyMember | string
}

export enum CompanyMembersActionEnum {
  GET_MEMBERS_BEGIN = "GET_MEMBERS_BEGIN",
  GET_MEMBERS_FAILURE = "GET_MEMBERS_FAILURE",
  GET_MEMBERS_SUCCESS = "GET_MEMBERS_SUCCESS",

  UPDATE_MEMBER_ROLE_BEGIN = "UPDATE_MEMBER_ROLE_BEGIN",
  UPDATE_MEMBER_ROLE_FAILURE = "UPDATE_MEMBER_ROLE_FAILURE",
  UPDATE_MEMBER_ROLE_SUCCESS = "UPDATE_MEMBER_ROLE_SUCCESS",

  ADD_MEMBER_BEGIN = "ADD_MEMBER_BEGIN",
  ADD_MEMBER_FAILURE = "ADD_MEMBER_FAILURE",
  ADD_MEMBER_SUCCESS = "ADD_MEMBER_SUCCESS",

  CLEAR_MEMBERS = "CLEAR_MEMBERS",
}

export interface UpdateRolePayload {
  company_id: ISuperUser["company_id"]
  user_id: ICompanyMember["user_id"]
  permission: ICompanyMember["permission"]
}

export interface AddCompanyMemberPayload {
  email: string
  companyId: string
  permission: CompanyMemberPermission
}
