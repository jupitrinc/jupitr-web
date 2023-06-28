import {
  ITalentProfile,
  TalentProfileActionEnum,
  TalentProfileAction,
  TalentProfileSkill,
  TalentProfileState,
} from "./talentProfile.types"

export const talentProfileReducer = (
  state: TalentProfileState,
  action: TalentProfileAction
): TalentProfileState => {
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
        data: action.payload as ITalentProfile,
      }

    case TalentProfileActionEnum.ADD_SKILL:
      const add_skill_payload = action.payload as TalentProfileSkill
      return {
        ...state,
        data: {
          ...state.data,
          skills: [...state.data.skills, add_skill_payload],
        },
      }

    case TalentProfileActionEnum.REMOVE_SKILL:
      const remove_skill_payload = action.payload as TalentProfileSkill

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

    case TalentProfileActionEnum.ADD_INDUSTRY:
      const add_industry_payload = action.payload as string

      return {
        ...state,
        data: {
          ...state.data,
          preferences: {
            ...state.data.preferences,
            industry: [
              ...state.data.preferences.industry,
              add_industry_payload,
            ],
          },
        },
      }

    case TalentProfileActionEnum.REMOVE_INDUSTRY:
      const remove_industry_payload = action.payload as string

      return {
        ...state,
        data: {
          ...state.data,
          preferences: {
            ...state.data.preferences,
            industry: [
              ...state.data.preferences.industry.filter(
                (i) => i !== remove_industry_payload
              ),
            ],
          },
        },
      }

    case TalentProfileActionEnum.ADD_WORK_MODEL:
      const add_work_model_payload = action.payload as string

      return {
        ...state,
        data: {
          ...state.data,
          preferences: {
            ...state.data.preferences,
            work_model: [
              ...state.data.preferences.work_model,
              add_work_model_payload,
            ],
          },
        },
      }

    case TalentProfileActionEnum.REMOVE_WORK_MODEL:
      const remove_work_model_payload = action.payload as string

      return {
        ...state,
        data: {
          ...state.data,
          preferences: {
            ...state.data.preferences,
            work_model: [
              ...state.data.preferences.work_model.filter(
                (m) => m !== remove_work_model_payload
              ),
            ],
          },
        },
      }

    case TalentProfileActionEnum.ADD_LOCATION:
      const add_location_payload = action.payload as string

      return {
        ...state,
        data: {
          ...state.data,
          preferences: {
            ...state.data.preferences,
            location: [
              ...state.data.preferences.location,
              add_location_payload,
            ],
          },
        },
      }

    case TalentProfileActionEnum.REMOVE_LOCATION:
      const remove_location_payload = action.payload as string

      return {
        ...state,
        data: {
          ...state.data,
          preferences: {
            ...state.data.preferences,
            location: [
              ...state.data.preferences.location.filter(
                (location) => location !== remove_location_payload
              ),
            ],
          },
        },
      }

    case TalentProfileActionEnum.ADD_TECH_TEST:
      const add_tech_test_payload = action.payload as string

      return {
        ...state,
        data: {
          ...state.data,
          preferences: {
            ...state.data.preferences,
            technical_test: [
              ...state.data.preferences.technical_test,
              add_tech_test_payload,
            ],
          },
        },
      }

    case TalentProfileActionEnum.REMOVE_TECH_TEST:
      const remove_tech_test_payload = action.payload as string

      return {
        ...state,
        data: {
          ...state.data,
          preferences: {
            ...state.data.preferences,
            technical_test: [
              ...state.data.preferences.technical_test.filter(
                (test) => test !== remove_tech_test_payload
              ),
            ],
          },
        },
      }

    default:
      return state
  }
}
