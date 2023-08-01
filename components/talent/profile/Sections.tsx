import React from "react"
import { Card } from "ui-library/content/card/Card"
import { SocialLinks } from "./SocialLinks"
import { Skills } from "./Skills"
import { AccountSettings } from "components/user/account-settings/AccountSettings"
import { useUserState } from "state/user/useUserState"
import { UserProfile } from "components/user/profile/UserProfile"
import { Location } from "./Location"

export const Sections: React.FC = () => {
  const { user } = useUserState()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Card type="section">
        <UserProfile />
        <SocialLinks socials={user.socials} user_id={user.user_id} />
        <Location />
      </Card>

      <Skills skills={user.skills} />

      <AccountSettings />
    </div>
  )
}
