import { TalentAppLayout } from "layouts/TalentAppLayout"
import { TalentJobContextProvider } from "state/talent_job/TalentJobContext"
import JobView from "components/talent/job/JobView"

export default function TalentPublicJob() {
  return (
    <TalentAppLayout>
      <TalentJobContextProvider>
        <div className="flex flex-col gap-5 max-w-2xl mx-auto">
          <div className="w-full">
            <JobView />
          </div>
        </div>
      </TalentJobContextProvider>
    </TalentAppLayout>
  )
}
