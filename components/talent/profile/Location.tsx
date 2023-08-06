import React from "react"
import { useTalentProfileAction } from "state/talent_profile/useTalentProfileAction"
import { useUserState } from "state/user/useUserState"
import { Select } from "ui-library/form/select/Select"
import { static_data_locations } from "data/location"

const Location = () => {
  const { user } = useUserState()
  const { updateLocation } = useTalentProfileAction()

  const changeLocation = (e) => {
    const location = JSON.parse(e.target.value)
    if (!location) return

    updateLocation(user.id, location, user.preferences)
  }

  return (
    <Select
      options={static_data_locations}
      label="Location"
      placeholder="Select"
      onChange={changeLocation}
      value={user.preferences?.location}
    />
  )
}

export default Location
