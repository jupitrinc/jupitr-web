import { Details } from "components/talent/job/Details"
import { List } from "components/talent/job/List"
import { AppLayout } from "layouts/AppLayout"
import { TalentJobContextProvider } from "state/talent_job/TalentJobContext"
import { TalentJobsContextProvider } from "state/talent_jobs/TalentJobsContext"

export default function TalentJobs() {
  return (
    <AppLayout>
      <TalentJobsContextProvider>
        <TalentJobContextProvider>
          <div className="flex flex-row gap-5 justify-between">
            <div className="basis-2/5">
              <List />
            </div>

            <div className="w-full">
              <Details />
            </div>
          </div>
        </TalentJobContextProvider>
      </TalentJobsContextProvider>
    </AppLayout>
  )
}
