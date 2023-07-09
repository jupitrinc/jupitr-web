export interface ICompanyJobContext {
  state: CompanyJobState
  dispatch: ({ type }: CompanyJobAction) => void
}

export type CompanyJobState = {
  data: ICompanyJob
  loading: boolean
  error: boolean
}

export interface ICompanyJob {
  id: string
  title: string
  salary: number
  location: string
  work_model: string[]
  visa_sponsorship: boolean
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
  skills: { id: string; name: string; level: number }[]
  company_response_video: { length: number; description: string }
  status: "open" | "closed" | "draft"
  applications?: IJobApplication[]

  // FIXME
  date_posted: any
}

interface IJobApplication {
  id?: string
  job_id: string
  user_id: string
  skills: ISkill
  video_url: string
}

export type ISkill = {
  id: string
  name: string
  level: number
}

export type CompanyJobAction = {
  type: CompanyJobActionEnum.SET_COMPANY_JOB

  payload?: ICompanyJob
}

export enum CompanyJobActionEnum {
  SET_COMPANY_JOB = "SET_COMPANY_JOB",
}
