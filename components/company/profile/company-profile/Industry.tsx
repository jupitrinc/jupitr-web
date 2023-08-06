import React from "react"
import { Multiselect } from "ui-library/form/multiselect/Multiselect"
import { useCompanyProfileState } from "state/company_profile/useCompanyProfileState"
import { useIndustryState } from "state/industry/useIndustryState"
import { Pill } from "ui-library/pill/Pill"
import { IIndustry } from "state/industry/industry.types"
import { useCompanyProfileAction } from "state/company_profile/useCompanyProfileAction"

const Industry = () => {
  const { company_profile } = useCompanyProfileState()
  const { industries } = useIndustryState()
  const { updateIndustry } = useCompanyProfileAction()

  const addIndustry = (option: IIndustry) => {
    if (!company_profile.industry.find((i) => i.id === option.id)) {
      updateIndustry(company_profile.id, [option, ...company_profile.industry])
    }
  }

  const removeIndustry = (option: IIndustry) => {
    updateIndustry(company_profile.id, [
      ...company_profile.industry.filter((i) => i.id !== option.id),
    ])
  }

  return (
    <div className="flex flex-col gap-5">
      <Multiselect
        options={industries}
        placeholder="AI, Fintech ..."
        onChange={(option) => addIndustry(option)}
        label="Industry/Sector"
      />

      <div className="flex flex-wrap gap-2">
        {company_profile.industry &&
          company_profile.industry.map((option) => (
            <Pill
              key={option.id}
              label={option.name}
              type="clickable"
              onClick={() => removeIndustry(option)}
            />
          ))}
      </div>
    </div>
  )
}

export default Industry
