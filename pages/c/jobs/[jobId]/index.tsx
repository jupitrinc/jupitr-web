import { CompanyAppLayout } from "layouts/CompanyAppLayout"
import { CompanyJobContextProvider } from "state/company_job/CompanyJobContext"
import { JobEdit } from "components/company/job/JobEdit"
import { CompanyMembersContextProvider } from "state/company_members/CompanyMembersContext"

export default function CompanyJob() {
  return (
    <CompanyAppLayout>
      <CompanyJobContextProvider>
        <CompanyMembersContextProvider>
          <JobEdit />
        </CompanyMembersContextProvider>
      </CompanyJobContextProvider>
    </CompanyAppLayout>
  )
}
