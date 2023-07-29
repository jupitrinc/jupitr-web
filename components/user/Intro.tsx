import React, { useRef, useState } from "react"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { useUserState } from "state/user/useUserState"
import { AccountTypeEnum } from "state/user/user.types"
import { supabaseClientComponent } from "../../services/_supabase/client"

export const Intro = () => {
  const { user } = useUserState()
  const [media, setMedia] = useState()
  const fileUploadRef = useRef(null)
  const triggerImageUpload = () => {
    fileUploadRef?.current?.click()
  }
  async function uploadAvatar(event) {
    try {
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.")
      }

      const file = event.target.files[0]

      const fileExt = file.name.split(".").pop()
      const fileName = `avatar.${fileExt}`
      const filePath = `${user.id}/${fileName}`

      const { error: uploadError } = await supabaseClientComponent.storage
        .from("avatars")
        .upload(filePath, file)

      if (uploadError) {
        if (uploadError?.error.toLowerCase() === "duplicate") {
          const { error } = await supabaseClientComponent.storage
            .from("avatars")
            .update(filePath, file, { upsert: true })
          if (error) {
            throw error
          }
        } else {
          throw uploadError
        }
      }
    } catch (error) {
      alert(error.message)
    } finally {
      //setUploading(false)
    }
  }
  return (
    <div className="space-y-5 text-center">
      <div>
        <button onClick={triggerImageUpload}>
          <Avatar size={36} name_initials="Rafael Magalhaes" />
        </button>

        <input
          type="file"
          ref={fileUploadRef}
          accept="image/*"
          onChangeCapture={uploadAvatar}
          className="hidden"
        />
      </div>

      <TextInput
        placeholder="My name is ..."
        defaultValue={user.name}
        light={true}
        maxLength={50}
      />
    </div>
  )
}
