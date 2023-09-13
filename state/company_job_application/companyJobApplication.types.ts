import { ICompanyJob } from "state/company_job/companyJob.types"
import { ISkill } from "state/talent_profile/talentProfile.types"

export interface ICompanyJobApplicationContext {
  state: CompanyJobApplicationState
  dispatch: ({ type }: CompanyJobApplicationAction) => void
}

export type CompanyJobApplicationState = {
  data: ICompanyJobApplication
  loading: boolean
  success: boolean
}

export interface ICompanyJobApplication
  extends Omit<ICompanyJob, "applications"> {
  applications: IApplication[]
}

export interface IApplication {
  id: string
  job_id: string
  user_id: string
  video_url: string
  status: string
  skills: ISkill[]
  created_at: string
  updated_at: string
  users: IApplicant
}

interface IApplicant {
  name: string
  email: string
  talent_profile: {
    socials: string[]
  }
}

export type CompanyJobApplicationAction = {
  type:
    | CompanyJobApplicationActionEnum.GET_APPLICATIONS_BEGIN
    | CompanyJobApplicationActionEnum.GET_APPLICATIONS_FAILURE
    | CompanyJobApplicationActionEnum.GET_APPLICATIONS_SUCCESS
    | CompanyJobApplicationActionEnum.CLEAR_APPLICATIONS

  payload?:
    | ICompanyJobApplication
    | ICompanyJobApplication[]
    | string
    | ICompanyJobApplication["status"]
}

export enum CompanyJobApplicationActionEnum {
  GET_APPLICATIONS_BEGIN = "GET_APPLICATIONS_BEGIN",
  GET_APPLICATIONS_FAILURE = "GET_APPLICATIONS_FAILURE",
  GET_APPLICATIONS_SUCCESS = "GET_APPLICATIONS_SUCCESS",

  CLEAR_APPLICATIONS = "CLEAR_APPLICATIONS",
}
