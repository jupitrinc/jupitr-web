import React, { useRef } from "react"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { useUserState } from "state/user/useUserState"
import { AccountTypeEnum } from "state/user/user.types"

export const Intro = () => {
  const { user } = useUserState()
  const inputRef = useRef(null)

  return (
    <div className="space-y-5 text-center">
      <div>
        <button>
          <Avatar size={36} image_url={user.avatar_url} />
        </button>

        <input
          type="file"
          ref={inputRef}
          accept="image/png, image/jpeg"
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