import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Text } from "ui-library/text/Text"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import { urlHelper } from "helper/urlHelper"
import { TalentApplicationContextProvider } from "state/talent_application/TalentApplicationContext"
import Application from "./Application"
import Share from "./Share"

const TitleBar = () => {
  const { talent_job } = useTalentJobState()
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-5 items-center">
      <div className="flex flex-row gap-5 items-center">
        <Avatar
          image_url={urlHelper.imageUrl(talent_job.company.logo)}
          size={14}
          alt={`${talent_job.company.name} logo`}
        />
        <div className="flex flex-col gap-1">
          <Text as="h1" size="xl">
            {talent_job.title}
          </Text>

          <Text as="span" size="base">
            {talent_job.company.name}
          </Text>
        </div>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <Share />

        <TalentApplicationContextProvider>
          <Application />
        </TalentApplicationContextProvider>
      </div>
    </div>
  )
}

export default TitleBar
