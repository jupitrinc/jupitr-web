export interface ICompanyJobVideosContext {
  state: CompanyJobVideosState
  dispatch: ({ type }: CompanyJobVideosAction) => void
}

export type CompanyJobVideosState = {
  loading: boolean
  error: string
  success: boolean
}

export interface ICompanyJobVideo {
  id: string
  job_id: string
  user_id: string
  video_url: string
  created_at: string
}

export type CompanyJobVideosAction = {
  type:
    | CompanyJobVideosActionEnum.ADD_VIDEO_BEGIN
    | CompanyJobVideosActionEnum.ADD_VIDEO_FAILURE
    | CompanyJobVideosActionEnum.ADD_VIDEO_SUCCESS

  payload?: string
}

export enum CompanyJobVideosActionEnum {
  ADD_VIDEO_BEGIN = "ADD_VIDEO_BEGIN",
  ADD_VIDEO_FAILURE = "ADD_VIDEO_FAILURE",
  ADD_VIDEO_SUCCESS = "ADD_VIDEO_SUCCESS",
}

export interface AddVideoPayload {
  file: File
  company_id: string
  user_id: string
  job_id: string
}
