import React, { useEffect } from "react"
import { Card } from "ui-library/content/card/Card"
import { useUserState } from "state/user/useUserState"
import { useCompanyProfileAction } from "state/company_profile/useCompanyProfileAction"
import Name from "./company-profile/Name"
import YearFounded from "./company-profile/YearFounded"
import Website from "./company-profile/Website"
import Size from "./company-profile/Size"
import Industry from "./company-profile/Industry"
import Mission from "./company-profile/Mission"
import Logo from "./company-profile/Logo"
import { useCompanyProfileState } from "state/company_profile/useCompanyProfileState"
import InviteTeam from "../member/InviteTeam"

const CompanyProfile: React.FC = () => {
  const { user } = useUserState()
  const { company_profile } = useCompanyProfileState()
  const { getProfile, clearProfile } = useCompanyProfileAction()

  useEffect(() => {
    if (user.company_id && !company_profile.id) {
      getProfile(user.company_id)
    }

    return () => {
      clearProfile()
    }
  }, [user.company_id])

  return (
    <Card type="section">
      <div className="flex flex-col gap-5">
        <div className="flex justify-center">
          <Logo />
        </div>

        <InviteTeam />

        <Name />

        {user.permission === "write" && (
          <>
            <YearFounded />
            <Website />
            <Size />
            <Industry />
            <Mission />
          </>
        )}
      </div>
    </Card>
  )
}

export default CompanyProfile
