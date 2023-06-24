export interface ITalentProfileContext {
  state: TalentProfileStateType
  dispatch: ({ type }: TalentProfileActionType) => void
}

export type TalentProfileStateType = {
  data: ITalentProfile
  loading: boolean
  error: boolean
}

export interface ITalentProfile {
  user_id: string
  active: boolean
  skills: TalentProfileSkill[]
  social_links: string[]
  preferences: {
    location: string[]
    work_model: string[]
    min_salary: number
    industry: TalentProfileIndustry[]
    technical_test: string[]
    visa_sponsorship: boolean
    job_category: TalentProfileJobCategory[]
  }
}

export type TalentProfileSkill = {
  id: string
  name: string
  level: number
}

export type TalentProfileJobCategory = {
  id: string
  name: string
}
export type TalentProfileIndustry = {
  id: string
  name: string
}

export type TalentProfileActionType = {
  type:
    | TalentProfileActionEnum.GET_PROFILE_BEGIN
    | TalentProfileActionEnum.GET_PROFILE_FAILURE
    | TalentProfileActionEnum.GET_PROFILE_SUCCESS
    | TalentProfileActionEnum.ADD_SKILL
    | TalentProfileActionEnum.REMOVE_SKILL
    | TalentProfileActionEnum.ADD_JOB_CATEGORY
    | TalentProfileActionEnum.REMOVE_JOB_CATEGORY
    | TalentProfileActionEnum.ADD_INDUSTRY
    | TalentProfileActionEnum.REMOVE_INDUSTRY
    | TalentProfileActionEnum.ADD_WORK_MODEL
    | TalentProfileActionEnum.REMOVE_WORK_MODEL
    | TalentProfileActionEnum.ADD_LOCATION
    | TalentProfileActionEnum.REMOVE_LOCATION
    | TalentProfileActionEnum.ADD_TECH_TEST
    | TalentProfileActionEnum.REMOVE_TECH_TEST
    | TalentProfileActionEnum.TOGGLE_VISA_SPONSORSHIP
    | TalentProfileActionEnum.UPDATE_SALARY
  payload?:
    | ITalentProfile
    | TalentProfileSkill
    | TalentProfileJobCategory
    | TalentProfileIndustry
    | string
    | boolean
    | number
}

export enum TalentProfileActionEnum {
  GET_PROFILE_BEGIN = "GET_PROFILE_BEGIN",
  GET_PROFILE_FAILURE = "GET_PROFILE_FAILURE",
  GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS",

  ADD_SKILL = "ADD_SKILL",
  REMOVE_SKILL = "REMOVE_SKILL",

  ADD_JOB_CATEGORY = "ADD_JOB_CATEGORY",
  REMOVE_JOB_CATEGORY = "REMOVE_JOB_CATEGORY",

  ADD_INDUSTRY = "ADD_INDUSTRY",
  REMOVE_INDUSTRY = "REMOVE_INDUSTRY",

  ADD_WORK_MODEL = "ADD_WORK_MODEL",
  REMOVE_WORK_MODEL = "REMOVE_WORK_MODEL",

  ADD_LOCATION = "DD_LOCATION",
  REMOVE_LOCATION = "REMOVE_LOCATION",

  ADD_TECH_TEST = "ADD_TECH_TEST",
  REMOVE_TECH_TEST = "REMOVE_TECH_TEST",

  TOGGLE_VISA_SPONSORSHIP = "TOGGLE_VISA_SPONSORSHIP",

  UPDATE_SALARY = "UPDATE_SALARY",
}
