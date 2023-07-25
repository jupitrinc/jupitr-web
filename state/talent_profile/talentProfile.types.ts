import { ISkill } from "state/skill/skill.types"

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
  active: boolean
  skills: ISkill[]
  socials: string[]
  preferences: {
    location: { id: string; name: string }
  }
}

export type TalentProfileAction = {
  type:
    | TalentProfileActionEnum.GET_TALENT_PROFILE_BEGIN
    | TalentProfileActionEnum.GET_TALENT_PROFILE_FAILURE
    | TalentProfileActionEnum.GET_TALENT_PROFILE_SUCCESS
    | TalentProfileActionEnum.ADD_SKILL
    | TalentProfileActionEnum.REMOVE_SKILL

  payload?: ITalentProfile | ISkill
}

export enum TalentProfileActionEnum {
  GET_TALENT_PROFILE_BEGIN = "GET_TALENT_PROFILE_BEGIN",
  GET_TALENT_PROFILE_FAILURE = "GET_TALENT_PROFILE_FAILURE",
  GET_TALENT_PROFILE_SUCCESS = "GET_TALENT_PROFILE_SUCCESS",

  ADD_SKILL = "ADD_SKILL",
  REMOVE_SKILL = "REMOVE_SKILL",
}
