import { useContext } from "react"
import {
  CompanyMemberProfileActionEnum,
  ICompanyMemberProfile,
} from "./companyMemberProfile.types"
import { UserContext } from "state/user/UserContextProvider"
import useCompanyMemberProfileService from "services/company/useCompanyMemberProfileService"

export function useCompanyMemberProfileAction() {
  const { dispatch } = useContext(UserContext)
  const { updateProfile } = useCompanyMemberProfileService()

  const updateJobTitle = async (
    user_id: ICompanyMemberProfile["user_id"],
    company_id: ICompanyMemberProfile["company_id"],
    job_title: ICompanyMemberProfile["job_title"]
  ) => {
    if (!user_id || !job_title) return

    const { data, error } = await updateProfile({
      user_id: user_id,
      company_id: company_id,
      job_title: job_title,
    })

    if (data) {
      dispatch({
        type: CompanyMemberProfileActionEnum.UPDATE_JOB_TITLE,
        payload: job_title,
      })
    }
  }

  return {
    updateJobTitle,
  }
}
