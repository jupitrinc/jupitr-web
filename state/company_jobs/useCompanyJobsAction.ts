import { useContext } from "react"
import { CompanyJobsActionEnum, ICompanyJobs } from "./companyJobs.types"
import { CompanyJobsContext } from "./CompanyJobsContext"
import companyJobService from "services/company/companyJobService"
import { useNotificationAction } from "state/notification/useNotificationAction"

export function useCompanyJobsAction() {
  const { notify } = useNotificationAction()

  const { dispatch } = useContext(CompanyJobsContext)

  const { getAllJobs: getJobsService } = companyJobService()

  const getJobs = async (company_id: string) => {
    if (!company_id) return

    dispatch({
      type: CompanyJobsActionEnum.GET_COMPANY_JOBS_BEGIN,
    })

    const { data, error } = await getJobsService(company_id)

    if (error) {
      dispatch({
        type: CompanyJobsActionEnum.GET_COMPANY_JOBS_FAILURE,
      })

      notify({
        message: error.message,
        type: "warning",
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
