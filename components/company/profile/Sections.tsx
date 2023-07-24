import React from "react"
import { Card } from "ui-library/card/Card"
import { Details } from "./Details"
import { Intro } from "components/user/Intro"
import { AccountSettings } from "components/user/account-settings/AccountSettings"
import { TextInput } from "ui-library/form/text-input/TextInput"

export const Sections: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="space-y-5">
        <Card type="section">
          <Intro />
          <TextInput
            placeholder="Job title"
            name="job-title"
            label="Job title"
          />
        </Card>
        <AccountSettings />
      </div>

      <Details />
    </div>
  )
}
