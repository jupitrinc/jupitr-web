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
  application_video: { duration: string; description: string }
  company_videos: IJobVideo[]

  applications?: IJobApplication[]
  created_at: string
  updated_at?: string
}

export enum JobStatusEnum {
  open = "open",
  closed = "closed",
  draft = "draft",
  archived = "archived",
}

interface ILocation {
  id: string
  name: string
}

export interface IJobVideo {
  id: string
  job_id: string
  user_id: string
  video_url: string
  created_at: string
  company_member_profile: {
    job_title: string
    users: {
      name: string
    }
  }
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
    | CompanyJobActionEnum.CLEAR_COMPANY_JOB
    | CompanyJobActionEnum.UPDATE_COMPANY_JOB_TITLE
    | CompanyJobActionEnum.UPDATE_COMPANY_JOB_SALARY
    | CompanyJobActionEnum.UPDATE_COMPANY_JOB_WORK_MODEL
    | CompanyJobActionEnum.UPDATE_COMPANY_JOB_LOCATION
    | CompanyJobActionEnum.UPDATE_COMPANY_JOB_SKILLS
    | CompanyJobActionEnum.UPDATE_COMPANY_JOB_APPLICATION_VIDEO
    | CompanyJobActionEnum.DELETE_JOB_VIDEO

  payload?:
    | ICompanyJob
    | string
    | ICompanyJob["work_model"]
    | ICompanyJob["location"]
    | ICompanyJob["skills"]
    | ICompanyJob["application_video"]
}

export enum CompanyJobActionEnum {
  ADD_COMPANY_JOB_BEGIN = "ADD_COMPANY_JOB_BEGIN",
  ADD_COMPANY_JOB_FAILURE = "ADD_COMPANY_JOB_FAILURE",
  ADD_COMPANY_JOB_SUCCESS = "ADD_COMPANY_JOB_SUCCESS",

  GET_COMPANY_JOB_BEGIN = "GET_COMPANY_JOB_BEGIN",
  GET_COMPANY_JOB_FAILURE = "GET_COMPANY_JOB_FAILURE",
  GET_COMPANY_JOB_SUCCESS = "GET_COMPANY_JOB_SUCCESS",

  CLEAR_COMPANY_JOB = "CLEAR_COMPANY_JOB",

  UPDATE_COMPANY_JOB_TITLE = "UPDATE_COMPANY_JOB_TITLE",
  UPDATE_COMPANY_JOB_SALARY = "UPDATE_COMPANY_JOB_SALARY",
  UPDATE_COMPANY_JOB_WORK_MODEL = "UPDATE_COMPANY_JOB_WORK_MODEL",
  UPDATE_COMPANY_JOB_LOCATION = "UPDATE_COMPANY_JOB_LOCATION",
  UPDATE_COMPANY_JOB_SKILLS = "UPDATE_COMPANY_JOB_SKILLS",
  UPDATE_COMPANY_JOB_APPLICATION_VIDEO = "UPDATE_COMPANY_JOB_APPLICATION_VIDEO",

  DELETE_JOB_VIDEO = "DELETE_JOB_VIDEO",
}
