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
          <div className="relative mb-24 flex flex-row justify-between md:mb-0 md:gap-10">
            <div className="sticky top-10 z-10 h-screen overflow-hidden md:basis-2/5">
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
