import {
  localStorageHelper,
  LocalStorageItemEnum,
} from "helper/localStorageHelper"
import { IUser, UserActionEnum, UserAction, UserState } from "./user.types"

export const userReducer = (
  state: UserState,
  action: UserAction
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
        data: action.payload as IUser,
      }

    case UserActionEnum.SIGN_OUT:
      removeItem(LocalStorageItemEnum.user)

      return {
        ...state,
        data: {} as IUser,
      }

    case UserActionEnum.UPDATE_NAME:
      const update_name_payload = action.payload as string
      const update_name_state = {
        ...state,
        data: {
          ...state.data,
          name: update_name_payload,
        } as IUser,
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
        } as IUser,
      }

      setItem(LocalStorageItemEnum.user, update_avatar_state.data)
      return update_avatar_state

    default:
      return state
  }
}
