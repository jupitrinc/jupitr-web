import React from "react"
import { MapPin } from "lucide-react"
import { Text } from "ui-library/text/Text"
import { ICity } from "state/location/location.types"

interface props {
  location: ICity["name"] | undefined
}

const Location = ({ location }: props) => {
  return (
    location && (
      <div className="flex flex-row items-center justify-end gap-1">
        <MapPin className="h-4 w-4 text-gray-600" />
        <Text as="span" size="sm">
          {location}
        </Text>
      </div>
    )
  )
}

export default Location
