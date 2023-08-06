import React from "react"
import { Card } from "ui-library/content/card/Card"
import AccountSettings from "components/user/account-settings/AccountSettings"
import UserProfile from "components/user/profile/UserProfile"
import CompanyProfile from "./CompanyProfile"
import CompanyMemberProfile from "./CompanyMemberProfile"

const Sections = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="space-y-5">
        <Card type="section">
          <UserProfile />
          <CompanyMemberProfile />
        </Card>
        <AccountSettings />
      </div>

      <CompanyProfile />
    </div>
  )
}

export default Sections
