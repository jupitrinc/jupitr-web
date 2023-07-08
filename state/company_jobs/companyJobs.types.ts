import { ICompanyJob } from "state/company_job/companyJob.types"

export interface ICompanyJobsContext {
  state: CompanyJobsState
  dispatch: ({ type }: CompanyJobsAction) => void
}

export type CompanyJobsState = {
  data: CompanyJobs
  loading: boolean
  error: boolean
}

export type CompanyJobs = ICompanyJob[]

export type CompanyJobsAction = {
  type:
    | CompanyJobsActionEnum.GET_COMPANY_JOBS_BEGIN
    | CompanyJobsActionEnum.GET_COMPANY_JOBS_FAILURE
    | CompanyJobsActionEnum.GET_COMPANY_JOBS_SUCCESS

  payload?: CompanyJobs
}

export enum CompanyJobsActionEnum {
  GET_COMPANY_JOBS_BEGIN = "GET_COMPANY_JOBS_BEGIN",
  GET_COMPANY_JOBS_FAILURE = "GET_COMPANY_JOBS_FAILURE",
  GET_COMPANY_JOBS_SUCCESS = "GET_COMPANY_JOBS_SUCCESS",
}
