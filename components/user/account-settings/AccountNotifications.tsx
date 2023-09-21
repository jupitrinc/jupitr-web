import React, { useState } from "react"
import { useUserState } from "state/user/useUserState"
import { Toggle } from "ui-library/form/toggle/Toggle"
import { Tabs } from "ui-library/menu/tabs/Tabs"
import { Text } from "ui-library/text/Text"

const AccountNotifications = () => {
  const intervals = ["Daily", "Weekly", "Never"]
  const [interval, setInterval] = useState(0)
  const [isEmailActive, setIsEmailActive] = useState(true)
  const { user } = useUserState()

  if (user.account_type === "talent") {
    return (
      <div className="flex flex-col gap-2">
        <div className="w-full flex flex-row items-center justify-between gap-3">
          <Text as="span" size="base">
            Job Recommendations
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
  } else {
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
}

export default AccountNotifications
