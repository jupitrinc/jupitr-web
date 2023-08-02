import { CompanyAppLayout } from "layouts/CompanyAppLayout"
import { Sections } from "components/company/profile/Sections"
import { CompanyMemberProfileContextProvider } from "state/company_member_profile/CompanyMemberProfileContext"

export default function CompanyProfile() {
  return (
    <CompanyAppLayout>
      <CompanyMemberProfileContextProvider>
        <Sections />
      </CompanyMemberProfileContextProvider>
    </CompanyAppLayout>
  )
}
