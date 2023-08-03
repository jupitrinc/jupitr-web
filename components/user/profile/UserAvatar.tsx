import React from "react"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Uploader } from "ui-library/uploader/Uploader"
import { useUserAction } from "state/user/useUserAction"
import { urlHelper } from "helper/urlHelper"
import { useUserState } from "state/user/useUserState"

const UserAvatar = () => {
  const { user } = useUserState()
  const { updateAvatar } = useUserAction()
  const { avatarUrl } = urlHelper

  const handleUpload = async (event) => {
    if (event.target.files) {
      const file = event.target.files[0]
      const fileExt = file.name.split(".").pop()
      const fileName = `avatar.${fileExt}`
      const filePath = `${user.id}/${fileName}`

      updateAvatar(file, filePath, user.id)
    }
  }

  return (
    <Uploader onChange={handleUpload} accept="image/jpg, image/jpeg, image/png">
      <Avatar size={36} image_url={avatarUrl(user.avatar_url)} />
    </Uploader>
  )
}

export default UserAvatar
