import {
  ICompanyProfile,
  CompanyProfileActionEnum,
  CompanyProfileAction,
  CompanyProfileState,
} from "./companyProfile.types"

export const companyProfileReducer = (
  state: CompanyProfileState,
  action: CompanyProfileAction
): CompanyProfileState => {
  console.log(action)
  switch (action.type) {
    case CompanyProfileActionEnum.GET_COMPANY_PROFILE_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      }

    case CompanyProfileActionEnum.GET_COMPANY_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case CompanyProfileActionEnum.GET_COMPANY_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload as ICompanyProfile,
      }

    default:
      return state
  }
}
