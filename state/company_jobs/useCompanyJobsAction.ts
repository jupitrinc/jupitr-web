import { useContext } from "react"
import { CompanyJobsActionEnum, ICompanyJobs } from "./companyJobs.types"
import { CompanyJobsContext } from "./CompanyJobsContext"
import useCompanyJobService from "services/company/useCompanyJobService"

export function useCompanyJobsAction() {
  const { dispatch } = useContext(CompanyJobsContext)

  const { getAllJobs: getJobsService } = useCompanyJobService()

  const getJobs = async (company_id: string) => {
    if (!company_id) return

    dispatch({
      type: CompanyJobsActionEnum.GET_COMPANY_JOBS_BEGIN,
    })

    const { data, error } = await getJobsService(company_id)

    if (error) {
      dispatch({
        type: CompanyJobsActionEnum.GET_COMPANY_JOBS_FAILURE,
        payload: error.message,
      })
    } else if (data) {
      dispatch({
        type: CompanyJobsActionEnum.GET_COMPANY_JOBS_SUCCESS,
        payload: data as ICompanyJobs,
      })
    }
  }

  const clearJobs = () => {
    dispatch({
      type: CompanyJobsActionEnum.CLEAR_COMPANY_JOBS,
    })
  }

  return {
    getJobs,
    clearJobs,
  }
}
