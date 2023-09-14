import React, { useCallback, useEffect } from "react"
import { Card } from "ui-library/content/card/Card"
import { useTalentProfileAction } from "state/talent_profile/useTalentProfileAction"
import { SectionHeader } from "ui-library/content/section-header/SectionHeader"
import { useUserState } from "state/user/useUserState"
import { Multiselect } from "ui-library/form/multiselect/Multiselect"
import { useSkillAction } from "state/skill/useSkillAction"
import { useSkillState } from "state/skill/useSkillState"
import { static_data_job } from "data/job"
import { useDebounce } from "helper/hooks/useDebounce"
import SkillCard from "ui-library/content/card/skill-card-tabs/SkillCard"

const Skills = () => {
  const { user } = useUserState()

  const { debouncedValue: searchQuery, setDebouncedValue: setSearchQuery } =
    useDebounce()

  const { addSkill, removeSkill, updateSkill } = useTalentProfileAction()
  const {
    addSkill: addSkillAction,
    searchSkill: searchSkillAction,
    clearSkills,
  } = useSkillAction()
  const { skills } = useSkillState()

  const addNewSkill = useCallback(
    async (name: string) => {
      if (!name || !user.id) return

      const newSkill = await addSkillAction(name)
      if (newSkill) {
        addSkill(user.id, { ...newSkill, level: 2 }, user.skills)
      }
    },
    [user]
  )

  useEffect(() => {
    if (searchQuery !== "") {
      searchSkillAction(searchQuery)
    }

    return () => {
      clearSkills()
    }
  }, [searchQuery])

  return (
    <Card type="section">
      <div className="flex flex-col gap-5">
        <SectionHeader title="Skills" />
        <Multiselect
          placeholder="Search skills"
          options={skills}
          allowAddOption={true}
          addOption={(name) => addNewSkill(name)}
          onSelect={(skill) =>
            addSkill(user.id, { ...skill, level: 2 }, user.skills)
          }
          onChange={(skill) => setSearchQuery(skill)}
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
