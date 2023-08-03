import { CompanyAppLayout } from "layouts/CompanyAppLayout"
import { CompanyJobContextProvider } from "state/company_job/CompanyJobContext"
import { CompanyJobsContextProvider } from "state/company_jobs/CompanyJobsContext"
import { List } from "components/company/job/List"

export default function CompanyJobs() {
  return (
    <CompanyAppLayout>
      <CompanyJobsContextProvider>
        <CompanyJobContextProvider>
          <List />
        </CompanyJobContextProvider>
      </CompanyJobsContextProvider>
    </CompanyAppLayout>
  )
}
