import React, { useEffect } from "react"
import { NotificationTypeEnum } from "state/account_notifications/accountSettings.types"
import { useAccountNotificationsAction } from "state/account_notifications/useAccountNotificationsActon"
import { useAccountNotificationState } from "state/account_notifications/useAccountNotificationsState"
import { Toggle } from "ui-library/form/toggle/Toggle"
import { Text } from "ui-library/text/Text"

const CompanyNotifications = () => {
  const { accountSettings } = useAccountNotificationState()
  const { getNotifications, clearAccountNotifications } =
    useAccountNotificationsAction()

  useEffect(() => {
    getNotifications()

    return clearAccountNotifications()
  }, [])

  return (
    <div className="mt-4 flex flex-col gap-2">
      <div className="w-full flex flex-row items-center justify-between gap-3">
        <Text as="span" size="base">
          Job applications
        </Text>
        <Toggle
          size="base"
          checked={
            accountSettings &&
            accountSettings.filter(
              (setting) => setting.alert === NotificationTypeEnum.JOB_ALERT
            )[0].active
          }
          onChange={() => {}}
        />
      </div>
    </div>
  )
}

export default CompanyNotifications
