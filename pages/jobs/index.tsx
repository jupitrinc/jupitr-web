import { TalentAppLayout } from "layouts/TalentAppLayout"
import { TalentJobContextProvider } from "state/talent_job/TalentJobContext"
import { TalentJobsContextProvider } from "state/talent_jobs/TalentJobsContext"
import JobList from "components/talent/job/JobList"
import JobView from "components/talent/job/JobView"

export default function TalentJobs() {
  return (
    <TalentAppLayout>
      <TalentJobsContextProvider>
        <TalentJobContextProvider>
          <div className="flex flex-row md:gap-10 justify-between relative mb-24 md:mb-0">
            <div className="md:basis-2/5 h-screen overflow-hidden sticky top-10 z-10">
              <JobList />
            </div>

            <div className="w-full">
              <JobView />
            </div>
          </div>
        </TalentJobContextProvider>
      </TalentJobsContextProvider>
    </TalentAppLayout>
  )
}
