import { useContext } from "react"
import {
  ICompanyJobApplication,
  CompanyJobApplicationActionEnum,
} from "./companyJobApplication.types"
import { CompanyJobApplicationContext } from "./CompanyJobApplicationContext"
import useCompanyJobApplicationService from "services/company/useCompanyJobApplicationService"

export function useCompanyJobApplicationAction() {
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
        payload: error.message,
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
