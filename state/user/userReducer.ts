import {
  localStorageHelper,
  LocalStorageItemEnum,
} from "helper/localStorageHelper"
import { UserActionEnum, UserAction, UserState, ISuperUser } from "./user.types"
import {
  ITalentProfile,
  TalentProfileAction,
  TalentProfileActionEnum,
} from "state/talent_profile/talentProfile.types"
import { ISkill } from "state/skill/skill.types"

export const userReducer = (
  state: UserState,
  action: UserAction | TalentProfileAction
): UserState => {
  const { setItem, removeItem } = localStorageHelper

  switch (action.type) {
    case UserActionEnum.SIGN_IN_BEGIN:
      return {
        ...state,
        loading: true,
        error: "",
      }

    case UserActionEnum.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      }

    case UserActionEnum.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
      }

    case UserActionEnum.GET_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: "",
      }

    case UserActionEnum.GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      }

    case UserActionEnum.GET_USER_SUCCESS:
      setItem(LocalStorageItemEnum.user, action.payload)

      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload as ISuperUser,
      }

    case UserActionEnum.SIGN_OUT:
      removeItem(LocalStorageItemEnum.user)

      return {
        ...state,
        data: {} as ISuperUser,
      }

    case UserActionEnum.UPDATE_NAME:
      const update_name_payload = action.payload as string
      const update_name_state = {
        ...state,
        data: {
          ...state.data,
          name: update_name_payload,
        } as ISuperUser,
      }

      setItem(LocalStorageItemEnum.user, update_name_state.data)
      return update_name_state

    case UserActionEnum.UPDATE_AVATAR:
      const update_avatar_payload = action.payload as string
      const update_avatar_state = {
        ...state,
        data: {
          ...state.data,
          avatar_url: update_avatar_payload,
        } as ISuperUser,
      }

      setItem(LocalStorageItemEnum.user, update_avatar_state.data)
      return update_avatar_state

    // talent_profile
    case TalentProfileActionEnum.UPDATE_SOCIALS:
      const update_socials_payload = action.payload as ITalentProfile["socials"]

      const update_socials_state = {
        ...state,
        data: {
          ...state.data,
          socials: update_socials_payload,
        },
      }

      setItem(LocalStorageItemEnum.user, update_socials_state.data)
      return update_socials_state

    case TalentProfileActionEnum.UPDATE_LOCATION:
      const update_location_payload =
        action.payload as ITalentProfile["preferences"]

      const update_location_state = {
        ...state,
        data: {
          ...state.data,
          preferences: update_location_payload,
        },
      }

      setItem(LocalStorageItemEnum.user, update_location_state.data)
      return update_location_state

    case TalentProfileActionEnum.ADD_SKILL:
      const add_skill_payload = action.payload as ISkill[]

      const add_skill_state = {
        ...state,
        data: {
          ...state.data,
          skills: add_skill_payload,
        },
      }

      setItem(LocalStorageItemEnum.user, add_skill_state.data)
      return add_skill_state

    case TalentProfileActionEnum.REMOVE_SKILL:
      const remove_skill_payload = action.payload as ISkill[]

      const remove_skill_state = {
        ...state,
        data: {
          ...state.data,
          skills: remove_skill_payload,
        },
      }

      setItem(LocalStorageItemEnum.user, remove_skill_state.data)
      return remove_skill_state

    case TalentProfileActionEnum.UPDATE_SKILL:
      const update_skill_payload = action.payload as ISkill[]

      const update_skill_state = {
        ...state,
        data: {
          ...state.data,
          skills: update_skill_payload,
        },
      }

      setItem(LocalStorageItemEnum.user, update_skill_state.data)
      return update_skill_state

    default:
      return state
  }
}
