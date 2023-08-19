import { WebsiteLayout } from "layouts/WebsiteLayout"
import { CompanyJobContextProvider } from "state/company_job/CompanyJobContext"
import { Sections } from "components/company/job/job-edit/Sections"
import { SkillContextProvider } from "state/skill/SkillContext"

export default function CompanyJob() {
  return (
    <WebsiteLayout>
      <SkillContextProvider>
        <CompanyJobContextProvider>
          <Sections />
        </CompanyJobContextProvider>
      </SkillContextProvider>
    </WebsiteLayout>
  )
}
