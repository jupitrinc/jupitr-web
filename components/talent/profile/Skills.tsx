import React, { useEffect } from "react"
import { Card } from "ui-library/content/card/Card"
import { useTalentProfileAction } from "state/talent_profile/useTalentProfileAction"
import { SectionHeader } from "ui-library/content/section-header/SectionHeader"
import { useUserState } from "state/user/useUserState"
import { Multiselect } from "ui-library/form/multiselect/Multiselect"
import { useSkillAction } from "state/skill/useSkillAction"
import { useSkillState } from "state/skill/useSkillState"
import { SkillCard } from "ui-library/content/card/skill-card/SkillCard"
import { static_data_job } from "data/job"

const Skills = () => {
  const { user } = useUserState()
  const { addSkill, removeSkill, updateSkill } = useTalentProfileAction()
  const { getSkills } = useSkillAction()
  const { skills } = useSkillState()

  useEffect(() => {
    const getSkillList = async () => {
      skills.length < 1 && (await getSkills())
    }
    getSkillList()
  }, [])

  return (
    <Card type="section">
      <div className="flex flex-col gap-5">
        <SectionHeader title="Skills" />
        <Multiselect
          placeholder="Search skills"
          options={skills}
          onChange={(skill) =>
            addSkill(user.id, { ...skill, level: 2 }, user.skills)
          }
        />
      </div>

      <div className="grid grid-cols-1 gap-5">
        {user.skills &&
          user.skills.map((skill) => (
            <SkillCard
              skill={skill}
              key={skill.id}
              levels={static_data_job.skill_levels}
              removeSkill={() => removeSkill(user.id, skill, user.skills)}
              updateSkill={(level: number) =>
                updateSkill(user.id, { ...skill, level: level }, user.skills)
              }
            />
          ))}
      </div>
    </Card>
  )
}

export default Skills
