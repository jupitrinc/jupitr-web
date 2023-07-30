import React, { memo } from "react"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { useUserState } from "state/user/useUserState"
import { useDataState } from "helper/hooks/useDataState"
import { useUserAction } from "state/user/useUserAction"
import { IUser } from "state/user/user.types"

interface props {
  name: IUser["name"]
}

export const UserName: React.FC<props> = memo((props) => {
  const { value, setValue } = useDataState(props.name)
  const { user } = useUserState()
  const { updateName } = useUserAction()

  const update = () => {
    if (value && value !== props.name) {
      updateName(user.id, value)
    }
  }

  return (
    <TextInput
      placeholder="My name is ..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={update}
      light={true}
      maxLength={50}
    />
  )
})

UserName.displayName = "UserName"
