import { AppLayout } from "layouts/AppLayout"
import { CompanyProfileContextProvider } from "state/company_profile/CompanyProfileContext"
import { Sections } from "components/company/profile/Sections"

export default function CompanyProfile() {
  return (
    <AppLayout>
      <CompanyProfileContextProvider>
        <Sections />
      </CompanyProfileContextProvider>
    </AppLayout>
  )
}
