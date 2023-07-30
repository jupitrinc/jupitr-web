import React, { memo } from "react"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { useUserState } from "state/user/useUserState"
import { Uploader } from "ui-library/uploader/Uploader"
import { useUserAction } from "state/user/useUserAction"
import { IUser } from "state/user/user.types"
import { urlHelper } from "helper/urlHelper"

interface props {
  avatar: IUser["avatar_url"]
}

export const UserAvatar: React.FC<props> = memo((props) => {
  const { user } = useUserState()
  const { updateAvatar } = useUserAction()
  const { avatarUrl } = urlHelper

  const uploadOrUpdate = () => {
    return user.avatar_url && !user.avatar_url.includes("google")
      ? "update"
      : "upload"
  }

  const handleUpload = async (event) => {
    if (event.target.files) {
      const file = event.target.files[0]
      const fileExt = file.name.split(".").pop()
      const fileName = `avatar.${fileExt}`
      const filePath = `${user.id}/${fileName}`

      updateAvatar(file, filePath, user.id, uploadOrUpdate())
    }
  }

  return (
    <div className="relative">
      <div className="absolute top-[60%] right-[40%]">
        <Uploader
          onChange={handleUpload}
          accept="image/jpg, image/jpeg, image/png"
        />
      </div>

      <Avatar size={36} image_url={avatarUrl(props.avatar)} />
    </div>
  )
})

UserAvatar.displayName = "UserAvatar"
