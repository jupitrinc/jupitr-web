import { IUser } from "state/user/user.types"

export interface ITalentProfile extends IUser {
  user_id: string
  searching: boolean
  skills: ISkill[] | null
  socials: { name: string; url: string }[] | null
  preferences: {
    location: { id: string; name: string }
  }
}

export type ISkill = {
  id: string
  name: string
  level: number
}

export type TalentProfileAction = {
  type:
    | TalentProfileActionEnum.UPDATE_SOCIALS
    | TalentProfileActionEnum.UPDATE_LOCATION
    | TalentProfileActionEnum.TOGGLE_SEARCHING
    | TalentProfileActionEnum.UPDATE_SKILLS

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
  UPDATE_SKILLS = "UPDATE_SKILLS",
}

export interface UpdateAllSkillsPayload {
  user_id: ITalentProfile["user_id"]
  talent_skills: ISkill[]
  application_skills: ISkill[]
}
