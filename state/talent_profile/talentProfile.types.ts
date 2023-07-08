import { ISkill } from "state/company_job/companyJob.types"

export interface ITalentProfileContext {
  state: TalentProfileState
  dispatch: ({ type }: TalentProfileAction) => void
}

export type TalentProfileState = {
  data: ITalentProfile
  loading: boolean
  error: boolean
}

export interface ITalentProfile {
  user_id: string
  active: boolean
  skills: ISkill[]
  social_links: string[]
  preferences: {
    location: string[]
    work_model: string[]
    min_salary: number
    industry: string[]
    technical_test: string[]
  }
}

export type TalentProfileAction = {
  type:
    | TalentProfileActionEnum.GET_TALENT_PROFILE_BEGIN
    | TalentProfileActionEnum.GET_TALENT_PROFILE_FAILURE
    | TalentProfileActionEnum.GET_TALENT_PROFILE_SUCCESS
    | TalentProfileActionEnum.ADD_SKILL
    | TalentProfileActionEnum.REMOVE_SKILL
    | TalentProfileActionEnum.ADD_INDUSTRY
    | TalentProfileActionEnum.REMOVE_INDUSTRY
    | TalentProfileActionEnum.ADD_WORK_MODEL
    | TalentProfileActionEnum.REMOVE_WORK_MODEL
    | TalentProfileActionEnum.ADD_LOCATION
    | TalentProfileActionEnum.REMOVE_LOCATION
    | TalentProfileActionEnum.ADD_TECH_TEST
    | TalentProfileActionEnum.REMOVE_TECH_TEST
    | TalentProfileActionEnum.UPDATE_SALARY
  payload?: ITalentProfile | ISkill | string | boolean | number
}

export enum TalentProfileActionEnum {
  GET_TALENT_PROFILE_BEGIN = "GET_TALENT_PROFILE_BEGIN",
  GET_TALENT_PROFILE_FAILURE = "GET_TALENT_PROFILE_FAILURE",
  GET_TALENT_PROFILE_SUCCESS = "GET_TALENT_PROFILE_SUCCESS",

  ADD_SKILL = "ADD_SKILL",
  REMOVE_SKILL = "REMOVE_SKILL",

  ADD_INDUSTRY = "ADD_INDUSTRY",
  REMOVE_INDUSTRY = "REMOVE_INDUSTRY",

  ADD_WORK_MODEL = "ADD_WORK_MODEL",
  REMOVE_WORK_MODEL = "REMOVE_WORK_MODEL",

  ADD_LOCATION = "DD_LOCATION",
  REMOVE_LOCATION = "REMOVE_LOCATION",

  ADD_TECH_TEST = "ADD_TECH_TEST",
  REMOVE_TECH_TEST = "REMOVE_TECH_TEST",

  UPDATE_SALARY = "UPDATE_SALARY",
}
