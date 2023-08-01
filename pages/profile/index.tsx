import { TalentLayout } from "layouts/TalentLayout"
import { Sections } from "components/talent/profile/Sections"
import { TalentProfileContextProvider } from "state/talent_profile/TalentProfileContext"

export default function TalentProfile() {
  return (
    <TalentLayout>
      <TalentProfileContextProvider>
        <Sections />
      </TalentProfileContextProvider>
    </TalentLayout>
  )
}
