import { TalentProfileType } from "state/talent_profile/talentProfile.types"

interface props {
  skills: TalentProfileType["skills"]
}

export const Skills: React.FC<props> = ({ skills }) => {
  return <span></span>
}
