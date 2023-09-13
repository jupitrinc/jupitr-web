import { useContext } from "react"
import {
  ICompanyJobApplication,
  CompanyJobApplicationActionEnum,
} from "./companyJobApplication.types"
import { CompanyJobApplicationContext } from "./CompanyJobApplicationContext"
import useCompanyJobApplicationService from "services/company/useCompanyJobApplicationService"
import { useNotificationAction } from "state/notification/useNotificationAction"

export function useCompanyJobApplicationAction() {
  const { notify } = useNotificationAction()

  const { dispatch } = useContext(CompanyJobApplicationContext)
  const { getAllApplications: getApplicationsService } =
    useCompanyJobApplicationService()

  const getAllApplications = async (job_id: string) => {
    if (!job_id) return

    dispatch({
      type: CompanyJobApplicationActionEnum.GET_APPLICATIONS_BEGIN,
    })

    const { data, error } = await getApplicationsService(job_id)
    if (error) {
      dispatch({
        type: CompanyJobApplicationActionEnum.GET_APPLICATIONS_FAILURE,
      })

      notify({
        message: "Oops, something went wrong. Try refreshing the page.",
        type: "warning",
      })
    } else {
      dispatch({
        type: CompanyJobApplicationActionEnum.GET_APPLICATIONS_SUCCESS,
        payload: data as ICompanyJobApplication,
      })
    }
  }

  const clearApplications = () => {
    dispatch({
      type: CompanyJobApplicationActionEnum.CLEAR_APPLICATIONS,
    })
  }

  return {
    getAllApplications,
    clearApplications,
  }
}
