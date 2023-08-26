import {
  TalentJobs,
  TalentJobsActionEnum,
  TalentJobsAction,
  TalentJobsState,
} from "./talentJobs.types"

export const talentJobsReducer = (
  state: TalentJobsState,
  action: TalentJobsAction
): TalentJobsState => {
  console.log(action)
  switch (action.type) {
    case TalentJobsActionEnum.GET_JOBS_BEGIN:
      return {
        ...state,
        loading: true,
        error: "",
        success: false,
      }

    case TalentJobsActionEnum.GET_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      }

    case TalentJobsActionEnum.GET_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        success: true,
        data: action.payload as TalentJobs,
      }

    default:
      return state
  }
}
