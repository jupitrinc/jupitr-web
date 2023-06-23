import { AppLayout } from "layouts/AppLayout"
import { Filters } from "components/talent/profile/Filters"
import { Intro } from "components/talent/profile/Intro"
import { SocialLinks } from "components/talent/profile/SocialLinks"
import { Skills } from "components/talent/profile/Skills"
import { TalentProfileContextProvider } from "state/talent_profile/TalentProfileContext"
import { talentProfileState } from "state/talent_profile/talentProfileState"
import { useUserState } from "state/user/userState"
import { useEffect } from "react"
import { useUserAction } from "state/user/userAction"

export default function TalentProfile() {
  const { signInWithOtp } = useUserAction()

  useEffect(() => {
    const fetchData = async () => {
      await signInWithOtp()
    }
    fetchData()
  }, [])

  return (
    <AppLayout>
      <TalentProfileContextProvider>
        <Components />
      </TalentProfileContextProvider>
    </AppLayout>
  )
}

const Components = () => {
  const { user } = useUserState()
  const { talent_profile } = talentProfileState()

  return (
    <div className="flex flex-col space-y-10 max-w-sm mx-auto w-full">
      <div className="space-y-5">
        <Intro user={user} />
        <SocialLinks links={talent_profile.social_links} />
      </div>
      <Skills skills={talent_profile.skills} />
      {/* <Filters filters={talent_profile.preferences} /> */}
    </div>
  )
}
