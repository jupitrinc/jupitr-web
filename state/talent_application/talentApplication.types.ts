import { ISkill } from "state/talent_profile/talentProfile.types"

export interface ITalentApplicationContext {
  state: TalentApplicationState
  dispatch: ({ type }: TalentApplicationAction) => void
}

export type TalentApplicationState = {
  loading: boolean
  error: string
  success: boolean
}

export interface ITalentApplication {
  id: string
  job_id: string
  user_id: string
  video_url: string
  created_at: string
}

export type TalentApplicationAction = {
  type:
    | TalentApplicationActionEnum.ADD_APPLICATION_BEGIN
    | TalentApplicationActionEnum.ADD_APPLICATION_FAILURE
    | TalentApplicationActionEnum.ADD_APPLICATION_SUCCESS

  payload?: string
}

export enum TalentApplicationActionEnum {
  ADD_APPLICATION_BEGIN = "ADD_APPLICATION_BEGIN",
  ADD_APPLICATION_FAILURE = "ADD_APPLICATION_FAILURE",
  ADD_APPLICATION_SUCCESS = "ADD_APPLICATION_SUCCESS",
}

export interface AddApplicationPayload {
  file: File
  skills: ISkill[]
  user_id: string
  job_id: string
  company_id: string
}
