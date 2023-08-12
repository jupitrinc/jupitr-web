export const storageFolderHelper = {
  userAvatarFolder: (user_id: string) => {
    if (!user_id) return undefined

    return `user/${user_id}/profile`
  },
  companyLogoFolder: (company_id: string) => {
    if (!company_id) return undefined

    return `company/${company_id}/logo`
  },
}
