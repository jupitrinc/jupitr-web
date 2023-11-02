import React from "react"
import { Check, Circle } from "lucide-react"
import { Text } from "ui-library/text/Text"
import { Divider } from "ui-library/content/divider/Divider"
import { useProfileChecks } from "./useProfileChecks"

const Checks = () => {
  const { checksCompleted, name, socials, skills, location } =
    useProfileChecks()

  if (checksCompleted()) return

  return (
    <div className="mb-10 flex flex-row justify-between items-center rounded-lg gap-1 sm:gap-2">
      <ProfileCheck label="Name" isCompleted={name()} />
      <Divider theme="dark" />
      <ProfileCheck label="3 skills" isCompleted={skills()} />
      <Divider theme="dark" />
      <ProfileCheck label="Location" isCompleted={location()} />
      <Divider theme="dark" />
      <ProfileCheck label="Socials" isCompleted={socials()} />
    </div>
  )
}

export const ProfileCheck = ({ label, isCompleted }) => {
  const completedStyled =
    "w-8 h-8 text-white ring-0 bg-gradient-to-r from-orange-400 to-rose-400 from-orange-400 to-rose-400"
  const notCumpletedStyled = "w-10 h-10 text-gray-400 ring-gray-900/10"

  return (
    <div className="flex flex-col gap-2 w-full items-center">
      <figure
        className={`flex justify-center items-center rounded-full ${
          isCompleted ? completedStyled : notCumpletedStyled
        }`}
      >
        {isCompleted ? <Check /> : <Circle className="w-8 h-8" />}
      </figure>
      <Text as="span" size="sm" align="center">
        {label}
      </Text>
    </div>
  )
}

export default Checks
