export interface ITalentProfileContext {
  state: TalentProfileStateType
  dispatch: ({ type }: TalentProfileActionType) => void
}

export type TalentProfileType = {
  user_id: string
  active: boolean
  skills: TalentProfileSkill[]
  social_links: string[]
  preferences: {
    location: string[]
    work_model: string[]
    min_salary: number
    industry: string[]
    technical_test: string[]
    visa_sponsorship: boolean
    job_category: string[]
  }
}

export type TalentProfileSkill = {
  id: string
  name: string
  level: number
}

export type TalentProfileStateType = {
  data: TalentProfileType
  loading: boolean
  error: boolean
}

export type TalentProfileActionType = {
  type:
    | TalentProfileActionEnum.GET_PROFILE_BEGIN
    | TalentProfileActionEnum.GET_PROFILE_FAILURE
    | TalentProfileActionEnum.GET_PROFILE_SUCCESS
    | TalentProfileActionEnum.ADD_SKILL
    | TalentProfileActionEnum.REMOVE_SKILL
  payload?: TalentProfileType | TalentProfileSkill
}

export enum TalentProfileActionEnum {
  GET_PROFILE_BEGIN = "GET_PROFILE_BEGIN",
  GET_PROFILE_FAILURE = "GET_PROFILE_FAILURE",
  GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS",

  ADD_SKILL = "ADD_SKILL",
  REMOVE_SKILL = "REMOVE_SKILL",
}
