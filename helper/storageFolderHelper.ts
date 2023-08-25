import { imageHelper } from "./imageHelper"
import { JobMediaPayload } from "../services/storage/media.types"

export const storageFolderHelper = {
  userAvatarFolder: (user_id: string) => {
    if (!user_id) return undefined

    return `user/${user_id}/profile`
  },
  companyLogoFolder: (company_id: string) => {
    if (!company_id) return undefined

    return `company/${company_id}/logo`
  },
  companyJobApplicantsVideoFolder: ({
    company_id,
    job_id,
  }: JobMediaPayload) => {
    return `company/${company_id}/jobs/${job_id}/applicants`
  },
}
export const resizeFile = async (logo: File) => {
  return await imageHelper.resize(logo)
}
