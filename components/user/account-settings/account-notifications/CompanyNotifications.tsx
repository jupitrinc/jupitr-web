import React, { useState } from "react"
import { Toggle } from "ui-library/form/toggle/Toggle"
import { Text } from "ui-library/text/Text"

const CompanyNotifications = () => {
  const [isEmailActive, setIsEmailActive] = useState(true)

  return (
    <div className="mt-4 flex flex-col gap-2">
      <div className="w-full flex flex-row items-center justify-between gap-3">
        <Text as="span" size="base">
          Job applications
        </Text>
        <Toggle
          size="base"
          checked={isEmailActive}
          onChange={() => setIsEmailActive((prev) => !prev)}
        />
      </div>
    </div>
  )
}

export default CompanyNotifications
