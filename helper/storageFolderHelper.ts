export const storageFolderHelper = {
  userAvatarFolder: (user_id: string) => {
    if (!user_id) return undefined

    return `user/${user_id}/profile`
  },

  talentIntroVideoFolder: (user_id: string) => {
    if (!user_id) return undefined

    return `user/${user_id}/profile/video/intro`
  },
  companyLogoFolder: (company_id: string) => {
    if (!company_id) return undefined

    return `company/${company_id}/logo`
  },
  companyJobVideoFolder: ({
    company_id,
    job_id,
  }: {
    company_id: string
    job_id: string
  }) => {
    return `company/${company_id}/jobs/${job_id}`
  },
  jobApplicationVideoFolder: ({
    company_id,
    job_id,
  }: {
    company_id: string
    job_id: string
  }) => {
    return `company/${company_id}/jobs/${job_id}/applicants`
  },
}
