import { ITalentJob } from "state/talent_job/talentJob.types"

export interface ITalentJobsContext {
  state: TalentJobsState
  dispatch: ({ type }: TalentJobsAction) => void
}

export type TalentJobsState = {
  data: TalentJobs
  loading: boolean
  error: boolean
}

export type TalentJobs = ITalentJob[]

export type TalentJobsAction = {
  type:
    | TalentJobsActionEnum.GET_TALENT_JOBS_BEGIN
    | TalentJobsActionEnum.GET_TALENT_JOBS_FAILURE
    | TalentJobsActionEnum.GET_TALENT_JOBS_SUCCESS

  payload?: TalentJobs
}

export enum TalentJobsActionEnum {
  GET_TALENT_JOBS_BEGIN = "GET_TALENT_JOBS_BEGIN",
  GET_TALENT_JOBS_FAILURE = "GET_TALENT_JOBS_FAILURE",
  GET_TALENT_JOBS_SUCCESS = "GET_TALENT_JOBS_SUCCESS",
}
