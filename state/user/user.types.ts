import { User } from "@supabase/supabase-js"
import {
  CompanyMemberProfileAction,
  ICompanyMemberProfile,
} from "state/company_member_profile/companyMemberProfile.types"
import {
  ITalentProfile,
  TalentProfileAction,
} from "state/talent_profile/talentProfile.types"

export interface IUserContext {
  state: UserState
  dispatch: ({
    type,
  }: UserAction | TalentProfileAction | CompanyMemberProfileAction) => void
}

export interface IUser {
  id: string
  avatar_url: string
  name: string
  account_type: string
  email: string
  active: boolean
  created_at: string
  updated_at?: string
}

export enum AccountTypeEnum {
  talent = "talent",
  company = "company",
}

export type ISuperUser = ITalentProfile & ICompanyMemberProfile

export type UserState = {
  data: ISuperUser
  loading: boolean
  error: string
}

export type UserAction = {
  type:
    | UserActionEnum.SIGN_IN_BEGIN
    | UserActionEnum.SIGN_IN_FAILURE
    | UserActionEnum.SIGN_IN_SUCCESS
    | UserActionEnum.COMPANY_SIGN_UP_BEGIN
    | UserActionEnum.COMPANY_SIGN_UP_FAILURE
    | UserActionEnum.COMPANY_SIGN_UP_SUCCESS
    | UserActionEnum.GET_USER_BEGIN
    | UserActionEnum.GET_USER_FAILURE
    | UserActionEnum.GET_USER_SUCCESS
    | UserActionEnum.SIGN_OUT
    | UserActionEnum.UPDATE_NAME
    | UserActionEnum.UPDATE_EMAIL_BEGIN
    | UserActionEnum.UPDATE_EMAIL_SUCCESS
    | UserActionEnum.UPDATE_EMAIL_FAILURE
    | UserActionEnum.UPDATE_AVATAR
    | UserActionEnum.TOGGLE_ACTIVE
    | UserActionEnum.DELETE_USER_BEGIN
    | UserActionEnum.DELETE_USER_FAILURE
    | UserActionEnum.DELETE_USER_SUCCESS
    | UserActionEnum.REQUEST_EMAIL_UPDATE_BEGIN
    | UserActionEnum.REQUEST_EMAIL_UPDATE_SUCCESS
    | UserActionEnum.REQUEST_EMAIL_UPDATE_FAILURE
  payload?: IUser | IUser["name"] | IUser["active"] | User
}

export enum UserActionEnum {
  SIGN_IN_BEGIN = "SIGN_IN_BEGIN",
  SIGN_IN_FAILURE = "SIGN_IN_FAILURE",
  SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",

  COMPANY_SIGN_UP_BEGIN = "COMPANY_SIGN_UP_BEGIN",
  COMPANY_SIGN_UP_FAILURE = "COMPANY_SIGN_UP_FAILURE",
  COMPANY_SIGN_UP_SUCCESS = "COMPANY_SIGN_UP_SUCCESS",

  GET_USER_BEGIN = "GET_USER_BEGIN",
  GET_USER_FAILURE = "GET_USER_FAILURE",
  GET_USER_SUCCESS = "GET_USER_SUCCESS",

  SIGN_OUT = "SIGN_OUT",

  UPDATE_NAME = "UPDATE_NAME",
  UPDATE_AVATAR = "UPDATE_AVATAR",

  REQUEST_EMAIL_UPDATE_BEGIN = "REQUEST_EMAIL_UPDATE_BEGIN",
  REQUEST_EMAIL_UPDATE_SUCCESS = "REQUEST_EMAIL_UPDATE_SUCCESS",
  REQUEST_EMAIL_UPDATE_FAILURE = "REQUEST_EMAIL_UPDATE_FAILURE",

  UPDATE_EMAIL_BEGIN = "UPDATE_EMAIL_BEGIN",
  UPDATE_EMAIL_SUCCESS = "UPDATE_EMAIL_SUCCESS",
  UPDATE_EMAIL_FAILURE = "UPDATE_EMAIL_FAILURE",

  TOGGLE_ACTIVE = "TOGGLE_ACTIVE",

  DELETE_USER_BEGIN = "DELETE_USER_BEGIN",
  DELETE_USER_FAILURE = "DELETE_USER_FAILURE",
  DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS",
}
