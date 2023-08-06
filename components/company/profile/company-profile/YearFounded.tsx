import React from "react"
import { NumberInput } from "ui-library/form/number-input/NumberInput"
import { useStringState } from "helper/hooks/useDataState"
import { useCompanyProfileState } from "state/company_profile/useCompanyProfileState"
import { useCompanyProfileAction } from "state/company_profile/useCompanyProfileAction"

const YearFounded = () => {
  const { company_profile } = useCompanyProfileState()
  const { value, setValue } = useStringState(company_profile.year_founded)
  const { updateYearFounded } = useCompanyProfileAction()

  const update = () => {
    if (value && value !== company_profile.year_founded) {
      updateYearFounded(company_profile.id, value)
    }
  }

  return (
    <NumberInput
      placeholder="Year founded"
      name="company-year-founded"
      label="Year founded"
      value={Number(value)}
      onChange={(e) => setValue(e.target.value)}
      onBlur={update}
    />
  )
}

export default YearFounded
