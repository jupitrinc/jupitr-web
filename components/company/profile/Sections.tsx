import React from "react"
import { Card } from "ui-library/content/card/Card"
import { CompanyDetails } from "./CompanyDetails"
import { AccountSettings } from "components/user/account-settings/AccountSettings"
import { MemberDetails } from "./MemberDetails"
import { UserProfile } from "components/user/profile/UserProfile"

export const Sections: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="space-y-5">
        <Card type="section">
          <UserProfile />
          <MemberDetails />
        </Card>
        <AccountSettings />
      </div>

      <CompanyDetails />
    </div>
  )
}
