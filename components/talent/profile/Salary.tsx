import React from "react"
import { talentProfileAction } from "state/talent_profile/talentProfileAction"
import { talentProfileState } from "state/talent_profile/talentProfileState"
import { SectionHeader } from "./Sections"
import { NumberInput } from "ui-library/form/number-input/NumberInput"
import { Text } from "ui-library/text/Text"
import { numberHelper } from "helper/numberHelper"

export const Salary = () => {
  const { talent_profile } = talentProfileState()
  const salary = talent_profile.preferences.min_salary

  const { updateSalary } = talentProfileAction()
  const { formatNumber } = numberHelper

  const handleOnChange = (e) => {
    const { value } = e.target
    const max_salary_length = 7 // £m

    value.length <= max_salary_length && updateSalary(Number(value))
  }

  return (
    <>
      <SectionHeader title="Salary" />

      <div className="flex flex-col space-y-10">
        <Text as="span" align="center" size="xl" color="important">
          &pound;{formatNumber(salary)}
        </Text>

        <NumberInput
          placeholder="Minimum salary ..."
          value={String(salary)}
          onChange={handleOnChange}
        />
      </div>
    </>
  )
}
