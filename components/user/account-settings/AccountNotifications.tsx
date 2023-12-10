import React from "react"
import { AccountNotificationContextProvider } from "state/account_notifications/AccountNotificationsContext"
import TalentNotifications from "../account-notifications/TalentNotifications"

const AccountNotifications = () => {
  return (
    <AccountNotificationContextProvider>
      <TalentNotifications />
    </AccountNotificationContextProvider>
  )
}

export default AccountNotifications
