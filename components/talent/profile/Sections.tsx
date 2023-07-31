import React, { useEffect } from "react"
import { Card } from "ui-library/content/card/Card"
import { Select } from "ui-library/form/select/Select"
import { SocialLinks } from "./SocialLinks"
import { Skills } from "./Skills"
import { AccountSettings } from "components/user/account-settings/AccountSettings"
import { static_data_locations } from "data/location"
import { useUserState } from "state/user/useUserState"
import { useTalentProfileAction } from "state/talent_profile/useTalentProfileAction"
import { ITalentProfile } from "state/talent_profile/talentProfile.types"
import { useTalentProfileState } from "state/talent_profile/useTalentProfileState"
import { UserProfile } from "components/user/profile/UserProfile"

export const Sections: React.FC = () => {
  const { user } = useUserState()
  const { setProfile } = useTalentProfileAction()
  const { talent_profile } = useTalentProfileState()

  useEffect(() => {
    user.id && setProfile(user as ITalentProfile)
  }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Card type="section">
        <UserProfile />
        <SocialLinks socials={talent_profile.socials} />
        <Select options={static_data_locations} label="Location" />
      </Card>

      <Skills skills={talent_profile.skills} />

      <AccountSettings />
    </div>
  )
}
