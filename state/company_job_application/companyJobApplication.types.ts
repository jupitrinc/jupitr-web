import { ICompanyJob, ILocation } from "state/company_job/companyJob.types"
import {
  ISkill,
  ITalentProfile,
} from "state/talent_profile/talentProfile.types"
import { IUser } from "state/user/user.types"

export interface ICompanyJobApplicationContext {
  state: CompanyJobApplicationState
  dispatch: ({ type }: CompanyJobApplicationAction) => void
}

export type CompanyJobApplicationState = {
  data: ICompanyJobApplication
  loading: boolean
  error: string
}

export interface ICompanyJobApplication {
  id: string
  company_id: string
  title: string
  status: string
  salary: string
  location: ILocation
  work_model: string[]
  visa_sponsorship: boolean
  skills: ISkill[]
  application_video: ApplicationVideo
  created_at: string
  updated_at: string
  applications: IApplication[]
}

interface ApplicationVideo {
  duration: string
  description: string
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
  users: IApplicantUser
}

interface IApplicantUser extends IUser {
  talent_profile: {
    user_id: string
    updated_at: string
    skills: ISkill[]
    socials: string[]
    preferences: string
    jobs: null
    searching: boolean
    id: string
  }
}

export enum JobStatusEnum {
  open = "open",
  closed = "closed",
  draft = "draft",
  archived = "archived",
}

export type CompanyJobApplicationAction = {
  type:
    | CompanyJobApplicationActionEnum.GET_ALL_COMPANY_JOB_APPLICATIONS_BEGIN
    | CompanyJobApplicationActionEnum.GET_ALL_COMPANY_JOB_APPLICATIONS_FAILURE
    | CompanyJobApplicationActionEnum.GET_ALL_COMPANY_JOB_APPLICATIONS_SUCCESS
    | CompanyJobApplicationActionEnum.CLEAR_COMPANY_JOB_APPLICATIONS

  payload?:
    | ICompanyJobApplication
    | ICompanyJobApplication[]
    | string
    | ICompanyJobApplication["status"]
}

export enum CompanyJobApplicationActionEnum {
  GET_ALL_COMPANY_JOB_APPLICATIONS_BEGIN = "GET_ALL_COMPANY_JOB_APPLICATIONS_BEGIN",
  GET_ALL_COMPANY_JOB_APPLICATIONS_FAILURE = "GET_ALL_COMPANY_JOB_APPLICATIONS_FAILURE",
  GET_ALL_COMPANY_JOB_APPLICATIONS_SUCCESS = "GET_ALL_COMPANY_JOB_APPLICATIONS_SUCCESS",

  CLEAR_COMPANY_JOB_APPLICATIONS = "CLEAR_COMPANY_JOB_APPLICATIONS",
}
