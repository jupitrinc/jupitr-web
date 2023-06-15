import React, { useState } from "react"
import { Plus, Trash2 } from "lucide-react"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { LightForm } from "ui-library/form/light-form/LightForm"
import { Text } from "ui-library/text/Text"
import { Button } from "ui-library/button/Button"
import { Heading } from "../Heading/Heading"
import { Tabs } from "ui-library/menu/tabs/Tabs"
import { Select } from "ui-library/form/select/Select"
import { Ranger } from "ui-library/ranger/Ranger"
import CopyClipboard from "ui-library/copy-clipboard/CopyClipboard"

interface ISkill {
  skill: string
  experience: number
}

const Profile = () => {
  return (
    <div className="divide-y">
      <div className="flex gap-4 mb-4">
        <Avatar
          size={20}
          image_url="https://plus.unsplash.com/premium_photo-1663100696872-43eea3bf307b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl">User name</h1>
          <CopyClipboard email="email@example.com" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="mt-4">
          <SocialMedia />
        </div>

        <div className="mt-4">
          <Skills />
        </div>
      </div>

      <div className="mt-4">
        <Details />
        <Button
          color="important"
          label="Save"
          onClick={() => {
            return
          }}
          size="base"
        />
      </div>
    </div>
  )
}

const SocialMedia = () => {
  const [mediaLink, setMediaLink] = useState("")
  const [mediaLinkList, setMediaLinkList] = useState<string[]>([])

  const addMedia = () => {
    setMediaLinkList((prevMediaState) => [...prevMediaState, mediaLink])
    setMediaLink("")
  }

  const removeMedia = (index) => {
    setMediaLinkList((prevMediaState) =>
      prevMediaState.filter((_, i) => i !== index)
    )
  }
  return (
    <>
      <Heading
        heading="Social medial links"
        subHeading="Let us see your digital pressence over here."
      />
      {mediaLinkList.map((item, index) => (
        <div key={item} className="my-4 flex justify-between">
          <a
            href={item}
            target="_blank"
            className="text-sm text-blue-600 hover:underline"
          >
            {item}
          </a>
          <Button
            color="dangerous"
            icon={<Trash2 className="inline w-6 h-6" />}
            label=""
            onClick={() => {
              removeMedia(index)
            }}
            size="base"
            variant="contained"
          />
        </div>
      ))}
      <LightForm
        value={mediaLink}
        icon={<Plus />}
        onChange={(e) => {
          setMediaLink(e.target.value)
        }}
        onSubmit={(e) => {
          e.preventDefault()
          addMedia()
        }}
        placeHolder="Skill name"
      />
    </>
  )
}

const Skills = () => {
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
    <>
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
    </>
  )
}

const Details = () => {
  return (
    <div className="mt-4">
      <Heading
        heading="Filters for jobs"
        subHeading="Add the desired filters to your job preferences"
      />
      <div className="grid grid-cols-2 gap-8">
        <Select
          label="Location"
          name="location"
          onChange={() => {
            return
          }}
          options={["England", "Portugal", "Remote"]}
        />
        <Select
          label="Work model"
          name="workModel"
          onChange={() => {
            return
          }}
          options={["England", "Portugal", "Remote"]}
        />
      </div>

      <div className="mt-8 mb-4">
        <Text as="h2">Salary range</Text>
        <Ranger
          max={5}
          min={1}
          onChange={() => {
            return
          }}
        />
      </div>
    </div>
  )
}

export default Profile
