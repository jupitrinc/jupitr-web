import CompanyLayout from "layouts/CompanyLayout"
import { CompanyJobContextProvider } from "state/company_job/CompanyJobContext"
import { CompanyJobsContextProvider } from "state/company_jobs/CompanyJobsContext"
import { List } from "components/company/job/List"

export default function CompanyJobs() {
  return (
    <CompanyLayout>
      <CompanyJobsContextProvider>
        <CompanyJobContextProvider>
          <List />
        </CompanyJobContextProvider>
      </CompanyJobsContextProvider>
    </CompanyLayout>
  )
}
