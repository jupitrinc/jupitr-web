import {
  ICompanyJob,
  CompanyJobActionEnum,
  CompanyJobAction,
  CompanyJobState,
} from "./companyJob.types"

export const companyJobReducer = (
  state: CompanyJobState,
  action: CompanyJobAction
): CompanyJobState => {
  console.log(action)
  switch (action.type) {
    case CompanyJobActionEnum.SET_COMPANY_JOB:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload as ICompanyJob,
      }

    default:
      return state
  }
}
