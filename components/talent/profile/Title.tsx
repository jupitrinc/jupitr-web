import React from "react"
import { ITalentProfile } from "state/talent_profile/talentProfile.types"
import { Text } from "ui-library/text/Text"

interface props {
  name: ITalentProfile["name"]
}

const Title = ({ name }: props) => {
  return (
    <div className="mb-5 flex w-full flex-col items-center justify-between gap-1 text-center">
      <Text as="h1" size="xl2">
        {name}
      </Text>

      <Text as="p" size="base">
        <span className="text-gray-500">AI engineer</span>
      </Text>
    </div>
  )
}

export default Title
