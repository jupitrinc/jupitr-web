import React, { memo, useRef, useState } from "react"
import { Edit } from "lucide-react"
import { UserType } from "state/user/user.types"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Button } from "ui-library/button/Button"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { Text } from "ui-library/text/Text"

interface props {
  user: UserType
}

export const Intro: React.FC<props> = memo(({ user }) => {
  const [editName, setEditName] = useState<boolean>(false)
  const inputRef = useRef(null)

  return (
    <div className="space-y-5 mb-10 text-center">
      <div>
        <button>
          <Avatar size={20} image_url={user.avatar} />
        </button>

        <input
          type="file"
          ref={inputRef}
          accept="image/png, image/jpeg"
          className="hidden"
        />
      </div>

      {editName ? (
        <TextInput placeholder="Name" value={user.name} />
      ) : (
        <div className="flex space-x-2 justify-center">
          <Text as="p" size="xl">
            {user.name}
          </Text>
          <Button
            icon={<Edit className="w-4 h-4" />}
            size="xs"
            onClick={() => setEditName(!editName)}
          />
        </div>
      )}
    </div>
  )
})

Intro.displayName = "Intro"
