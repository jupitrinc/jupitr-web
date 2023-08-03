import { CompanyAppLayout } from "layouts/CompanyAppLayout"
import { CompanyProfileContextProvider } from "state/company_profile/CompanyProfileContext"
import Sections from "components/company/profile/Sections"

export default function CompanyProfile() {
  return (
    <CompanyAppLayout>
      <Sections />
    </CompanyAppLayout>
  )
}
