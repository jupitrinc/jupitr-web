import React from "react"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Button } from "ui-library/button/Button"
import { Divider } from "ui-library/content/divider/Divider"
import { Label } from "ui-library/form/label/Label"
import { NumberInput } from "ui-library/form/number-input/NumberInput"
import { Select } from "ui-library/form/select/Select"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { Textarea } from "ui-library/form/textarea/Textarea"
import { Multiselect } from "ui-library/form/multiselect/Multiselect"
import { static_data_company } from "data/company"
import { Uploader } from "ui-library/uploader/Uploader"
import { Pill } from "ui-library/pill/Pill"
import { useUserState } from "state/user/useUserState"
import { useSignUp } from "./useSignUp"
import Confirmation from "./sign-up/Confirmation"
import Header from "./sign-up/Header"
import Navbar from "./sign-up/Navbar"

export const SignUp = () => {
  const { loading, success } = useUserState()
  const {
    addCompany,
    company,
    setCompany,
    invalid,
    industries,
    addIndustry,
    removeIndustry,
    selectLogo,
    logoPreview,
  } = useSignUp()

  return (
    <div className="max-w-sm mx-auto flex flex-col space-y-10 text-center w-full relative">
      <Navbar />

      {!success ? (
        <>
          <Header />

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
              onChange={(e) =>
                setCompany({ ...company, website: e.target.value })
              }
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
                onSelect={(option) => addIndustry(option)}
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
              onChange={(e) =>
                setCompany({ ...company, mission: e.target.value })
              }
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
              onChange={(e) =>
                setCompany({ ...company, email: e.target.value })
              }
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
        </>
      ) : (
        <Confirmation />
      )}
    </div>
  )
}
