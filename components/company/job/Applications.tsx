import { SkillCard } from "components/talent/job/Details"
import { SocialIcon } from "components/talent/profile/SocialLinks"
import { useRouter } from "next/router"
import React from "react"
import { IJobApplication } from "state/company_job/companyJob.types"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { Button } from "ui-library/button/Button"
import { Card } from "ui-library/card/Card"
import { CopyClipboard } from "ui-library/copy-clipboard/CopyClipboard"
import { Text } from "ui-library/text/Text"
import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"

export const Applications = () => {
  const { company_job } = useCompanyJobState()
  const router = useRouter()

  const viewJob = () => {
    router.push(`/c/jobs/${company_job.id}`)
  }

  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center bg-gray-200 p-5 rounded-lg">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <Text as="span" size="xl" align="left">
            {company_job.title}
          </Text>
          <Button
            label="View job"
            variant="outlined"
            size="xs"
            onClick={viewJob}
          />
        </div>

        {company_job.applications?.length && (
          <Text as="span" size="sm" align="right">
            {`${company_job.applications?.length} applications`}
          </Text>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {company_job.applications?.map((application) => (
          <ApplicationCard key={application.id} application={application} />
        ))}
      </div>
    </div>
  )
}

const ApplicationCard = ({ application }: { application: IJobApplication }) => {
  return (
    <Card type="section">
      <div className="flex flex-col gap-5">
        <div>
          <Text as="span" size="lg">
            {application.talent_profile.name}
          </Text>

          <div className="flex flex-row gap-1 items-center justify-between">
            <div className="flex flex-col">
              <div className="flex flex-row gap-2 items-center">
                <Text as="span" size="sm">
                  {application.talent_profile.email}
                </Text>
                <CopyClipboard value={application.talent_profile.email} />
              </div>
            </div>

            <div className="flex flex-row gap-3">
              {application.talent_profile.social_links.map((link) => (
                <a
                  key={link}
                  href={link.trim()}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <SocialIcon link={link} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <VideoPlayer src={application.video_url} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {application.skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </Card>
  )
}
