import React from "react"
import SkillCard from "ui-library/content/card/skill-card-progress-bar/SkillCard"
import { ITalentProfile } from "state/talent_profile/talentProfile.types"

const Skills = ({
  skills,
}: {
  skills: ITalentProfile["skills"] | undefined
}) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {skills?.map((skill) => <SkillCard key={skill.id} skill={skill} />)}
    </div>
  )
}

export default Skills
