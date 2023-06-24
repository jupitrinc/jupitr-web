import React from "react"
import { useTalentProfileAction } from "state/talent_profile/useTalentProfileAction"
import { useTalentProfileState } from "state/talent_profile/useTalentProfileState"
import { Toggle } from "ui-library/form/toggle/Toggle"
import { Text } from "ui-library/text/Text"
import { SectionHeader } from "./Sections"

export const VisaSponsorship = () => {
  const { talent_profile } = useTalentProfileState()
  const visa_sponsorship = talent_profile.preferences.visa_sponsorship

  const { toggleVisaSponsorship } = useTalentProfileAction()

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
