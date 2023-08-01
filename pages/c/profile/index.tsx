import CompanyLayout from "layouts/CompanyLayout"
import { Sections } from "components/company/profile/Sections"
import { CompanyMemberProfileContextProvider } from "state/company_member_profile/CompanyMemberProfileContext"

export default function CompanyProfile() {
  return (
    <CompanyLayout>
      <CompanyMemberProfileContextProvider>
        <Sections />
      </CompanyMemberProfileContextProvider>
    </CompanyLayout>
  )
}
