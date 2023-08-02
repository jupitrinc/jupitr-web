import { TalentAppLayout } from "layouts/TalentAppLayout"
import { Sections } from "components/talent/profile/Sections"
import { TalentProfileContextProvider } from "state/talent_profile/TalentProfileContext"

export default function TalentProfile() {
  return (
    <TalentAppLayout>
      <TalentProfileContextProvider>
        <Sections />
      </TalentProfileContextProvider>
    </TalentAppLayout>
  )
}
