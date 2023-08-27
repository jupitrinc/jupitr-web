import { CompanyAppLayout } from "layouts/CompanyAppLayout"
import { CompanyJobContextProvider } from "state/company_job/CompanyJobContext"
import { Applications } from "components/company/job/job-applications/Applications"
import { CompanyJobApplicationContextProvider } from "state/company_job_application/CompanyJobApplicationContext"

export default function CompanyJobApplications() {
  return (
    <CompanyAppLayout>
      <CompanyJobContextProvider>
        <CompanyJobApplicationContextProvider>
          <Applications />
        </CompanyJobApplicationContextProvider>
      </CompanyJobContextProvider>
    </CompanyAppLayout>
  )
}
