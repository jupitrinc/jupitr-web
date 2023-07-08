import { useContext } from "react"
import { ICompanyJob, CompanyJobActionEnum } from "./companyJob.types"
import { CompanyJobContext } from "./CompanyJobContext"

export function useCompanyJobAction() {
  const { dispatch } = useContext(CompanyJobContext)

  const setJob = async (job: ICompanyJob) => {
    if (!job.id) return

    dispatch({
      type: CompanyJobActionEnum.SET_COMPANY_JOB,
      payload: job,
    })
  }

  return {
    setJob,
  }
}
