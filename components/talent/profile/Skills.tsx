import React from "react"
import SkillCard from "ui-library/content/card/skill-card-progress-bar/SkillCard"
import { ITalentProfile } from "state/talent_profile/talentProfile.types"

interface props {
  skills: ITalentProfile["skills"] | undefined
}

const Skills = ({ skills }: props) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      {skills?.map((skill) => <SkillCard key={skill.id} skill={skill} />)}
    </div>
  )
}

export default Skills
