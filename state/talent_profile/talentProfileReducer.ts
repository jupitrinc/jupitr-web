import {
  TalentProfileActionEnum,
  TalentProfileActionType,
  TalentProfileSkill,
  TalentProfileStateType,
  TalentProfileType,
} from "./talentProfile.types"

export const talentProfileReducer = (
  state: TalentProfileStateType,
  action: TalentProfileActionType
): TalentProfileStateType => {
  console.log(action)
  switch (action.type) {
    case TalentProfileActionEnum.GET_PROFILE_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      }

    case TalentProfileActionEnum.GET_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case TalentProfileActionEnum.GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload as TalentProfileType,
      }

    case TalentProfileActionEnum.ADD_SKILL:
      return {
        ...state,
        data: {
          ...state.data,
          skills: [...state.data.skills, action.payload as TalentProfileSkill],
        },
      }

    case TalentProfileActionEnum.REMOVE_SKILL:
      const payload = action.payload as TalentProfileSkill

      return {
        ...state,
        data: {
          ...state.data,
          skills: [
            ...state.data.skills.filter((skill) => skill.id !== payload.id),
          ],
        },
      }

    default:
      return state
  }
}
