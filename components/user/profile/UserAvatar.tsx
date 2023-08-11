import React, { useCallback } from "react"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Uploader } from "ui-library/uploader/Uploader"
import { useUserAction } from "state/user/useUserAction"
import { urlHelper } from "helper/urlHelper"
import { useUserState } from "state/user/useUserState"
import { imageHelper } from "helper/imageHelper"

const UserAvatar = () => {
  const { user } = useUserState()
  const { updateAvatar } = useUserAction()
  const { avatarUrl } = urlHelper
  const assetFolder = `user/${user.id}/profile`

  const handleUpload = useCallback(async (event) => {
    if (event.target.files) {
      const file = event.target.files[0]
      const fileExt = file.name.split(".").pop()
      const fileName = `${user.id}.${fileExt}`
      const filePath = `${assetFolder}/${fileName}`
      const resizedFile = await imageHelper.resize(file)
      updateAvatar(resizedFile, filePath, user.id)
    }
  }, [])

  return (
    <Uploader onChange={handleUpload} accept="image/jpg, image/jpeg, image/png">
      <Avatar size={36} image_url={avatarUrl(user.avatar_url)} />
    </Uploader>
  )
}

export default UserAvatar
