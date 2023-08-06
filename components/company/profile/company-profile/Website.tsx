import React from "react"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { useCompanyProfileState } from "state/company_profile/useCompanyProfileState"
import { useStringState } from "helper/hooks/useDataState"
import { useCompanyProfileAction } from "state/company_profile/useCompanyProfileAction"

const Website = () => {
  const { company_profile } = useCompanyProfileState()
  const { value, setValue } = useStringState(company_profile.website)
  const { updateWebsite } = useCompanyProfileAction()

  const update = () => {
    if (value && value !== company_profile.website) {
      updateWebsite(company_profile.id, value)
    }
  }

  return (
    <TextInput
      placeholder="Website"
      name="company-website"
      label="Website"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={update}
      maxLength={100}
    />
  )
}

export default Website
