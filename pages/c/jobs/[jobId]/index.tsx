import { WebsiteAppLayout } from "layouts/WebsiteAppLayout"
import { CompanyJobContextProvider } from "state/company_job/CompanyJobContext"
import { Sections } from "components/company/job/Sections"

export default function CompanyJob() {
  return (
    <WebsiteAppLayout>
      <CompanyJobContextProvider>
        <Sections />
      </CompanyJobContextProvider>
    </WebsiteAppLayout>
  )
}
