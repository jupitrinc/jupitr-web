import React from "react"
import { Card } from "ui-library/content/card/Card"
import SocialLinks from "./SocialLinks"
import Skills from "./Skills"
import AccountSettings from "components/user/account-settings/AccountSettings"
import UserProfile from "components/user/profile/UserProfile"
import Location from "./Location"
import Searching from "./Searching"

const Sections = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Card type="section">
        <div className="flex justify-end">
          <Searching />
        </div>

        <UserProfile />
        <SocialLinks />
        <Location />
      </Card>

      <Skills />
      <AccountSettings />
    </div>
  )
}

export default Sections
