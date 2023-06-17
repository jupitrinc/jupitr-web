import {
  TalentProfileActionEnum,
  TalentProfileActionType,
  TalentProfileStateType,
  TalentProfileType,
} from "./talentProfile.types"

export const userReducer = (
  state: TalentProfileStateType,
  action: TalentProfileActionType
): TalentProfileStateType => {
  switch (action.type) {
    case TalentProfileActionEnum.GET_TALENT_PROFILE_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      }

    case TalentProfileActionEnum.GET_TALENT_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case TalentProfileActionEnum.GET_TALENT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload as TalentProfileType,
      }

    default:
      return state
  }
}
