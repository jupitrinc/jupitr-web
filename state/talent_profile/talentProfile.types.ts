import { IUser } from "state/user/user.types"
import { ProfileVisibility } from "services/_supabase/database"

export interface ITalentProfile extends IUser {
  user_id: string
  searching: boolean
  skills: ISkill[] | null
  socials: { name: string; url: string }[] | null
  intro_video: string | null
  preferences: {}
  visibility: ProfileVisibility | null
  tagline: string | null
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
    | TalentProfileActionEnum.UPDATE_INTRO_VIDEO_BEGIN
    | TalentProfileActionEnum.UPDATE_INTRO_VIDEO_FAILURE
    | TalentProfileActionEnum.UPDATE_INTRO_VIDEO_SUCCESS
    | TalentProfileActionEnum.UPDATE_VISIBILITY
    | TalentProfileActionEnum.UPDATE_TAGLINE

  payload?:
    | ITalentProfile["socials"]
    | ITalentProfile["preferences"]
    | ISkill[]
    | ITalentProfile["searching"]
    | ITalentProfile["intro_video"]
    | ITalentProfile["visibility"]
    | ITalentProfile["tagline"]
}

export enum TalentProfileActionEnum {
  UPDATE_SOCIALS = "UPDATE_SOCIALS",
  UPDATE_LOCATION = "UPDATE_LOCATION",
  TOGGLE_SEARCHING = "TOGGLE_SEARCHING",
  UPDATE_SKILLS = "UPDATE_SKILLS",
  UPDATE_VISIBILITY = "UPDATE_VISIBILITY",
  UPDATE_TAGLINE = "UPDATE_TAGLINE",

  UPDATE_INTRO_VIDEO_BEGIN = "UPDATE_INTRO_VIDEO_BEGIN",
  UPDATE_INTRO_VIDEO_FAILURE = "UPDATE_INTRO_VIDEO_FAILURE",
  UPDATE_INTRO_VIDEO_SUCCESS = "UPDATE_INTRO_VIDEO_SUCCESS",
}

export interface UpdateAllSkillsPayload {
  user_id: ITalentProfile["user_id"]
  talent_skills: ISkill[]
  application_skills: ISkill[]
}

export interface UpdateIntroVideoPayload {
  user_id: ITalentProfile["user_id"]
  file: File
}
