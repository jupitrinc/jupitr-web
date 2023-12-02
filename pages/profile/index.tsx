import { TalentAppLayout } from "layouts/TalentAppLayout"
import Sections from "components/talent/profile-edit/Sections"
import Checks from "components/talent/profile-edit/checks/ProfileChecks"
import ProfileActions from "components/talent/profile-edit/ProfileActions"

export default function TalentProfile() {
  return (
    <TalentAppLayout>
      <Checks />
      <ProfileActions />
      <Sections />
    </TalentAppLayout>
  )
}
