import React, { useCallback } from "react"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Uploader } from "ui-library/uploader/Uploader"
import { useUserAction } from "state/user/useUserAction"
import { urlHelper } from "helper/urlHelper"
import { useUserState } from "state/user/useUserState"

const UserAvatar = () => {
  const { user } = useUserState()
  const { updateAvatar } = useUserAction()

  const handleUpload = useCallback(
    async (event) => {
      if (event.target.files && user.id) {
        const file = event.target.files[0]
        updateAvatar(file, user.id)
      }
    },
    [user.id]
  )

  return (
    <Uploader onChange={handleUpload} accept="image/jpg, image/jpeg, image/png">
      <Avatar size={16} image_url={urlHelper.imageUrl(user.avatar_url)} />
    </Uploader>
  )
}

export default UserAvatar
