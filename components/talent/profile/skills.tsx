import React, { useState } from "react"
import { Heading } from "../Heading/Heading"
import { LightForm } from "ui-library/form/light-form/LightForm"
import { Plus, Trash2 } from "lucide-react"
import { Button } from "ui-library/button/Button"
import { Tabs } from "ui-library/menu/tabs/Tabs"

interface ISkill {
  skill: string
  experience: number
}

export const Skills = ({ goNext, goBack }) => {
  const [skill, setSkill] = useState("")
  const [skillList, setSkillList] = useState<ISkill[]>([])

  const addSkill = () => {
    setSkillList((prevSkillList) => [
      ...prevSkillList,
      { skill: skill, experience: 0 },
    ])
    setSkill("")
  }

  const updateSkill = (skill, experience) => {
    setSkillList((prev) => {
      const newSkillList = [...prev]
      const index = newSkillList.findIndex((item) => item === skill)
      if (index !== -1) {
        newSkillList[index] = { ...newSkillList[index], experience }
      }
      return newSkillList
    })
  }

  const removeSkill = (index) => {
    setSkillList((prevSkillList) => prevSkillList.filter((_, i) => i !== index))
  }

  return (
    <div>
      <Heading
        heading="Skills"
        subHeading="What are the skills you feel more confident about?"
      />

      {skillList.map((skill, index) => (
        <div
          key={index}
          className="my-4 flex gap-4 justify-center items-center"
        >
          <p className="text-sm capitalize">{skill.skill}</p>
          <Tabs
            active_tab={skill.experience}
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

      <div className="mt-4">
        <Button color="standard" label="Back" onClick={goBack} size="base" />
        <Button color="important" label="Next" onClick={goNext} size="base" />
      </div>
    </div>
  )
}
