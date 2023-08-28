import {
  CompanyJobApplicationActionEnum,
  CompanyJobApplicationAction,
  CompanyJobApplicationState,
  ICompanyJobApplication,
} from "./companyJobApplication.types"

export const useCompanyJobApplicationReducer = (
  state: CompanyJobApplicationState,
  action: CompanyJobApplicationAction
): CompanyJobApplicationState => {
  switch (action.type) {
    case CompanyJobApplicationActionEnum.GET_APPLICATIONS_BEGIN:
      return {
        ...state,
        loading: true,
        error: "",
        success: false,
      }

    case CompanyJobApplicationActionEnum.GET_APPLICATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      }

    case CompanyJobApplicationActionEnum.GET_APPLICATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload as ICompanyJobApplication,
        success: true,
      }

    default:
      return state
  }
}
