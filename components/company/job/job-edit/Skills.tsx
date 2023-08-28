import { Card } from "ui-library/content/card/Card"
import { SectionHeader } from "ui-library/content/section-header/SectionHeader"
import { Multiselect } from "ui-library/form/multiselect/Multiselect"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { static_data_job } from "data/job"
import { useCallback, useEffect } from "react"
import { useSkillAction } from "state/skill/useSkillAction"
import { useSkillState } from "state/skill/useSkillState"
import { useNotification } from "helper/hooks/useNotification"
import { stringHelper } from "helper/stringHelper"
import { Toast } from "ui-library/toast/Toast"
import SkillCard from "ui-library/content/card/skill-card-tabs/SkillCard"

export const Skills = () => {
  const { isEmpty } = stringHelper

  const { company_job } = useCompanyJobState()
  const { addSkill, removeSkill, updateSkill } = useCompanyJobAction()

  const { getSkills, clearSkills, addSkill: addSkillAction } = useSkillAction()
  const { skills, error } = useSkillState()

  const { notification, hideNotification } = useNotification(!isEmpty(error))

  useEffect(() => {
    getSkills()

    return () => {
      clearSkills()
    }
  }, [])

  const addNewSkill = useCallback(
    async (name: string) => {
      if (!name || !company_job.id) return

      const newSkill = await addSkillAction(name)
      if (newSkill) {
        addSkill(company_job.id, { ...newSkill, level: 2 }, company_job.skills)
      }
    },
    [company_job]
  )

  return (
    <>
      <Card type="section">
        <div className="flex flex-col gap-5">
          <SectionHeader title="Skills" />
          <Multiselect
            placeholder="Search skills"
            options={skills}
            allowAddOption={true}
            addOption={(name) => addNewSkill(name)}
            onChange={(skill) => {
              addSkill(
                company_job.id,
                { ...skill, level: 2 },
                company_job.skills
              )
            }}
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

      <Toast onHide={hideNotification} show={notification} label={error} />
    </>
  )
}
