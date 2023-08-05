import { ISkill } from "state/skill/skill.types"
import { IUser } from "state/user/user.types"

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
    | TalentProfileActionEnum.UPDATE_SOCIALS
    | TalentProfileActionEnum.UPDATE_LOCATION
    | TalentProfileActionEnum.TOGGLE_SEARCHING
    | TalentProfileActionEnum.ADD_SKILL
    | TalentProfileActionEnum.REMOVE_SKILL
    | TalentProfileActionEnum.UPDATE_SKILL

  payload?:
    | ITalentProfile["socials"]
    | ITalentProfile["preferences"]
    | ISkill[]
    | ITalentProfile["searching"]
}

export enum TalentProfileActionEnum {
  UPDATE_SOCIALS = "UPDATE_SOCIALS",
  UPDATE_LOCATION = "UPDATE_LOCATION",
  TOGGLE_SEARCHING = "TOGGLE_SEARCHING",

  ADD_SKILL = "ADD_SKILL",
  REMOVE_SKILL = "REMOVE_SKILL",
  UPDATE_SKILL = "UPDATE_SKILL",
}
