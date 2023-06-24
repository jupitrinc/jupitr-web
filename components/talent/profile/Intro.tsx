import React, { useRef } from "react"
import { userState } from "state/user/userState"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { TextInput } from "ui-library/form/text-input/TextInput"

export const Intro = () => {
  const { user } = userState()
  const inputRef = useRef(null)

  return (
    <div className="space-y-5 mb-10 text-center">
      <div>
        <button>
          <Avatar size={36} image_url={user.avatar} />
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
        //value={user.name}
        ghost={true}
        maxLength={50}
      />
    </div>
  )
}
