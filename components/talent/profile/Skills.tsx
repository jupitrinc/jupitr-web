import React, { useState } from "react"
import { Plus, Trash2 } from "lucide-react"
import { LightForm } from "ui-library/form/light-form/LightForm"
import { Button } from "ui-library/button/Button"
import { Tabs } from "ui-library/menu/tabs/Tabs"

interface ISkill {
  skill: string
  level: number
}

export const Skills = () => {
  const [skill, setSkill] = useState("")
  const [skillList, setSkillList] = useState<ISkill[]>([])

  const addSkill = () => {
    setSkillList((prevSkillList) => [
      ...prevSkillList,
      { skill: skill, level: 0 },
    ])
    setSkill("")
  }

  const updateSkill = (skill, level) => {
    setSkillList((prev) => {
      const newSkillList = [...prev]
      const index = newSkillList.findIndex((item) => item === skill)
      if (index !== -1) {
        newSkillList[index] = { ...newSkillList[index], level }
      }
      return newSkillList
    })
  }

  const removeSkill = (index) => {
    setSkillList((prevSkillList) => prevSkillList.filter((_, i) => i !== index))
  }

  return (
    <>
      {skillList.map((skill, index) => (
        <div
          key={index}
          className="my-4 flex gap-4 justify-center items-center"
        >
          <p className="text-sm capitalize">{skill.skill}</p>
          <Tabs
            active_tab={skill.level}
            items={["Beginner", "Pro", "Expert"]}
            onChange={(experience) => {
              updateSkill(skill, experience)
            }}
          />
          <Button
            color="dangerous"
            icon={<Trash2 className="inline w-6 h-6" />}
            label=""
            onClick={() => {
              removeSkill(index)
            }}
            size="base"
            variant="contained"
          />
        </div>
      ))}

      <LightForm
        value={skill}
        icon={<Plus />}
        onChange={(e) => {
          setSkill(e.target.value)
        }}
        onSubmit={(e) => {
          e.preventDefault()
          addSkill()
        }}
        placeHolder="Skill name"
      />
    </>
  )
}
