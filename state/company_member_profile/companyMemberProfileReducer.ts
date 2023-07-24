import {
  ICompanyMemberProfile,
  CompanyMemberProfileActionEnum,
  CompanyMemberProfileAction,
  CompanyMemberProfileState,
} from "./companyMemberProfile.types"

export const companyProfileReducer = (
  state: CompanyMemberProfileState,
  action: CompanyMemberProfileAction
): CompanyMemberProfileState => {
  console.log(action)
  switch (action.type) {
    case CompanyMemberProfileActionEnum.GET_COMPANY_MEMBER_PROFILE_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      }

    case CompanyMemberProfileActionEnum.GET_COMPANY_MEMBER_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case CompanyMemberProfileActionEnum.GET_COMPANY_MEMBER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload as ICompanyMemberProfile,
      }

    default:
      return state
  }
}
