import React from "react"
import { Select } from "ui-library/form/select/Select"
import { useCompanyProfileState } from "state/company_profile/useCompanyProfileState"
import { static_data_company } from "data/company"
import { useCompanyProfileAction } from "state/company_profile/useCompanyProfileAction"

const Size = () => {
  const { company_profile } = useCompanyProfileState()
  const { updateSize } = useCompanyProfileAction()

  return (
    <Select
      label="Size"
      placeholder="Select"
      options={static_data_company.size_options}
      magic_word="people"
      name="company-people"
      value={company_profile.size}
      onChange={(e) =>
        updateSize(company_profile.id, JSON.parse(e.target.value))
      }
    />
  )
}

export default Size
