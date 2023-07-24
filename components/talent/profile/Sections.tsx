import React from "react"
import { Card } from "ui-library/card/Card"
import { Select } from "ui-library/form/select/Select"
import { Intro } from "../../user/Intro"
import { SocialLinks } from "./SocialLinks"
import { Skills } from "./Skills"
import { AccountSettings } from "components/user/account-settings/AccountSettings"
import { static_data_locations } from "data/location"

export const Sections: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Card type="section">
        <Intro />
        <SocialLinks />
        <Select options={static_data_locations} label="Location" />
      </Card>

      <Skills />

      <AccountSettings />
    </div>
  )
}
