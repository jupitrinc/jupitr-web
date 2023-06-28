import { numberHelper } from "helper/numberHelper"
import { Globe, Laptop, MapPin, PoundSterling } from "lucide-react"
import React from "react"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Button } from "ui-library/button/Button"
import { Divider } from "ui-library/divider/Divider"
import { Pill } from "ui-library/pill/Pill"
import { Text } from "ui-library/text/Text"
import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"

export const Details = () => {
  const { talent_job } = useTalentJobState()
  const { formatNumber } = numberHelper

  if (talent_job.id) {
    return (
      <div className="flex flex-col gap-5 flex-wrap">
        <div className="flex flex-row">
          {talent_job.videos.map((video, index) => (
            <div key={video.id} className={`${index === 0 ? "" : "basis-1/3"}`}>
              <VideoPlayer src={video.video_url} />
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-between gap-5 items-center">
          <div className="flex flex-row gap-5 items-center">
            <Avatar
              image_url={talent_job.company.logo}
              size={10}
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
          <div>
            <Button
              size="lg"
              color="important"
              variant="contained"
              label="Apply"
            />
          </div>
        </div>

        <Divider />

        <div className="flex flex-row justify-between gap-5">
          <div className="flex flex-col flex-wrap gap-5">
            <div className="flex flex-row gap-2">
              {talent_job.company.industry.map((name) => (
                <Pill key={name} label={name} size="sm" />
              ))}
            </div>
            <Text as="span" size="base">
              <span className="flex flex-row flex-wrap gap-1 items-center">
                <PoundSterling className="h-4 w-4" />
                <Pill label={formatNumber(talent_job.salary)} size="sm" />
              </span>
            </Text>

            <div className="flex flex-row flex-wrap gap-2 items-center">
              <Laptop className="h-5 w-5" />

              <div className="flex flex-row flex-wrap gap-2">
                {talent_job.work_model.map((model) => (
                  <Text key={model} as="span" size="base">
                    <span className="flex flex-row flex-wrap">
                      <Pill label={model} size="sm" />
                    </span>
                  </Text>
                ))}
              </div>
            </div>

            <Text as="span" size="base">
              <span className="flex flex-row flex-wrap gap-1 items-center">
                <MapPin className="h-5 w-5" />

                <Pill label={talent_job.location} size="sm" />
              </span>
            </Text>

            <Text as="span" size="base">
              <span className="flex flex-row flex-wrap gap-1 items-center">
                <Globe className="h-5 w-5" />
                <a
                  href={talent_job.company.website.trim()}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Pill label={talent_job.company.website} size="sm" />
                </a>
              </span>
            </Text>
          </div>
        </div>

        <Divider />

        <div className="flex flex-col gap-5">
          <Text as="h2" size="lg">
            Skills
          </Text>

          <div className="flex flex-row flex-wrap gap-5">
            {talent_job.skills.map((skill) => (
              <Pill key={skill.id} label={skill.name} size="sm" />
            ))}
          </div>
        </div>

        <Divider />

        <div className="flex flex-col gap-5">
          <Text as="h2" size="lg">
            Tech challenge
          </Text>

          <div className="flex flex-row flex-wrap gap-5">
            {talent_job.technical_test.map((test) => (
              <Pill key={test} label={test} size="sm" />
            ))}
          </div>
        </div>

        <Divider />
      </div>
    )
  } else {
    return null
  }
}
