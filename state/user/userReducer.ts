import { IUser, UserActionEnum, UserAction, UserState } from "./user.types"

export const userReducer = (
  state: UserState,
  action: UserAction
): UserState => {
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
      }

    case UserActionEnum.GET_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      }

    case UserActionEnum.GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case UserActionEnum.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload as IUser,
      }

    case UserActionEnum.SIGN_OUT:
      return {
        ...state,
        data: {} as IUser,
      }

    default:
      return state
  }
}
