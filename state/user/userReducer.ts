import {
  UserActionEnum,
  UserAction,
  UserState,
  ISuperUser,
  IUser,
} from "./user.types"
import {
  ISkill,
  ITalentProfile,
  TalentProfileAction,
  TalentProfileActionEnum,
} from "state/talent_profile/talentProfile.types"
import {
  CompanyMemberProfileAction,
  CompanyMemberProfileActionEnum,
  ICompanyMemberProfile,
} from "state/company_member_profile/companyMemberProfile.types"
import {
  localStorageHelper,
  LocalStorageItemEnum,
} from "helper/localStorageHelper"

export const userReducer = (
  state: UserState,
  action: UserAction | TalentProfileAction | CompanyMemberProfileAction
): UserState => {
  const { setItem, removeItem } = localStorageHelper

  switch (action.type) {
    case UserActionEnum.SIGN_IN_BEGIN:
    case UserActionEnum.GET_USER_BEGIN:
    case UserActionEnum.REQUEST_EMAIL_UPDATE_BEGIN:
    case UserActionEnum.UPDATE_EMAIL_BEGIN:
    case UserActionEnum.DELETE_USER_BEGIN:
    case TalentProfileActionEnum.UPDATE_INTRO_VIDEO_BEGIN:
      return {
        ...state,
        loading: true,
      }

    case UserActionEnum.SIGN_IN_FAILURE:
    case UserActionEnum.GET_USER_FAILURE:
    case UserActionEnum.COMPANY_SIGN_UP_FAILURE:
    case UserActionEnum.REQUEST_EMAIL_UPDATE_FAILURE:
    case UserActionEnum.UPDATE_EMAIL_FAILURE:
    case UserActionEnum.DELETE_USER_FAILURE:
    case TalentProfileActionEnum.UPDATE_INTRO_VIDEO_FAILURE:
      return {
        ...state,
        loading: false,
      }

    case UserActionEnum.COMPANY_SIGN_UP_BEGIN:
      return {
        ...state,
        loading: true,
        success: false,
      }

    case UserActionEnum.COMPANY_SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      }

    case UserActionEnum.SIGN_IN_SUCCESS:
    case UserActionEnum.REQUEST_EMAIL_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
      }

    case UserActionEnum.GET_USER_SUCCESS:
      setItem(LocalStorageItemEnum.user, action.payload)

      return {
        ...state,
        loading: false,
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

    case UserActionEnum.UPDATE_LOCATION:
      const update_user_location_payload = action.payload as IUser["location"]
      const update_user_location_state = {
        ...state,
        data: {
          ...state.data,
          location: update_user_location_payload,
        } as ISuperUser,
      }

      setItem(LocalStorageItemEnum.user, update_user_location_state.data)
      return update_user_location_state

    case UserActionEnum.UPDATE_EMAIL_SUCCESS:
      const update_email_payload = action.payload as string
      const update_email_state = {
        ...state,
        loading: false,
        data: {
          ...state.data,
          email: update_email_payload,
        } as ISuperUser,
      }
      setItem(LocalStorageItemEnum.user, update_email_state.data)
      return update_email_state

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

    case UserActionEnum.TOGGLE_ACTIVE:
      const toggle_user_payload = action.payload as IUser["active"]

      const toggle_user_state = {
        ...state,
        data: {
          ...state.data,
          active: toggle_user_payload,
        },
      }
      setItem(LocalStorageItemEnum.user, toggle_user_state.data)
      return toggle_user_state

    case UserActionEnum.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {} as ISuperUser,
      }

    // FIXME talent_profile
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

    case TalentProfileActionEnum.TOGGLE_SEARCHING:
      const toggle_searching_payload =
        action.payload as ITalentProfile["searching"]

      const toggle_searching_state = {
        ...state,
        data: {
          ...state.data,
          searching: toggle_searching_payload,
        },
      }

      setItem(LocalStorageItemEnum.user, toggle_searching_state.data)
      return toggle_searching_state

    case TalentProfileActionEnum.UPDATE_VISIBILITY:
      const update_visibility_payload =
        action.payload as ITalentProfile["visibility"]

      const update_visibility_state = {
        ...state,
        data: {
          ...state.data,
          visibility: update_visibility_payload,
        },
      }

      setItem(LocalStorageItemEnum.user, update_visibility_state.data)
      return update_visibility_state

    case TalentProfileActionEnum.UPDATE_SKILLS:
      const update_skills_payload = action.payload as ISkill[]

      const update_skills_state = {
        ...state,
        data: {
          ...state.data,
          skills: update_skills_payload,
        },
      }

      setItem(LocalStorageItemEnum.user, update_skills_state.data)
      return update_skills_state

    case TalentProfileActionEnum.UPDATE_INTRO_VIDEO_SUCCESS:
      const update_intro_video_payload =
        action.payload as ITalentProfile["intro_video"]

      const update_intro_video_state = {
        ...state,
        loading: false,
        success: true,
        data: {
          ...state.data,
          intro_video: update_intro_video_payload,
        },
      }

      setItem(LocalStorageItemEnum.user, update_intro_video_state.data)
      return update_intro_video_state

    // FIXME company_member_profile
    case CompanyMemberProfileActionEnum.UPDATE_JOB_TITLE:
      const update_job_title_payload =
        action.payload as ICompanyMemberProfile["job_title"]

      const update_job_title_state = {
        ...state,
        data: {
          ...state.data,
          job_title: update_job_title_payload,
        },
      }

      setItem(LocalStorageItemEnum.user, update_job_title_state.data)
      return update_job_title_state

    default:
      return state
  }
}
