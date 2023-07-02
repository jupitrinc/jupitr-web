import { numberHelper } from "helper/numberHelper"
import { Code, Globe, Laptop, MapPin, PoundSterling } from "lucide-react"
import React, { useState } from "react"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Button } from "ui-library/button/Button"
import { Divider } from "ui-library/divider/Divider"
import { Pill } from "ui-library/pill/Pill"
import { Text } from "ui-library/text/Text"
import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { ProgressBar } from "ui-library/progress-bar/ProgressBar"
import { TalentProfileSkill } from "state/talent_profile/talentProfile.types"
import { Application } from "./Application"
import { Card } from "ui-library/card/Card"

export const Details = () => {
  const { talent_job } = useTalentJobState()
  const { formatNumber } = numberHelper

  const [apply, setApply] = useState<boolean>(false)
  const handleApply = () => {
    setApply(!apply)
  }

  if (talent_job.id) {
    return (
      <div className="flex flex-col gap-10 flex-wrap">
        <div className="flex flex-row">
          {talent_job.videos.map((video, index) => (
            <div key={video.id} className={`${index === 0 ? "" : "basis-1/3"}`}>
              <VideoPlayer src={video.video_url} />
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-5 items-center">
          <div className="flex flex-row gap-5 items-center">
            <Avatar
              image_url={talent_job.company.logo}
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
          <div className="w-full sm:w-auto">
            <Button
              size="lg"
              color="special"
              variant="contained"
              label="Apply"
              full_width
              onClick={handleApply}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-row justify-between gap-5 mt-5 mb-5">
            <div className="flex flex-col flex-wrap gap-5">
              <Text as="span" size="base">
                <span className="flex flex-row flex-wrap gap-1 items-center">
                  <PoundSterling className="h-5 w-5" />
                  <Pill label={formatNumber(talent_job.salary)} size="base" />
                </span>
              </Text>

              <div className="flex flex-row flex-wrap gap-2 items-center">
                <Laptop className="h-5 w-5" />

                <div className="flex flex-row flex-wrap gap-2">
                  {talent_job.work_model.map((model) => (
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
                  <Pill label={talent_job.location} size="base" />
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
                    <Pill label={talent_job.company.website} size="base" />
                  </a>
                </span>
              </Text>

              <Text as="span" size="base">
                <span className="flex flex-row gap-1 flex-wrap items-center">
                  <Code className="h-5 w-5" />

                  {talent_job.technical_test.map((test) => (
                    <Text key={test} as="span" size="lg">
                      <span className="flex flex-row flex-wrap p-1">
                        <Pill key={test} label={test} size="base" />
                      </span>
                    </Text>
                  ))}
                </span>
              </Text>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-3 gap-5 items-center">
              <Divider />
              <Text as="h2" size="lg" align="center">
                Skills
              </Text>
              <Divider />
            </div>

            <div className="flex flex-row flex-wrap gap-5">
              {talent_job.skills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        <Application job={talent_job} open={apply} onClose={handleApply} />
      </div>
    )
  } else {
    return null
  }
}

const SkillCard = ({ skill }: { skill: TalentProfileSkill }) => {
  const skillLevel = (level: number) => {
    switch (level) {
      case 1:
        return 10

      case 2:
        return 50

      case 3:
        return 90

      default:
        return 10
    }
  }

  return (
    <Card type="static">
      <div className="flex justify-between mb-3">
        <Text as="span" size="lg">
          {skill.name}
        </Text>
      </div>

      <ProgressBar value={skillLevel(skill.level)} />
      <div className="flex justify-between mt-2">
        <Text as="span" size="sm">
          Beginner
        </Text>
        <Text as="span" size="sm">
          Expert
        </Text>
      </div>
    </Card>
  )
}
