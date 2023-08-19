import { ICompanyJob } from "state/company_job/companyJob.types"

export interface ICompanyJobsContext {
  state: CompanyJobsState
  dispatch: ({ type }: CompanyJobsAction) => void
}

export type CompanyJobsState = {
  data: ICompanyJobs
  loading: boolean
  error: string
}

export type ICompanyJobs = ICompanyJob[]

export type CompanyJobsAction = {
  type:
    | CompanyJobsActionEnum.GET_COMPANY_JOBS_BEGIN
    | CompanyJobsActionEnum.GET_COMPANY_JOBS_FAILURE
    | CompanyJobsActionEnum.GET_COMPANY_JOBS_SUCCESS
    | CompanyJobsActionEnum.CLEAR_COMPANY_JOBS

  payload?: ICompanyJobs | string
}

export enum CompanyJobsActionEnum {
  GET_COMPANY_JOBS_BEGIN = "GET_COMPANY_JOBS_BEGIN",
  GET_COMPANY_JOBS_FAILURE = "GET_COMPANY_JOBS_FAILURE",
  GET_COMPANY_JOBS_SUCCESS = "GET_COMPANY_JOBS_SUCCESS",

  CLEAR_COMPANY_JOBS = "CLEAR_COMPANY_JOBS",
}
