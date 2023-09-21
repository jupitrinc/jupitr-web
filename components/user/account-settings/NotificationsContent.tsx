import React, { useState } from "react"
import { Toggle } from "ui-library/form/toggle/Toggle"
import { Tabs } from "ui-library/menu/tabs/Tabs"
import { Text } from "ui-library/text/Text"

const NotificationsContent = () => {
  const intervals = ["Day", "Week", "Month"]
  const [interval, setInterval] = useState(0)
  const [isEmailActive, setIsEmailActive] = useState(true)

  return (
    <div className="mt-4 flex flex-col gap-2 max-w-md">
      <div className="w-full flex flex-row items-center justify-between gap-3">
        <Text as="span" size="base">
          Email
        </Text>
        <Toggle
          size="base"
          checked={isEmailActive}
          onChange={() => setIsEmailActive((prev) => !prev)}
        />
      </div>

      <div className="w-full flex flex-row items-center justify-between gap-3">
        <Text as="span" size="base">
          Notifications sent each
        </Text>
        <Tabs
          size="base"
          items={intervals}
          active_tab={interval}
          onChange={(index) => setInterval(index)}
        />
      </div>
    </div>
  )
}

export default NotificationsContent
