import { useContext } from "react"
import {
  CompanyMemberProfileActionEnum,
  ICompanyMemberProfile,
} from "./companyMemberProfile.types"
import { UserContext } from "state/user/UserContextProvider"
import companyMemberService from "services/company/companyMemberService"
import { useNotificationAction } from "state/notification/useNotificationAction"

export function useCompanyMemberProfileAction() {
  const { notify } = useNotificationAction()

  const { dispatch } = useContext(UserContext)
  const { updateProfile } = companyMemberService()

  const updateJobTitle = async (
    user_id: ICompanyMemberProfile["user_id"],
    job_title: ICompanyMemberProfile["job_title"]
  ) => {
    if (!user_id || !job_title) return
    const { data, error } = await updateProfile(
      {
        job_title: job_title,
      },
      user_id
    )

    if (data) {
      dispatch({
        type: CompanyMemberProfileActionEnum.UPDATE_JOB_TITLE,
        payload: data.job_title,
      })
    }

    if (error) {
      notify({
        message: "Failed to update name",
        type: "warning",
      })
    }
  }

  return {
    updateJobTitle,
  }
}
