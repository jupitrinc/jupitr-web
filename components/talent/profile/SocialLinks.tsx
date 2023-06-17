import React from "react"
import { TalentProfileType } from "state/talent_profile/talentProfile.types"

interface props {
  links: TalentProfileType["social_links"]
}

export const SocialLinks: React.FC<props> = ({ links }) => {
  return <span>Links</span>
}
