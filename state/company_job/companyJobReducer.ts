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
  console.log(action)
  switch (action.type) {
    case CompanyJobActionEnum.ADD_COMPANY_JOB_BEGIN:
    case CompanyJobActionEnum.GET_COMPANY_JOB_BEGIN:
      return {
        ...state,
        loading: false,
        error: "",
      }

    case CompanyJobActionEnum.ADD_COMPANY_JOB_FAILURE:
    case CompanyJobActionEnum.GET_COMPANY_JOB_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      }

    case CompanyJobActionEnum.ADD_COMPANY_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
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

    default:
      return state
  }
}
