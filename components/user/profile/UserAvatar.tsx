import React, { useCallback } from "react"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Uploader } from "ui-library/uploader/Uploader"
import { useUserAction } from "state/user/useUserAction"
import { urlHelper } from "helper/urlHelper"
import { useUserState } from "state/user/useUserState"
import { imageHelper } from "helper/imageHelper"
import { storageFolderHelper } from "helper/storageFolderHelper"

const UserAvatar = () => {
  const { user } = useUserState()
  const { updateAvatar } = useUserAction()

  const handleUpload = useCallback(
    async (event) => {
      if (event.target.files && user.id) {
        const file = event.target.files[0]
        const fileExt = file.name.split(".").pop()
        const fileName = `${user.id}.${fileExt}`
        const filePath = `${storageFolderHelper.userAvatarFolder(
          user.id
        )}/${fileName}&updated=${Date.now()}`
        const resizedFile = await imageHelper.resize(file)
        updateAvatar(resizedFile, filePath, user.id)
      }
    },
    [user.id]
  )

  return (
    <Uploader onChange={handleUpload} accept="image/jpg, image/jpeg, image/png">
      <Avatar size={28} image_url={urlHelper.imageUrl(user.avatar_url)} />
    </Uploader>
  )
}

export default UserAvatar
