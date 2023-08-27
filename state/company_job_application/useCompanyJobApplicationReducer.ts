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
  // console.log(action)
  switch (action.type) {
    case CompanyJobApplicationActionEnum.GET_ALL_COMPANY_JOB_APPLICATIONS_BEGIN:
      return {
        ...state,
        loading: false,
        error: "",
      }

    case CompanyJobApplicationActionEnum.GET_ALL_COMPANY_JOB_APPLICATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      }

    case CompanyJobApplicationActionEnum.GET_ALL_COMPANY_JOB_APPLICATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload as ICompanyJobApplication,
      }

    default:
      return state
  }
}
