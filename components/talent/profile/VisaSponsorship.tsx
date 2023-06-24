import React from "react"
import { talentProfileAction } from "state/talent_profile/talentProfileAction"
import { talentProfileState } from "state/talent_profile/talentProfileState"
import { Toggle } from "ui-library/form/toggle/Toggle"
import { Text } from "ui-library/text/Text"
import { SectionHeader } from "./Sections"

export const VisaSponsorship = () => {
  const { talent_profile } = talentProfileState()
  const visa_sponsorship = talent_profile.preferences.visa_sponsorship

  const { toggleVisaSponsorship } = talentProfileAction()

  const handleOnChange = (e) => {
    const { checked } = e.target
    toggleVisaSponsorship(checked)
  }

  return (
    <>
      <SectionHeader title="Visa sponsorship" />

      <div className="flex justify-between">
        <Text as="span">Do you require visa sponsorship?</Text>
        <Toggle
          checked={visa_sponsorship}
          size="xl"
          onChange={handleOnChange}
        />
      </div>
    </>
  )
}
