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
  console.log(action)
  switch (action.type) {
    case TalentJobActionEnum.SET_TALENT_JOB:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload as ITalentJob,
      }

    default:
      return state
  }
}
