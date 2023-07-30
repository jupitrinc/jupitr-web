import React, { memo } from "react"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { useUserState } from "state/user/useUserState"
import { supabaseClientComponent } from "../../services/_supabase/client"
import { Uploader } from "ui-library/uploader/Uploader"
import { useDataState } from "helper/hooks/useDataState"
import { useUserAction } from "state/user/useUserAction"

export const Intro = () => {
  const { user } = useUserState()

  return (
    <div className="space-y-5 text-center">
      <UserAvatar avatar={user.avatar_url} />
      <UserName name={user.name} />
    </div>
  )
}

const UserName = memo(({ name }: { name: string }) => {
  const { value: userName, setValue: setUserName } = useDataState(name)
  const { user } = useUserState()
  const { updateName } = useUserAction()

  const update = () => {
    if (userName && userName !== name) {
      updateName(user.id, userName)
    }
  }

  return (
    <TextInput
      placeholder="My name is ..."
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      onBlur={update}
      light={true}
      maxLength={50}
    />
  )
})

UserName.displayName = "UserName"

const UserAvatar = memo(({ avatar }: { avatar: string }) => {
  const { value: avatar_url, setValue: setAvatar } = useDataState(avatar)
  const { user } = useUserState()
  const { updateAvatar, uploadAvatar } = useUserAction()
  async function handleImageUpload(event) {
    try {
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.")
      }

      const file = event.target.files[0]
      const fileExt = file.name.split(".").pop()
      const fileName = `avatar.${fileExt}`
      const filePath = `${user.id}/${fileName}`
      if (user?.avatar_url && !user?.avatar_url.includes("google")) {
        await updateAvatar(
          {
            file,
            filePath,
          },
          user.id
        )
      } else {
        await uploadAvatar(
          {
            file,
            filePath,
          },
          user.id
        )
      }
    } catch (error) {
      alert(error.message)
    } finally {
      //setUploading(false)
    }
  }

  return (
    <div className="relative">
      <div className="absolute top-[60%] right-[40%]">
        <Uploader
          onChange={handleImageUpload}
          accept="image/jpg, image/jpeg, image/png"
        />
      </div>

      <Avatar size={36} image_url={avatar_url} />
    </div>
  )
})

UserAvatar.displayName = "UserAvatar"
