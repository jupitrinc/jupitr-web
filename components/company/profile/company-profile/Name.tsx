import React from "react"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { useCompanyProfileState } from "state/company_profile/useCompanyProfileState"
import { useReactiveState } from "helper/hooks/useReactiveState"
import { useCompanyProfileAction } from "state/company_profile/useCompanyProfileAction"

const Name = () => {
  const { company_profile } = useCompanyProfileState()
  const { value, setValue } = useReactiveState("", company_profile.name)
  const { updateName } = useCompanyProfileAction()

  const update = () => {
    if (value && value !== company_profile.name) {
      updateName(company_profile.id, value)
    }
  }

  return (
    <TextInput
      placeholder="Company name"
      name="company-name"
      label="Company name"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={update}
      maxLength={50}
    />
  )
}

export default Name
