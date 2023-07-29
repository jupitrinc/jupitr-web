import { AppLayout } from "layouts/AppLayout"
import { Sections } from "components/talent/profile/Sections"
import { TalentProfileContextProvider } from "state/talent_profile/TalentProfileContext"

export default function TalentProfile() {
  return (
    <AppLayout>
      <TalentProfileContextProvider>
        <Sections />
      </TalentProfileContextProvider>
    </AppLayout>
  )
}
