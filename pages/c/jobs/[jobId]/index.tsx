import { AppLayout } from "layouts/AppLayout"
import { CompanyJobContextProvider } from "state/company_job/CompanyJobContext"
import { Sections } from "components/company/job/Sections"

export default function CompanyJob() {
  return (
    <AppLayout>
      <CompanyJobContextProvider>
        <Sections />
      </CompanyJobContextProvider>
    </AppLayout>
  )
}
