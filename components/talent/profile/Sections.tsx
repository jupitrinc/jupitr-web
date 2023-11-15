import React from "react"
import { Card } from "ui-library/content/card/Card"
import SocialLinks from "./SocialLinks"
import Skills from "./Skills"
import AccountSettings from "components/user/account-settings/AccountSettings"
import UserProfile from "components/user/profile/UserProfile"
import Location from "./Location"
import Searching from "./Searching"
import IntroVideo from "./IntroVideo"

const Sections = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div>
        <Card type="section">
          <div className="flex justify-end">
            <Searching />
          </div>

          <UserProfile />

          <SocialLinks />
          <Location />
        </Card>
      </div>

      <div>
        <Skills />
      </div>
      <div className="flex flex-col gap-5">
        <IntroVideo />
        <AccountSettings />
      </div>
    </div>
  )
}

export default Sections
