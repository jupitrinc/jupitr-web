import { Sections } from "components/company/profile/Sections"
import { AppLayout } from "layouts/AppLayout"
import { CompanyMemberProfileContextProvider } from "state/company_member_profile/CompanyMemberProfileContext"
import { CompanyProfileContextProvider } from "state/company_profile/CompanyProfileContext"

export default function CompanyProfile() {
  return (
    <AppLayout>
      <CompanyProfileContextProvider>
        <CompanyMemberProfileContextProvider>
          <Sections />
        </CompanyMemberProfileContextProvider>
      </CompanyProfileContextProvider>
    </AppLayout>
  )
}
