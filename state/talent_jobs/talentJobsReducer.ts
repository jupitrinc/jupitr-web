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
    case TalentJobsActionEnum.GET_TALENT_JOBS_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      }

    case TalentJobsActionEnum.GET_TALENT_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case TalentJobsActionEnum.GET_TALENT_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload as TalentJobs,
      }

    default:
      return state
  }
}
