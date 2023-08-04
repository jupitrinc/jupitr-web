import React, { useState } from "react"
import Link from "next/link"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Button } from "ui-library/button/Button"
import { Divider } from "ui-library/content/divider/Divider"
import { Label } from "ui-library/form/label/Label"
import { NumberInput } from "ui-library/form/number-input/NumberInput"
import { Select } from "ui-library/form/select/Select"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { Textarea } from "ui-library/form/textarea/Textarea"
import { Text } from "ui-library/text/Text"
import { ChevronLeft } from "lucide-react"
import { Multiselect } from "ui-library/form/multiselect/Multiselect"
import { static_data_company } from "data/company"
import { Uploader } from "ui-library/uploader/Uploader"
import { AddCompany } from "state/company_profile/companyProfile.types"
import { industry_test_data } from "state/industry/industry.testdata"
import { Pill } from "ui-library/pill/Pill"
import { IIndustry } from "state/industry/industry.types"
import { useImagePreview } from "helper/hooks/useImagePreview"
import { useUserState } from "state/user/useUserState"
import { useUserAction } from "state/user/useUserAction"

export const SignUp = () => {
  const { error, loading } = useUserState()
  const { signUpCompany } = useUserAction()
  const [company, setCompany] = useState<AddCompany>({
    name: "",
    logo: "",
    year_founded: "2023",
    mission: "",
    website: "",
    email: "",
    industry: [],
    size: "",
  })
  const { preview } = useImagePreview(company.logo)

  const addIndustry = (option: IIndustry) => {
    if (!company.industry.find((i) => i.id === option.id)) {
      setCompany({
        ...company,
        industry: [...company.industry, option],
      })
    }
  }

  const removeIndustry = (option: IIndustry) => {
    setCompany({
      ...company,
      industry: [...company.industry.filter((i) => i.id !== option.id)],
    })
  }

  const selectLogo = (e) => {
    if (e.target.files) {
      setCompany({ ...company, logo: e.target.files[0] })
    }
  }

  const addCompany = (e) => {
    e.preventDefault()

    // 1. validate

    // 2. submit
    signUpCompany(company)
  }

  return (
    <div className="max-w-sm mx-auto flex flex-col space-y-10 text-center w-full">
      <div className="mb-10 flex justify-between">
        <Link href="/">
          <Button variant="text" icon={<ChevronLeft />} label="Back" />
        </Link>

        <Link href="/login">
          <Button label="Sign in" />
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        <Text as="h1" size="xl2">
          Sign up
        </Text>
        <Text as="p">Add your company profile</Text>
      </div>

      <form
        className="flex flex-col gap-5 justify-center"
        onSubmit={addCompany}
      >
        <TextInput
          label="Company name"
          placeholder="Company name"
          name="company-name"
          value={company.name}
          onChange={(e) => setCompany({ ...company, name: e.target.value })}
        />
        <NumberInput
          label="Year founded"
          placeholder="Year founded"
          name="company-year-founded"
          value={Number(company.year_founded)}
          onChange={(e) =>
            setCompany({ ...company, year_founded: e.target.value })
          }
        />
        <TextInput
          label="Website"
          placeholder="Website URL"
          name="company-website"
          value={company.website}
          onChange={(e) => setCompany({ ...company, website: e.target.value })}
        />
        <Select
          label="Size"
          options={static_data_company.size_options}
          magic_word="people"
          name="company-people"
          defaultValue={company.size}
          onChange={(e) => setCompany({ ...company, size: e.target.value })}
        />

        <div className="flex flex-col gap-5">
          <Multiselect
            label="Industry/Sector"
            options={industry_test_data}
            placeholder="AI, fintech ..."
            onChange={(option) => addIndustry(option)}
          />

          <div className="flex flex-wrap gap-2">
            {company.industry.map((option) => (
              <Pill
                key={option.id}
                label={option.name}
                type="clickable"
                onClick={() => removeIndustry(option)}
              />
            ))}
          </div>
        </div>

        <Textarea
          label="Mission"
          name="company-mission"
          maxLength={250}
          placeholder="Why do you exist?"
          value={company.mission}
          onChange={(e) => setCompany({ ...company, mission: e.target.value })}
        />

        <div className="flex flex-col gap-5 text-left">
          <Divider />
          <div className="flex flex-col gap-5 items-start">
            <Label value="Company logo" htmlFor="" />

            <Uploader
              accept="image/jpg, image/jpeg, image/png"
              onChange={selectLogo}
            >
              <Avatar size={20} type="image" image_url={preview} />
            </Uploader>
          </div>

          <Divider />
        </div>

        <TextInput
          placeholder="Email address"
          name="company-email"
          value={company.email}
          onChange={(e) => setCompany({ ...company, email: e.target.value })}
        />

        <Button
          label="Sign up"
          type="submit"
          color="special"
          size="base"
          disabled={loading}
          loading={loading}
        />
      </form>
    </div>
  )
}
