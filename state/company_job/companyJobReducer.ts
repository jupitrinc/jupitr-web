import {
  CompanyJobActionEnum,
  CompanyJobAction,
  CompanyJobState,
  ICompanyJob,
  IJobVideo,
} from "./companyJob.types"

export const companyJobReducer = (
  state: CompanyJobState,
  action: CompanyJobAction
): CompanyJobState => {
  switch (action.type) {
    case CompanyJobActionEnum.ADD_COMPANY_JOB_BEGIN:
    case CompanyJobActionEnum.GET_COMPANY_JOB_BEGIN:
    case CompanyJobActionEnum.UNCHECK_PRIMAY_VIDEO_BEGIN:
    case CompanyJobActionEnum.SET_PRIMARY_VIDEO_BEGIN:
      return {
        ...state,
        loading: true,
        success: false,
      }

    case CompanyJobActionEnum.ADD_COMPANY_JOB_FAILURE:
    case CompanyJobActionEnum.GET_COMPANY_JOB_FAILURE:
    case CompanyJobActionEnum.UNCHECK_PRIMAY_VIDEO_FAILURE:
    case CompanyJobActionEnum.SET_PRIMARY_VIDEO_FAILURE:
      return {
        ...state,
        loading: false,
      }

    case CompanyJobActionEnum.ADD_COMPANY_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      }

    case CompanyJobActionEnum.GET_COMPANY_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload as ICompanyJob,
      }

    case CompanyJobActionEnum.CLEAR_COMPANY_JOB:
      return {
        ...state,
        data: {} as ICompanyJob,
      }

    case CompanyJobActionEnum.UPDATE_COMPANY_JOB_STATUS:
      return {
        ...state,
        data: {
          ...state.data,
          status: action.payload as ICompanyJob["status"],
        },
      }

    case CompanyJobActionEnum.UPDATE_COMPANY_JOB_TITLE:
      return {
        ...state,
        data: {
          ...state.data,
          title: action.payload as ICompanyJob["title"],
        },
      }

    case CompanyJobActionEnum.UPDATE_COMPANY_JOB_SALARY:
      return {
        ...state,
        data: {
          ...state.data,
          salary: action.payload as ICompanyJob["salary"],
        },
      }

    case CompanyJobActionEnum.UPDATE_COMPANY_JOB_WORK_MODEL:
      return {
        ...state,
        data: {
          ...state.data,
          work_model: action.payload as ICompanyJob["work_model"],
        },
      }

    case CompanyJobActionEnum.UPDATE_COMPANY_JOB_LOCATION:
      return {
        ...state,
        data: {
          ...state.data,
          location: action.payload as ICompanyJob["location"],
        },
      }

    case CompanyJobActionEnum.UPDATE_COMPANY_JOB_SKILLS:
      return {
        ...state,
        data: {
          ...state.data,
          skills: action.payload as ICompanyJob["skills"],
        },
      }

    case CompanyJobActionEnum.UPDATE_COMPANY_JOB_APPLICATION_VIDEO:
      return {
        ...state,
        data: {
          ...state.data,
          application_video: action.payload as ICompanyJob["application_video"],
        },
      }

    case CompanyJobActionEnum.ADD_JOB_VIDEO:
      const add_job_video_payload = action.payload as IJobVideo

      return {
        ...state,
        data: {
          ...state.data,
          company_videos: [...state.data.company_videos, add_job_video_payload],
        },
      }

    case CompanyJobActionEnum.DELETE_JOB_VIDEO:
      const delete_job_video_payload = action.payload as string

      return {
        ...state,
        data: {
          ...state.data,
          company_videos: [
            ...state.data.company_videos.filter(
              (video) => video.id !== delete_job_video_payload
            ),
          ],
        },
      }

    case CompanyJobActionEnum.UNCHECK_PRIMAY_VIDEO_SUCCESS:
      const uncheck_job_video_payload = action.payload as IJobVideo

      return {
        ...state,
        loading: false,
        success: true,
        data: {
          ...state.data,
          company_videos: state.data.company_videos.map((video) =>
            video.id === uncheck_job_video_payload.id
              ? uncheck_job_video_payload
              : video
          ),
        },
      }

    case CompanyJobActionEnum.SET_PRIMARY_VIDEO_SUCCESS:
      const primary_job_video_payload = action.payload as IJobVideo

      return {
        ...state,
        loading: false,
        success: true,
        data: {
          ...state.data,
          company_videos: state.data.company_videos.map((video) =>
            video.id === primary_job_video_payload.id
              ? primary_job_video_payload
              : video
          ),
        },
      }

    default:
      return state
  }
}
