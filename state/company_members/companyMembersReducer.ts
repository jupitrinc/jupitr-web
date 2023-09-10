import {
  CompanyMembersAction,
  CompanyMembersActionEnum,
  CompanyMembersState,
  ICompanyMember,
} from "./companyMembers.types"

export const companyMembersReducer = (
  state: CompanyMembersState,
  action: CompanyMembersAction
): CompanyMembersState => {
  switch (action.type) {
    case CompanyMembersActionEnum.GET_MEMBERS_BEGIN:
    case CompanyMembersActionEnum.UPDATE_MEMBER_ROLE_BEGIN:
    case CompanyMembersActionEnum.ADD_MEMBER_BEGIN:
    case CompanyMembersActionEnum.DELETE_MEMBER_BEGIN:
      return {
        ...state,
        loading: true,
        error: "",
      }

    case CompanyMembersActionEnum.GET_MEMBERS_FAILURE:
    case CompanyMembersActionEnum.UPDATE_MEMBER_ROLE_FAILURE:
    case CompanyMembersActionEnum.ADD_MEMBER_FAILURE:
    case CompanyMembersActionEnum.DELETE_MEMBER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      }

    case CompanyMembersActionEnum.GET_MEMBERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload as ICompanyMember[],
      }

    case CompanyMembersActionEnum.UPDATE_MEMBER_ROLE_SUCCESS:
      const update_member_role_success_payload =
        action.payload as ICompanyMember

      const data = [...state.data]
      for (const obj of data) {
        if (obj.user_id === update_member_role_success_payload.user_id) {
          obj.permission = update_member_role_success_payload.permission
        }
      }

      return {
        ...state,
        loading: false,
        error: "",
        data: data,
      }

    case CompanyMembersActionEnum.ADD_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      }

    case CompanyMembersActionEnum.DELETE_MEMBER_SUCCESS:
      return {
        ...state,
        data: [...state.data.filter((user) => user.user_id !== action.payload)],
        loading: false,
        error: "Member removed",
      }

    case CompanyMembersActionEnum.CLEAR_MEMBERS:
      return {
        ...state,
        data: [] as ICompanyMember[],
      }

    default:
      return state
  }
}
