import { Details } from "components/company/job/Details"
import { AppLayout } from "layouts/AppLayout"
import { CompanyJobContextProvider } from "state/company_job/CompanyJobContext"

export default function Home() {
  return (
    <AppLayout>
      <CompanyJobContextProvider>
        <Details />
      </CompanyJobContextProvider>
    </AppLayout>
  )
}
