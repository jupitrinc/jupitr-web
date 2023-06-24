import { AppLayout } from "layouts/AppLayout"
import { TalentProfileContextProvider } from "state/talent_profile/TalentProfileContext"
import { Sections } from "components/talent/profile/Sections"

export default function TalentProfile() {
  // network call: get talent profile

  return (
    <AppLayout>
      <TalentProfileContextProvider>
        <Sections />
      </TalentProfileContextProvider>
    </AppLayout>
  )
}
