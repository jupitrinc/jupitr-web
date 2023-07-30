import { ISkill } from "state/skill/skill.types"
import {
  ITalentProfile,
  TalentProfileActionEnum,
  TalentProfileAction,
  TalentProfileState,
} from "./talentProfile.types"

export const talentProfileReducer = (
  state: TalentProfileState,
  action: TalentProfileAction
): TalentProfileState => {
  switch (action.type) {
    case TalentProfileActionEnum.SET_TALENT_PROFILE_BEGIN:
      return {
        ...state,
        loading: true,
        error: "",
      }

    case TalentProfileActionEnum.SET_TALENT_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      }

    case TalentProfileActionEnum.SET_TALENT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload as ITalentProfile,
      }

    case TalentProfileActionEnum.ADD_SKILL:
      const add_skill_payload = action.payload as ISkill
      return {
        ...state,
        data: {
          ...state.data,
          skills: [...state.data.skills, add_skill_payload],
        },
      }

    case TalentProfileActionEnum.REMOVE_SKILL:
      const remove_skill_payload = action.payload as ISkill

      return {
        ...state,
        data: {
          ...state.data,
          skills: [
            ...state.data.skills.filter(
              (skill) => skill.id !== remove_skill_payload.id
            ),
          ],
        },
      }

    default:
      return state
  }
}
