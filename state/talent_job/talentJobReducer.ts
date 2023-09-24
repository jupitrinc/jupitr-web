import {
  ITalentJob,
  TalentJobActionEnum,
  TalentJobAction,
  TalentJobState,
} from "./talentJob.types"

export const talentJobReducer = (
  state: TalentJobState,
  action: TalentJobAction
): TalentJobState => {
  switch (action.type) {
    case TalentJobActionEnum.SET_JOB:
      return {
        ...state,
        loading: false,
        data: action.payload as ITalentJob,
      }

    case TalentJobActionEnum.GET_JOB_BEGIN:
      return {
        ...state,
        loading: true,
        data: {} as ITalentJob,
        success: false,
      }

    case TalentJobActionEnum.GET_JOB_FAILURE:
      return {
        ...state,
        loading: false,
      }

    case TalentJobActionEnum.GET_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload as ITalentJob,
      }

    case TalentJobActionEnum.CLEAR_JOB:
      return {
        ...state,
        loading: false,
        data: {} as ITalentJob,
      }

    default:
      return state
  }
}
