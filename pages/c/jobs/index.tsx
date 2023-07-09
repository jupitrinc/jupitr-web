import { List } from "components/company/job/List"
import { AppLayout } from "layouts/AppLayout"
import { CompanyJobContextProvider } from "state/company_job/CompanyJobContext"
import { CompanyJobsContextProvider } from "state/company_jobs/CompanyJobsContext"

export default function CompanyJobs() {
  return (
    <AppLayout>
      <CompanyJobsContextProvider>
        <CompanyJobContextProvider>
          <List />
        </CompanyJobContextProvider>
      </CompanyJobsContextProvider>
    </AppLayout>
  )
}
