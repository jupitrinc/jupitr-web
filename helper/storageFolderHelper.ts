export const storageFolderHelper = {
  userAvatarFolder: (user_id: string) => {
    if (!user_id) return undefined

    return `user/${user_id}/profile`
  },

  talentIntroVideoFolder: (user_id: string) => {
    if (!user_id) return undefined

    return `user/${user_id}/profile/video/intro`
  },
}
