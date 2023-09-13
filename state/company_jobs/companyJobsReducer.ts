import {
  CompanyJobsActionEnum,
  CompanyJobsAction,
  CompanyJobsState,
  ICompanyJobs,
} from "./companyJobs.types"

export const companyJobsReducer = (
  state: CompanyJobsState,
  action: CompanyJobsAction
): CompanyJobsState => {
  switch (action.type) {
    case CompanyJobsActionEnum.GET_COMPANY_JOBS_BEGIN:
      return {
        ...state,
        loading: true,
        success: false,
      }

    case CompanyJobsActionEnum.GET_COMPANY_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
      }

    case CompanyJobsActionEnum.GET_COMPANY_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload as ICompanyJobs,
      }

    case CompanyJobsActionEnum.CLEAR_COMPANY_JOBS:
      return {
        ...state,
        data: [] as ICompanyJobs,
      }

    default:
      return state
  }
}
