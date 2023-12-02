import { TalentAppLayout } from "layouts/TalentAppLayout"
import Sections from "components/talent/profile/Sections"
import Checks from "components/talent/profile/checks/ProfileChecks"
import ProfileActions from "components/talent/profile/ProfileActions"

export default function TalentProfile() {
  return (
    <TalentAppLayout>
      <Checks />
      <ProfileActions />
      <Sections />
    </TalentAppLayout>
  )
}
