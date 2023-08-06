import { ISkill } from "state/talent_profile/talentProfile.types"
import { SkillAction, SkillActionEnum, SkillState } from "./skill.types"

export const companyProfileReducer = (
  state: SkillState,
  action: SkillAction
): SkillState => {
  switch (action.type) {
    case SkillActionEnum.GET_SKILLS_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      }

    case SkillActionEnum.GET_SKILLS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case SkillActionEnum.GET_SKILLS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload as ISkill[],
      }

    default:
      return state
  }
}
