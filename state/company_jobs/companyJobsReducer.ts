import {
  CompanyJobs,
  CompanyJobsActionEnum,
  CompanyJobsAction,
  CompanyJobsState,
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
        error: false,
      }

    case CompanyJobsActionEnum.GET_COMPANY_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case CompanyJobsActionEnum.GET_COMPANY_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload as CompanyJobs,
      }

    default:
      return state
  }
}
