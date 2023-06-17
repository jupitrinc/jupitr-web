import React from "react"
import { TalentProfileType } from "state/talent_profile/talentProfile.types"

interface props {
  filters: TalentProfileType["preferences"]
}

export const Filters: React.FC<props> = ({ filters }) => {
  return <span>Filters</span>
}
