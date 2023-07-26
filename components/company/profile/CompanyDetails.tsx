import React from "react"
import { useCompanyProfileState } from "state/company_profile/useCompanyProfileState"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Card } from "ui-library/card/Card"
import { NumberInput } from "ui-library/form/number-input/NumberInput"
import { Select } from "ui-library/form/select/Select"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { static_data_company } from "data/company"
import { Multiselect } from "ui-library/form/multiselect/Multiselect"
import { Textarea } from "ui-library/form/textarea/Textarea"

export const CompanyDetails: React.FC = () => {
  const { company_profile } = useCompanyProfileState()
  return (
    <Card type="section">
      <div className="flex flex-col gap-5">
        <div className="flex justify-center">
          <Avatar size={36} image_url={company_profile.logo} />
        </div>

        <TextInput
          placeholder="Company name"
          name="company-name"
          label="Company name"
          defaultValue={company_profile.name}
        />

        <NumberInput
          placeholder="Year founded"
          name="company-year-founded"
          label="Year founded"
          defaultValue={Number(company_profile.year_founded)}
        />

        <TextInput
          placeholder="Website"
          name="company-website"
          label="Website"
          defaultValue={company_profile.website}
        />

        <Select
          label="Size"
          name="company-people"
          options={static_data_company.size_options}
          defaultValue={company_profile.size}
          magic_word="people"
          onChange={(e) => alert(e.target.value)}
        />

        <Multiselect
          options={company_profile.industry}
          placeholder=" E.g. AI, Metaverse"
          onChange={(option) => alert(option.name)}
          label="Industry/Market"
        />

        <Textarea
          name="company-mission"
          maxLength={250}
          placeholder="Mission"
          defaultValue={company_profile.mission}
        />
      </div>
    </Card>
  )
}
