import { CompanyAppLayout } from "layouts/CompanyAppLayout"
import { CompanyJobContextProvider } from "state/company_job/CompanyJobContext"
import { Applications } from "components/company/job/Applications"

export default function CompanyJobApplications() {
  return (
    <CompanyAppLayout>
      <CompanyJobContextProvider>
        <Applications />
      </CompanyJobContextProvider>
    </CompanyAppLayout>
  )
}
