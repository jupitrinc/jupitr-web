import React from "react"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { useReactiveState } from "helper/hooks/useReactiveState"
import { useUserAction } from "state/user/useUserAction"
import { useUserState } from "state/user/useUserState"

const UserName = () => {
  const { user } = useUserState()
  const { updateName } = useUserAction()
  const { value, setValue } = useReactiveState("", user.name)

  const update = () => {
    if (value && value !== user.name) {
      updateName(user.id, value)
    }
  }

  return (
    <TextInput
      placeholder="My name is ..."
      value={value}
      name="user-name"
      onChange={(e) => setValue(e.target.value)}
      onBlur={update}
      light={true}
      maxLength={50}
    />
  )
}

export default UserName
