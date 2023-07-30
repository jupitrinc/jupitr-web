import { ISkill } from "state/skill/skill.types"
import { IUser } from "state/user/user.types"

export interface ITalentProfileContext {
  state: TalentProfileState
  dispatch: ({ type }: TalentProfileAction) => void
}

export type TalentProfileState = {
  data: ITalentProfile
  loading: boolean
  error: string
}

export interface ITalentProfile extends IUser {
  user_id: string
  searching: boolean
  skills: ISkill[]
  socials: string[]
  preferences: {
    location: { id: string; name: string }
  }
}

export type TalentProfileAction = {
  type:
    | TalentProfileActionEnum.SET_TALENT_PROFILE_BEGIN
    | TalentProfileActionEnum.SET_TALENT_PROFILE_FAILURE
    | TalentProfileActionEnum.SET_TALENT_PROFILE_SUCCESS
    | TalentProfileActionEnum.ADD_SKILL
    | TalentProfileActionEnum.REMOVE_SKILL

  payload?: ITalentProfile | ISkill | string
}

export enum TalentProfileActionEnum {
  SET_TALENT_PROFILE_BEGIN = "SET_TALENT_PROFILE_BEGIN",
  SET_TALENT_PROFILE_FAILURE = "SET_TALENT_PROFILE_FAILURE",
  SET_TALENT_PROFILE_SUCCESS = "SET_TALENT_PROFILE_SUCCESS",

  ADD_SKILL = "ADD_SKILL",
  REMOVE_SKILL = "REMOVE_SKILL",
}
