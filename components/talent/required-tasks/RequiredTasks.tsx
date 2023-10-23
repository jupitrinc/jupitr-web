import React from "react"
import { Check } from "lucide-react"
import { Text } from "ui-library/text/Text"
import { useUserState } from "state/user/useUserState"

const RequiredTasks = () => {
  const { user } = useUserState()

  return (
    <div className="mb-4 p-4 flex justify-between bg-white rounded-lg">
      <Task label="Add your name" isCompleted={user.name} />
      <Task label="Add up to 3 skills" isCompleted={user.skills.length >= 3} />
      <Task
        label="Add your socials"
        isCompleted={
          user.socials.filter((social) => social.url !== "").length !== 0
        }
      />
    </div>
  )
}

export const Task = ({ label, isCompleted }) => {
  const completedStyled =
    "text-white ring-0 bg-gradient-to-r from-orange-400 to-rose-400 from-orange-400 to-rose-400"
  const notCumpletedStyled = "text-gray-600 ring-gray-900/10 bg-gray-200"

  return (
    <div className="flex flex-row items-center">
      <figure
        className={`w-8 h-8 flex justify-center items-center rounded-full mr-2 ${
          isCompleted ? completedStyled : notCumpletedStyled
        }`}
      >
        <Check />
      </figure>
      <Text as="span" size="base">
        {label}
      </Text>
    </div>
  )
}

export default RequiredTasks
