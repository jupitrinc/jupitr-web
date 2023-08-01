import CompanyLayout from "layouts/CompanyLayout"
import { CompanyJobContextProvider } from "state/company_job/CompanyJobContext"
import { Applications } from "components/company/job/Applications"

export default function CompanyJobApplications() {
  return (
    <CompanyLayout>
      <CompanyJobContextProvider>
        <Applications />
      </CompanyJobContextProvider>
    </CompanyLayout>
  )
}
