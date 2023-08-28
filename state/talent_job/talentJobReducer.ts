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
        error: "",
        data: action.payload as ITalentJob,
      }

    default:
      return state
  }
}
