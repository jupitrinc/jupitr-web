import React from "react"
import { useTalentProfileAction } from "state/talent_profile/useTalentProfileAction"
import { useTalentProfileState } from "state/talent_profile/useTalentProfileState"
import { SectionHeader } from "./Sections"
import { NumberInput } from "ui-library/form/number-input/NumberInput"
import { Text } from "ui-library/text/Text"
import { numberHelper } from "helper/numberHelper"

export const Salary = () => {
  const { talent_profile } = useTalentProfileState()
  const salary = talent_profile.preferences.min_salary

  const { updateSalary } = useTalentProfileAction()
  const { formatNumber } = numberHelper

  const handleOnChange = (e) => {
    const { value } = e.target
    const max_salary_length = 7 // £m

    value.length <= max_salary_length && updateSalary(Number(value))
  }

  return (
    <>
      <SectionHeader title="Minimum Salary" />

      <div className="flex flex-col space-y-10">
        <Text as="span" align="center" size="xl">
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
