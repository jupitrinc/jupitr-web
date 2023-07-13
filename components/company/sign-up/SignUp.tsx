import React from "react"
import Link from "next/link"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Button } from "ui-library/button/Button"
import { Divider } from "ui-library/divider/Divider"
import { Label } from "ui-library/form/label/Label"
import { NumberInput } from "ui-library/form/number-input/NumberInput"
import { Select } from "ui-library/form/select/Select"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { Textarea } from "ui-library/form/textarea/Textarea"
import { Text } from "ui-library/text/Text"
import { ChevronLeft } from "lucide-react"
import { company } from "data/company"

export const SignUp = () => {
  return (
    <div className="max-w-sm mx-auto flex flex-col space-y-10 text-center w-full">
      <div className="mb-10 flex justify-between">
        <Link href="/">
          <Button variant="text" icon={<ChevronLeft />} label="Back" />
        </Link>

        <Link href="/login">
          <Button variant="text" label="Sign in" />
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        <Text as="h1" size="xl2">
          Sign up
        </Text>
        <Text as="p">Add your company profile</Text>
      </div>

      <form className="flex flex-col gap-5 justify-center">
        <TextInput placeholder="Company name" name="company-name" />
        <NumberInput placeholder="Year founded" name="company-year-founded" />
        <TextInput placeholder="Website URL" name="company-website" />
        <Select
          options={company.size_options}
          magic_word="people"
          name="company-people"
        />
        <TextInput placeholder="Industry" />
        <Textarea
          name="company-mission"
          maxLength={250}
          placeholder="Mission"
        />

        <div className="flex flex-col gap-5 text-left">
          <Divider />
          <div className="flex flex-col gap-5 items-center">
            <Label value="Upload logo" htmlFor="" />
            <Avatar size={36} />
          </div>

          <Divider />
        </div>

        <TextInput placeholder="Email address" name="company-email" />

        <Button label="Sign up" type="submit" color="special" size="base" />
      </form>
    </div>
  )
}
