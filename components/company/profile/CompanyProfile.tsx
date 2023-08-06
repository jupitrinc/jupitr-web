import React, { useEffect } from "react"
import { Card } from "ui-library/content/card/Card"
import { useUserState } from "state/user/useUserState"
import { useCompanyProfileAction } from "state/company_profile/useCompanyProfileAction"
import { useIndustryAction } from "state/industry/useIndustryAction"
import Name from "./company-profile/Name"
import YearFounded from "./company-profile/YearFounded"
import Website from "./company-profile/Website"
import Size from "./company-profile/Size"
import Industry from "./company-profile/Industry"
import Mission from "./company-profile/Mission"
import Logo from "./company-profile/Logo"
import { useCompanyProfileState } from "state/company_profile/useCompanyProfileState"
import { useIndustryState } from "state/industry/useIndustryState"

const CompanyProfile: React.FC = () => {
  const { user } = useUserState()
  const { company_profile } = useCompanyProfileState()
  const { industries } = useIndustryState()
  const { getProfile } = useCompanyProfileAction()
  const { getIndustries } = useIndustryAction()

  useEffect(() => {
    if (user.company_id && !company_profile.id) {
      getProfile(user.company_id)
    }
  }, [user.company_id])

  useEffect(() => {
    if (industries.length < 1) {
      getIndustries()
    }
  }, [])

  return (
    <Card type="section">
      <div className="flex flex-col gap-5">
        <div className="flex justify-center">
          <Logo />
        </div>

        <Name />
        <YearFounded />
        <Website />
        <Size />
        <Industry />
        <Mission />
      </div>
    </Card>
  )
}

export default CompanyProfile
