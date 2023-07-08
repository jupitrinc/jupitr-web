import { ISkill } from "state/company_job/companyJob.types"
import { ICompanyProfile } from "state/company_profile/companyProfile.types"

export interface ITalentJobContext {
  state: TalentJobState
  dispatch: ({ type }: TalentJobAction) => void
}

export type TalentJobState = {
  data: ITalentJob
  loading: boolean
  error: boolean
}

export interface ITalentJob {
  id: string
  title: string
  salary: number
  currency: string
  location: string
  work_model: string[]
  interview_steps: string[]
  videos: {
    id: string
    job_id: string
    company_member_profile: {
      user_id: string
      name: string
      job_title: string
    }

    video_url: string
  }[]
  technical_test: string[]
  skills: ISkill[]
  talent_response_video: { length: number; description: string }
  active: boolean
  company: ICompanyProfile

  // FIXME
  date_posted: any
}

export type TalentJobAction = {
  type: TalentJobActionEnum.SET_TALENT_JOB

  payload?: ITalentJob
}

export enum TalentJobActionEnum {
  SET_TALENT_JOB = "SET_TALENT_JOB",
}
