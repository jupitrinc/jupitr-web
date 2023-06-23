import {
  UserActionEnum,
  UserActionType,
  UserStateType,
  UserType,
} from "./user.types"

export const userReducer = (
  state: UserStateType,
  action: UserActionType
): UserStateType => {
  switch (action.type) {
    case UserActionEnum.SIGN_IN_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      }

    case UserActionEnum.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case UserActionEnum.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload as UserType,
      }

    case UserActionEnum.SIGN_OUT_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      }

    case UserActionEnum.SIGN_OUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case UserActionEnum.SIGN_OUT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: {} as UserType,
      }

    default:
      return state
  }
}
