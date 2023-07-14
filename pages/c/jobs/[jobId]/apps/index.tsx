import { AppLayout } from "layouts/AppLayout"
import { CompanyJobContextProvider } from "state/company_job/CompanyJobContext"
import { Applications } from "components/company/job/Applications"

export default function CompanyJobApplications() {
  return (
    <AppLayout>
      <CompanyJobContextProvider>
        <Applications />
      </CompanyJobContextProvider>
    </AppLayout>
  )
}
