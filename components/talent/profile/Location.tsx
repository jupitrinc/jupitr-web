import React, { useMemo } from "react"
import { useTalentProfileAction } from "state/talent_profile/useTalentProfileAction"
import { useTalentProfileState } from "state/talent_profile/useTalentProfileState"
import { CheckboxGroup } from "ui-library/form/checkbox/checkbox-group/CheckboxGroup"
import { SectionHeader } from "./Sections"
import { CheckboxProps } from "ui-library/form/checkbox/checkbox/Checkbox.types"

const locations = ["London"]

export const Location = () => {
  const { talent_profile } = useTalentProfileState()
  const data = talent_profile.preferences.location

  const { addLocation, removeLocation } = useTalentProfileAction()

  const handleOnChange = (e) => {
    const { value, checked } = e.target

    if (checked) {
      addLocation(value)
    } else if (!checked) {
      removeLocation(value)
    }
  }

  const items = useMemo(() => {
    const items_array = [] as CheckboxProps[]
    for (const location of locations) {
      items_array.push({
        label: location,
        name: location,
        value: location,
        checked: data.includes(location) ? true : false,
        onChange: handleOnChange,
      })
    }
    return items_array
  }, [data])

  return (
    <>
      <SectionHeader title="Location" />
      <form className="flex flex-row gap-5 flex-wrap">
        <CheckboxGroup items={items} />
      </form>
    </>
  )
}
