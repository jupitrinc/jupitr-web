export interface ITalentProfileContext {
  state: TalentProfileStateType
  dispatch: ({ type }: TalentProfileActionType) => void
}

export type TalentProfileType = {
  user_id: string
  active: boolean
  skills: {
    id: string
    name: string
    level: number
  }[]
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

export type TalentProfileStateType = {
  data: TalentProfileType
  loading: boolean
  error: boolean
}

export type TalentProfileActionType = {
  type:
    | TalentProfileActionEnum.GET_TALENT_PROFILE_BEGIN
    | TalentProfileActionEnum.GET_TALENT_PROFILE_FAILURE
    | TalentProfileActionEnum.GET_TALENT_PROFILE_SUCCESS
  payload?: TalentProfileType
}

export enum TalentProfileActionEnum {
  GET_TALENT_PROFILE_BEGIN = "GET_TALENT_PROFILE_BEGIN",
  GET_TALENT_PROFILE_FAILURE = "GET_TALENT_PROFILE_FAILURE",
  GET_TALENT_PROFILE_SUCCESS = "GET_TALENT_PROFILE_SUCCESS",
}
