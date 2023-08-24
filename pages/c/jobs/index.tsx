import { CompanyAppLayout } from "layouts/CompanyAppLayout"
import { CompanyJobContextProvider } from "state/company_job/CompanyJobContext"
import { CompanyJobsContextProvider } from "state/company_jobs/CompanyJobsContext"
import JobList from "components/company/job/JobList"

export default function CompanyJobs() {
  return (
    <CompanyAppLayout>
      <CompanyJobsContextProvider>
        <CompanyJobContextProvider>
          <JobList />
        </CompanyJobContextProvider>
      </CompanyJobsContextProvider>
    </CompanyAppLayout>
  )
}
