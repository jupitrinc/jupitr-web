import { CompanyAppLayout } from "layouts/CompanyAppLayout"
import { CompanyProfileContextProvider } from "state/company_profile/CompanyProfileContext"
import { CompanyMembersContextProvider } from "state/company_members/CompanyMembersContext"
import Sections from "components/company/profile/Sections"

export default function CompanyProfile() {
  return (
    <CompanyAppLayout>
      <CompanyProfileContextProvider>
        <CompanyMembersContextProvider>
          <Sections />
        </CompanyMembersContextProvider>
      </CompanyProfileContextProvider>
    </CompanyAppLayout>
  )
}
