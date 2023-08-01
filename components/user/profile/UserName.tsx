import React from "react"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { useStringState } from "helper/hooks/useDataState"
import { useUserAction } from "state/user/useUserAction"
import { useUserState } from "state/user/useUserState"

export const UserName = () => {
  const { user } = useUserState()
  const { updateName } = useUserAction()
  const { value, setValue } = useStringState(user.name)

  const update = () => {
    if (value && value !== user.name) {
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
}
