import { Globe, Laptop, MapPin, PoundSterling } from "lucide-react"
import { Text } from "ui-library/text/Text"
import { Pill } from "ui-library/pill/Pill"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import { numberHelper } from "helper/numberHelper"
import { urlHelper } from "helper/urlHelper"

const Details = () => {
  const { talent_job } = useTalentJobState()

  return (
    <div className="flex flex-row justify-between gap-5 mt-5 mb-5">
      <div className="flex flex-col flex-wrap gap-5">
        <Text as="span" size="base">
          <span className="flex flex-row flex-wrap gap-1 items-center">
            <PoundSterling className="h-5 w-5" />
            <Pill
              label={numberHelper.formatNumber(Number(talent_job.salary))}
              size="base"
            />
          </span>
        </Text>

        <div className="flex flex-row flex-wrap gap-2 items-center">
          <Laptop className="h-5 w-5" />

          <div className="flex flex-row flex-wrap gap-2">
            {talent_job.work_model?.map((model) => (
              <Text key={model} as="span" size="lg">
                <span className="flex flex-row flex-wrap">
                  <Pill label={model} size="base" />
                </span>
              </Text>
            ))}
          </div>
        </div>

        <Text as="span" size="base">
          <span className="flex flex-row flex-wrap gap-1 items-center">
            <MapPin className="h-5 w-5" />
            <Pill label={talent_job.location?.name} size="base" />
          </span>
        </Text>

        <Text as="span" size="base">
          <span className="flex flex-row flex-wrap gap-1 items-center">
            <Globe className="h-5 w-5" />
            <a
              href={urlHelper.websiteUrl(talent_job.company.website)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Pill label={talent_job.company.website} size="base" />
            </a>
          </span>
        </Text>
      </div>
    </div>
  )
}

export default Details
