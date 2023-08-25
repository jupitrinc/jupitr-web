import {
  CompanyVideosAction,
  CompanyVideosActionEnum,
  CompanyVideosState,
} from "./companyVideos.types"

export const companyVideosReducer = (
  state: CompanyVideosState,
  action: CompanyVideosAction
): CompanyVideosState => {
  switch (action.type) {
    case CompanyVideosActionEnum.ADD_VIDEO_BEGIN:
      return {
        ...state,
        loading: true,
        error: "",
        success: false,
      }

    case CompanyVideosActionEnum.ADD_VIDEO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      }

    case CompanyVideosActionEnum.ADD_VIDEO_SUCCESS:
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
