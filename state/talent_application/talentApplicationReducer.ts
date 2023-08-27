import {
  TalentApplicationAction,
  TalentApplicationActionEnum,
  TalentApplicationState,
} from "./talentApplication.types"

export const talentApplicationReducer = (
  state: TalentApplicationState,
  action: TalentApplicationAction
): TalentApplicationState => {
  switch (action.type) {
    case TalentApplicationActionEnum.ADD_APPLICATION_BEGIN:
      return {
        ...state,
        loading: true,
        error: "",
        success: false,
      }

    case TalentApplicationActionEnum.ADD_APPLICATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      }

    case TalentApplicationActionEnum.ADD_APPLICATION_SUCCESS:
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
