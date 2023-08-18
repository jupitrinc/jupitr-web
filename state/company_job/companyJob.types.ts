import { ISkill } from "state/talent_profile/talentProfile.types"

export interface ICompanyJobContext {
  state: CompanyJobState
  dispatch: ({ type }: CompanyJobAction) => void
}

export type CompanyJobState = {
  data: ICompanyJob
  loading: boolean
  error: string
}

export interface ICompanyJob {
  id: string
  company_id: string
  title: string
  salary: string
  status: "open" | "closed" | "draft" | "archived"
  location: ILocation
  work_model: string[]
  visa_sponsorship: boolean
  skills: { id: string; name: string; level: number }[]
  application_video: { duration: number; description: string }
  videos?: {
    id: string
    job_id: string
    company_member_profile: {
      user_id: string
      name: string
      job_title: string
    }

    video_url: string
  }[]

  applications?: IJobApplication[]
  created_at: string
  updated_at?: string
}

interface ILocation {
  id: string
  name: string
}

export interface IJobApplication {
  id: string
  job_id: string
  skills: ISkill[]
  video_url: string
  talent_profile: {
    name: string
    email: string
    social_links: string[]
    avatar: string
  }
}

export type CompanyJobAction = {
  type:
    | CompanyJobActionEnum.ADD_COMPANY_JOB_BEGIN
    | CompanyJobActionEnum.ADD_COMPANY_JOB_FAILURE
    | CompanyJobActionEnum.ADD_COMPANY_JOB_SUCCESS
    | CompanyJobActionEnum.GET_COMPANY_JOB_BEGIN
    | CompanyJobActionEnum.GET_COMPANY_JOB_FAILURE
    | CompanyJobActionEnum.GET_COMPANY_JOB_SUCCESS
    | CompanyJobActionEnum.UPDATE_COMPANY_JOB_TITLE
    | CompanyJobActionEnum.UPDATE_COMPANY_JOB_SALARY
    | CompanyJobActionEnum.UPDATE_COMPANY_JOB_WORK_MODEL
    | CompanyJobActionEnum.UPDATE_COMPANY_JOB_LOCATION
    | CompanyJobActionEnum.ADD_COMPANY_JOB_SKILL
    | CompanyJobActionEnum.REMOVE_COMPANY_JOB_SKILL
    | CompanyJobActionEnum.UPDATE_COMPANY_JOB_SKILL

  payload?:
    | ICompanyJob
    | string
    | ICompanyJob["work_model"]
    | ICompanyJob["location"]
    | ICompanyJob["skills"]
}

export enum CompanyJobActionEnum {
  ADD_COMPANY_JOB_BEGIN = "ADD_COMPANY_JOB_BEGIN",
  ADD_COMPANY_JOB_FAILURE = "ADD_COMPANY_JOB_FAILURE",
  ADD_COMPANY_JOB_SUCCESS = "ADD_COMPANY_JOB_SUCCESS",

  GET_COMPANY_JOB_BEGIN = "GET_COMPANY_JOB_BEGIN",
  GET_COMPANY_JOB_FAILURE = "GET_COMPANY_JOB_FAILURE",
  GET_COMPANY_JOB_SUCCESS = "GET_COMPANY_JOB_SUCCESS",

  UPDATE_COMPANY_JOB_TITLE = "UPDATE_COMPANY_JOB_TITLE",
  UPDATE_COMPANY_JOB_SALARY = "UPDATE_COMPANY_JOB_SALARY",
  UPDATE_COMPANY_JOB_WORK_MODEL = "UPDATE_COMPANY_JOB_WORK_MODEL",
  UPDATE_COMPANY_JOB_LOCATION = "UPDATE_COMPANY_JOB_LOCATION",

  ADD_COMPANY_JOB_SKILL = "ADD_COMPANY_JOB_SKILL",
  REMOVE_COMPANY_JOB_SKILL = "REMOVE_COMPANY_JOB_SKILL",
  UPDATE_COMPANY_JOB_SKILL = "UPDATE_COMPANY_JOB_SKILL",
}
