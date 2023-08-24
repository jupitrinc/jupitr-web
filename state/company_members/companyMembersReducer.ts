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
      return {
        ...state,
        loading: true,
        error: false,
      }

    case CompanyMembersActionEnum.GET_MEMBERS_FAILURE:
    case CompanyMembersActionEnum.UPDATE_MEMBER_ROLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      }

    case CompanyMembersActionEnum.GET_MEMBERS_SUCCESS:
    case CompanyMembersActionEnum.UPDATE_MEMBER_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload as ICompanyMember[],
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
