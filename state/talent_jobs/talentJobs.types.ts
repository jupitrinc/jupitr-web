import { ITalentJob } from "state/talent_job/talentJob.types"

export interface ITalentJobsContext {
  state: TalentJobsState
  dispatch: ({ type }: TalentJobsAction) => void
}

export type TalentJobsState = {
  data: TalentJobs
  loading: boolean
  error: string
  success: boolean
}

export type TalentJobs = ITalentJob[]

export type TalentJobsAction = {
  type:
    | TalentJobsActionEnum.GET_JOBS_BEGIN
    | TalentJobsActionEnum.GET_JOBS_FAILURE
    | TalentJobsActionEnum.GET_JOBS_SUCCESS

  payload?: TalentJobs | string
}

export enum TalentJobsActionEnum {
  GET_JOBS_BEGIN = "GET_JOBS_BEGIN",
  GET_JOBS_FAILURE = "GET_JOBS_FAILURE",
  GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS",
}
