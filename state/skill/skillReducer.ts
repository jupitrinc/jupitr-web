import { ISkill } from "state/talent_profile/talentProfile.types"
import { SkillAction, SkillActionEnum, SkillState } from "./skill.types"
import {
  LocalStorageItemEnum,
  localStorageHelper,
} from "helper/localStorageHelper"

export const companyProfileReducer = (
  state: SkillState,
  action: SkillAction
): SkillState => {
  const { setItem } = localStorageHelper

  switch (action.type) {
    case SkillActionEnum.GET_SKILLS_BEGIN:
    case SkillActionEnum.ADD_SKILL_BEGIN:
    case SkillActionEnum.SEARCH_SKILL_BEGIN:
      return {
        ...state,
        loading: true,
        error: "",
      }

    case SkillActionEnum.GET_SKILLS_FAILURE:
    case SkillActionEnum.ADD_SKILL_FAILURE:
    case SkillActionEnum.SEARCH_SKILL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      }

    case SkillActionEnum.GET_SKILLS_SUCCESS:
    case SkillActionEnum.SEARCH_SKILL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload as ISkill[],
      }

    case SkillActionEnum.ADD_SKILL_SUCCESS:
      const add_skill_payload = action.payload as ISkill

      const add_skill_state = {
        ...state,
        loading: false,
        error: "",
        data: [...state.data, add_skill_payload],
      }
      return add_skill_state

    case SkillActionEnum.CLEAR_SKILLS:
      return {
        ...state,
        data: [] as ISkill[],
      }

    default:
      return state
  }
}
