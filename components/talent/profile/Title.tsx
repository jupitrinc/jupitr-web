import React from "react"
import { ITalentProfile } from "state/talent_profile/talentProfile.types"
import { Text } from "ui-library/text/Text"

interface props {
  name: ITalentProfile["name"]
  tagline?: ITalentProfile["tagline"]
}

const Title = ({ name, tagline }: props) => {
  return (
    <div className="mb-10 flex w-full flex-col items-center justify-between gap-2">
      <Text as="h1" size="xl2">
        {name}
      </Text>

      {tagline && (
        <Text as="p" size="base">
          <span className="text-gray-500">{tagline}</span>
        </Text>
      )}
    </div>
  )
}

export default Title
