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
      return {
        ...state,
        loading: false,
        error: "",
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
