import { WebsiteLayout } from "layouts/WebsiteLayout"
import { CompanyJobContextProvider } from "state/company_job/CompanyJobContext"
import { Sections } from "components/company/job/Sections"

export default function CompanyJob() {
  return (
    <WebsiteLayout>
      <CompanyJobContextProvider>
        <Sections />
      </CompanyJobContextProvider>
    </WebsiteLayout>
  )
}
