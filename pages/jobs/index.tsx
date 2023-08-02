import { Details } from "components/talent/job/Details"
import { List } from "components/talent/job/List"
import { TalentJobContextProvider } from "state/talent_job/TalentJobContext"
import { TalentJobsContextProvider } from "state/talent_jobs/TalentJobsContext"
import { WebsiteAppLayout } from "layouts/WebsiteAppLayout"

export default function TalentJobs() {
  return (
    <WebsiteAppLayout>
      <TalentJobsContextProvider>
        <TalentJobContextProvider>
          <div className="flex flex-row gap-10 justify-between">
            <div className="basis-2/5">
              <List />
            </div>

            <div className="w-full">
              <Details />
            </div>
          </div>
        </TalentJobContextProvider>
      </TalentJobsContextProvider>
    </WebsiteAppLayout>
  )
}
