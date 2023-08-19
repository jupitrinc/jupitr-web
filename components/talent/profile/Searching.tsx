import React from "react"
import { useTalentProfileAction } from "state/talent_profile/useTalentProfileAction"
import { useUserState } from "state/user/useUserState"
import { Toggle } from "ui-library/form/toggle/Toggle"

const Searching = () => {
  const { user } = useUserState()
  const { toggleSearching } = useTalentProfileAction()

  return (
    <Toggle
      label={user.searching ? "Looking for a job" : "Not looking for a job"}
      onChange={(e) => toggleSearching(user.id, e.target.checked)}
      checked={user.searching}
      size="lg"
    />
  )
}

export default Searching
