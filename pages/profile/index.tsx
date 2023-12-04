import { TalentAppLayout } from "layouts/TalentAppLayout"
import Sections from "components/talent/profile-edit/Sections"
import Checks from "components/talent/profile-edit/checks/ProfileChecks"

export default function TalentProfile() {
  return (
    <TalentAppLayout>
      <Checks />
      <Sections />
    </TalentAppLayout>
  )
}
