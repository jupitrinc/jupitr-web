import { Card } from "ui-library/content/card/Card"
import { SectionHeader } from "ui-library/content/section-header/SectionHeader"
import { SkillCard } from "ui-library/content/card/skill-card/SkillCard"
import { Multiselect } from "ui-library/form/multiselect/Multiselect"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { static_data_job } from "data/job"
import { useEffect } from "react"
import { useSkillAction } from "state/skill/useSkillAction"
import { useSkillState } from "state/skill/useSkillState"

export const Skills = () => {
  const { company_job } = useCompanyJobState()
  const { addSkill, removeSkill, updateSkill } = useCompanyJobAction()
  const { getSkills } = useSkillAction()
  const { skills } = useSkillState()

  useEffect(() => {
    const getSkillList = async () => {
      skills.length < 1 && getSkills()
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
            addSkill(company_job.id, { ...skill, level: 2 }, company_job.skills)
          }
        />
      </div>

      <div className="grid grid-cols-1 gap-5">
        {company_job.skills &&
          company_job.skills.map((skill) => (
            <SkillCard
              skill={skill}
              key={skill.id}
              levels={static_data_job.skill_levels}
              removeSkill={() =>
                removeSkill(company_job.id, skill, company_job.skills)
              }
              updateSkill={(level: number) =>
                updateSkill(
                  company_job.id,
                  { ...skill, level: level },
                  company_job.skills
                )
              }
            />
          ))}
      </div>
    </Card>
  )
}
