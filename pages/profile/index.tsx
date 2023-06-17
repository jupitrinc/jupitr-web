import { TalentLayout } from "layouts/TalentLayout"
import { Filters } from "components/talent/profile/Filters"
import { Intro } from "components/talent/profile/Intro"
import { SocialLinks } from "components/talent/profile/SocialLinks"
import { Skills } from "components/talent/profile/Skills"
import { TalentProfileContextProvider } from "state/talent_profile/TalentProfileContext"
import { talentProfileState } from "state/talent_profile/talentProfileState"
import { userState } from "state/user/userState"

export default function TalentProfile() {
  // network call: get talent profile

  return (
    <TalentProfileContextProvider>
      <Components />
    </TalentProfileContextProvider>
  )
}

const Components = () => {
  const { user } = userState()
  const { talent_profile } = talentProfileState()

  return (
    <TalentLayout>
      <Intro user={user} />
      <Skills skills={talent_profile.skills} />
      <SocialLinks links={talent_profile.social_links} />
      <Filters filters={talent_profile.preferences} />
    </TalentLayout>
  )
}
