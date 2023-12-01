import React, { useEffect } from "react"
import { Toggle } from "ui-library/form/toggle/Toggle"
import { Text } from "ui-library/text/Text"
import { useAccountNotificationsAction } from "state/account_notifications/useAccountNotificationsAction"
import { useAccountNotificationState } from "state/account_notifications/useAccountNotificationsState"
import { useUserState } from "state/user/useUserState"

const CompanyNotifications = () => {
  const { user } = useUserState()
  const { notifications } = useAccountNotificationState()
  const { getNotifications, updateNotification, clearNotifications } =
    useAccountNotificationsAction()

  useEffect(() => {
    if (notifications.length < 1) {
      getNotifications(user.id)
    }

    return clearNotifications()
  }, [])

  const notificationName = (alert: string) => {
    if (alert === "applications_alert") return "New job application"
    else return alert
  }

  return (
    <div className="mt-4 flex flex-col gap-5">
      {notifications.map((n) => (
        <div
          key={n.id}
          className="flex w-full flex-row items-center justify-between gap-3"
        >
          <Text as="span" size="base">
            {notificationName(n.alert)}
          </Text>
          <Toggle
            size="base"
            label="email"
            checked={n.active}
            onChange={() => updateNotification({ id: n.id, active: !n.active })}
          />
        </div>
      ))}
    </div>
  )
}

export default CompanyNotifications
