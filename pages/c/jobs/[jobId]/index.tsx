import CompanyLayout from "layouts/CompanyLayout"
import { CompanyJobContextProvider } from "state/company_job/CompanyJobContext"
import { Sections } from "components/company/job/Sections"

export default function CompanyJob() {
  return (
    <CompanyLayout>
      <CompanyJobContextProvider>
        <Sections />
      </CompanyJobContextProvider>
    </CompanyLayout>
  )
}
