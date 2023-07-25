import { ISkill } from "state/company_job/companyJob.types"
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
  console.log(action)
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
