import React from "react"
import { Textarea } from "ui-library/form/textarea/Textarea"
import { useCompanyProfileState } from "state/company_profile/useCompanyProfileState"
import { useReactiveState } from "helper/hooks/useReactiveState"
import { useCompanyProfileAction } from "state/company_profile/useCompanyProfileAction"

const Mission = () => {
  const { company_profile } = useCompanyProfileState()
  const { value, setValue } = useReactiveState("", company_profile.mission)
  const { updateMission } = useCompanyProfileAction()

  const update = () => {
    if (value && value !== company_profile.mission) {
      updateMission(company_profile.id, value)
    }
  }

  return (
    <Textarea
      label="Mission"
      name="company-mission"
      placeholder="Why do you exist?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={update}
      maxLength={250}
    />
  )
}

export default Mission
