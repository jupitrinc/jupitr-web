import React from "react"
import { useUserState } from "state/user/useUserState"
import { AccountNotificationContextProvider } from "state/account_notifications/AccountNotificationsContext"
import { AccountTypeEnum } from "state/user/user.types"
import TalentNotifications from "../account-notifications/TalentNotifications"
import CompanyNotifications from "../account-notifications/CompanyNotifications"

const AccountNotifications = () => {
  const { user } = useUserState()

  return (
    <AccountNotificationContextProvider>
      {user.account_type === AccountTypeEnum.company ? (
        <CompanyNotifications />
      ) : (
        <TalentNotifications />
      )}
    </AccountNotificationContextProvider>
  )
}

export default AccountNotifications
