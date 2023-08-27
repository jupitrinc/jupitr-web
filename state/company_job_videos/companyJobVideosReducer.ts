import {
  CompanyJobVideosAction,
  CompanyJobVideosActionEnum,
  CompanyJobVideosState,
} from "./companyJobVideos.types"

export const companyJobVideosReducer = (
  state: CompanyJobVideosState,
  action: CompanyJobVideosAction
): CompanyJobVideosState => {
  switch (action.type) {
    case CompanyJobVideosActionEnum.ADD_VIDEO_BEGIN:
      return {
        ...state,
        loading: true,
        error: "",
        success: false,
      }

    case CompanyJobVideosActionEnum.ADD_VIDEO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      }

    case CompanyJobVideosActionEnum.ADD_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        success: true,
      }

    default:
      return state
  }
}