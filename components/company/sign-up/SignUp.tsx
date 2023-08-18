import React, { useEffect } from "react"
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
import { Pill } from "ui-library/pill/Pill"
import { useUserState } from "state/user/useUserState"
import { useSignUp } from "./useSignUp"
import { useNotification } from "helper/hooks/useNotification"
import { Toast } from "ui-library/toast/Toast"

export const SignUp = () => {
  const { loading, error } = useUserState()
  const {
    addCompany,
    company,
    setCompany,
    invalid,
    validationFailed,
    industries,
    addIndustry,
    removeIndustry,
    selectLogo,
    logoPreview,
  } = useSignUp()

  const { notification, showNotification, hideNotification } = useNotification()

  useEffect(() => {
    if (error || validationFailed) {
      showNotification()
    }
  }, [error, validationFailed])

  return (
    <div className="max-w-sm mx-auto flex flex-col space-y-10 text-center w-full relative">
      <div className="mb-10 flex justify-between">
        <Link href="/">
          <Button variant="text" icon={<ChevronLeft />} label="Back" />
        </Link>

        <Link href="/">
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
          invalid={invalid.name}
          maxLength={50}
        />
        <NumberInput
          label="Year founded"
          placeholder="Year founded"
          name="company-year-founded"
          value={Number(company.year_founded)}
          onChange={(e) =>
            setCompany({ ...company, year_founded: e.target.value })
          }
          invalid={invalid.year_founded}
        />
        <TextInput
          label="Website"
          placeholder="Website URL"
          name="company-website"
          value={company.website}
          onChange={(e) => setCompany({ ...company, website: e.target.value })}
          invalid={invalid.website}
          maxLength={100}
        />
        <Select
          label="Size"
          placeholder="Select"
          options={static_data_company.size_options}
          magic_word="people"
          name="company-people"
          value={company.size}
          onChange={(e) =>
            setCompany({ ...company, size: JSON.parse(e.target.value) })
          }
          invalid={invalid.size}
        />

        <div className="flex flex-col gap-5">
          <Multiselect
            label="Industry/Sector"
            options={industries}
            placeholder="AI, Fintech ..."
            onChange={(option) => addIndustry(option)}
            invalid={invalid.industry}
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
          invalid={invalid.mission}
        />

        <div className="flex flex-col gap-5 text-left">
          <Divider />
          <div className="flex flex-col gap-5 items-start">
            <Label value="Company logo" htmlFor="" invalid={invalid.logo} />

            <Uploader
              accept="image/jpg, image/jpeg, image/png"
              onChange={selectLogo}
            >
              <Avatar size={20} type="image" image_url={logoPreview} />
            </Uploader>
          </div>

          <Divider />
        </div>

        <TextInput
          label="Email address"
          placeholder="hello@world.com"
          name="company-email"
          value={company.email}
          onChange={(e) => setCompany({ ...company, email: e.target.value })}
          invalid={invalid.email}
          maxLength={100}
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

      <Toast
        show={notification}
        onHide={hideNotification}
        label={error ? error : "Please provide the required information"}
      />
    </div>
  )
}
