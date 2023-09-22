import React, { useState } from "react"
import { Tabs } from "ui-library/menu/tabs/Tabs"
import { Text } from "ui-library/text/Text"

const TalentNotifications = () => {
  const intervals = ["Daily", "Weekly", "Never"]
  const [interval, setInterval] = useState(0)

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex flex-row items-center justify-between gap-3">
        <Text as="span" size="base">
          Job Recommendations
        </Text>
        <Tabs
          size="base"
          items={intervals}
          active_tab={interval}
          onChange={(index) => setInterval(index)}
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

export default TalentNotifications
