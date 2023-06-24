import { useEffect } from "react"
import { AppLayout } from "layouts/AppLayout"
import { Sections } from "components/talent/profile/Sections"
import { TalentProfileContextProvider } from "state/talent_profile/TalentProfileContext"
import { talentProfileState } from "state/talent_profile/talentProfileState"
import { useUserState } from "state/user/userState"
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
        <Sections />
      </TalentProfileContextProvider>
    </AppLayout>
  )
}
