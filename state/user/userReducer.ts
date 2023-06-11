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
    case UserActionEnum.FETCH_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      }

    case UserActionEnum.FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case UserActionEnum.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload as UserType,
      }

    default:
      return state
  }
}
