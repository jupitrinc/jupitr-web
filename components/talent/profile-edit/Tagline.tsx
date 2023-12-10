import React from "react"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { useReactiveState } from "helper/hooks/useReactiveState"
import { useUserState } from "state/user/useUserState"
import { useTalentProfileAction } from "state/talent_profile/useTalentProfileAction"

const Tagline = () => {
  const { user } = useUserState()
  const { updateTagline } = useTalentProfileAction()
  const { value, setValue } = useReactiveState("", user.tagline)

  const update = () => {
    if (value !== user.tagline) {
      updateTagline(user.id, value)
    }
  }

  return (
    <TextInput
      placeholder="Tagline ..."
      value={String(value)}
      name="tagline"
      onChange={(e) => setValue(e.target.value)}
      onBlur={update}
      maxLength={80}
    />
  )
}

export default Tagline
