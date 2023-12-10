import React from "react"
import { Card } from "ui-library/content/card/Card"
import SocialLinks from "./SocialLinks"
import Skills from "./Skills"
import AccountSettings from "components/user/account-settings/AccountSettings"
import UserProfile from "components/user/profile/UserProfile"
import Location from "./Location"
import IntroVideo from "./IntroVideo"
import Projects from "./projects/Projects"

const Sections = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col gap-5">
        <Card type="section">
          <UserProfile />
        </Card>

        <IntroVideo />

        <Card type="section">
          <SocialLinks />
          <Location />
        </Card>
      </div>

      <div>
        <Skills />
      </div>
      <div className="flex flex-col gap-5">
        <Projects />
        <AccountSettings />
      </div>
    </div>
  )
}

export default Sections
