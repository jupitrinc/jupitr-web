import { WebsiteLayout } from "layouts/WebsiteLayout"
import { CompanyJobContextProvider } from "state/company_job/CompanyJobContext"
import { Sections } from "components/company/job/job-edit/Sections"

export default function CompanyJob() {
  return (
    <WebsiteLayout>
      <CompanyJobContextProvider>
        <Sections />
      </CompanyJobContextProvider>
    </WebsiteLayout>
  )
}
