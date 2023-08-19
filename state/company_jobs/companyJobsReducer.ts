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
  console.log(action)
  switch (action.type) {
    case CompanyJobsActionEnum.GET_COMPANY_JOBS_BEGIN:
      return {
        ...state,
        loading: true,
        error: "",
      }

    case CompanyJobsActionEnum.GET_COMPANY_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      }

    case CompanyJobsActionEnum.GET_COMPANY_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
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
