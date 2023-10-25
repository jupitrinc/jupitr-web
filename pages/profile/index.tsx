import { TalentAppLayout } from "layouts/TalentAppLayout"
import Sections from "components/talent/profile/Sections"
import Checks from "components/talent/profile/checks/ProfileChecks"

export default function TalentProfile() {
  return (
    <TalentAppLayout>
      <Checks />
      <Sections />
    </TalentAppLayout>
  )
}
