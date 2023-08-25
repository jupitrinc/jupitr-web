export interface ICompanyVideosContext {
  state: CompanyVideosState
  dispatch: ({ type }: CompanyVideosAction) => void
}

export type CompanyVideosState = {
  loading: boolean
  error: string
  success: boolean
}

export interface ICompanyVideo {
  id: string
  job_id: string
  user_id: string
  video_url: string
  created_at: string
}

export type CompanyVideosAction = {
  type:
    | CompanyVideosActionEnum.ADD_VIDEO_BEGIN
    | CompanyVideosActionEnum.ADD_VIDEO_FAILURE
    | CompanyVideosActionEnum.ADD_VIDEO_SUCCESS

  payload?: string
}

export enum CompanyVideosActionEnum {
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
