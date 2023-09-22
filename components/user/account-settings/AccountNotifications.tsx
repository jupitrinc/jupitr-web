import React from "react"
import { useUserState } from "state/user/useUserState"
import TalentNotifications from "./account-notifications/TalentNotifications"
import CompanyNotifications from "./account-notifications/CompanyNotifications"

const AccountNotifications = () => {
  const { user } = useUserState()

  if (user.account_type === "talent") {
    return <TalentNotifications />
  } else {
    return <CompanyNotifications />
  }
}

export default AccountNotifications
