import { JobApplications } from "components/company/job/JobApplications"
import { CompanyAppLayout } from "layouts/CompanyAppLayout"
import { CompanyJobContextProvider } from "state/company_job/CompanyJobContext"
import { CompanyJobApplicationContextProvider } from "state/company_job_application/CompanyJobApplicationContext"

export default function CompanyJobApplications() {
  return (
    <CompanyAppLayout>
      <CompanyJobContextProvider>
        <CompanyJobApplicationContextProvider>
          <JobApplications />
        </CompanyJobApplicationContextProvider>
      </CompanyJobContextProvider>
    </CompanyAppLayout>
  )
}
