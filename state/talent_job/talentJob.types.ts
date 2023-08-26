import { ICompanyProfile } from "state/company_profile/companyProfile.types"
import { ISkill } from "state/talent_profile/talentProfile.types"
import {
  IApplicationVideo,
  IJobVideo,
  ILocation,
} from "state/company_job/companyJob.types"

export interface ITalentJobContext {
  state: TalentJobState
  dispatch: ({ type }: TalentJobAction) => void
}

export type TalentJobState = {
  data: ITalentJob
  loading: boolean
  error: string
  success: boolean
}

export interface ITalentJob {
  id: string
  company_id: string
  title: string
  status: "open"
  salary: string
  location: ILocation
  work_model: string[]
  visa_sponsorship?: boolean
  company_videos: IJobVideo[]
  skills: ISkill[]
  application_video: IApplicationVideo
  company: ICompanyProfile
  created_at: string
  updated_at?: string
}

export type TalentJobAction = {
  type: TalentJobActionEnum.SET_JOB

  payload?: ITalentJob
}

export enum TalentJobActionEnum {
  SET_JOB = "SET_JOB",
}
