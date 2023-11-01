import React from "react"
import { SocialIcon } from "components/talent/profile/SocialLinks"
import { IApplication } from "state/company_job_application/companyJobApplication.types"
import { Card } from "ui-library/content/card/Card"
import { CopyClipboard } from "ui-library/copy-clipboard/CopyClipboard"
import { Text } from "ui-library/text/Text"
import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { urlHelper } from "helper/urlHelper"
import { ICompanyJob } from "state/company_job/companyJob.types"
import SkillCard from "ui-library/content/card/skill-card-progress-bar/SkillCard"

const ApplicationCard = ({
  application,
  jobSkills,
}: {
  application: IApplication
  jobSkills?: ICompanyJob["skills"]
}) => {
  const socials = application.users.talent_profile?.socials ?? []

  return (
    <Card type="section">
      <div className="flex flex-col gap-5">
        <div>
          <Text as="span" size="lg">
            {application.users?.name}
          </Text>

          <div className="flex flex-row gap-1 items-center justify-between">
            <div className="flex flex-col">
              <div className="flex flex-row gap-2 items-center">
                <Text as="span" size="sm">
                  {application.users?.email}
                </Text>
                <CopyClipboard value={application.users?.email} />
              </div>
            </div>

            <div className="flex flex-row gap-3">
              {socials.map(
                (social) =>
                  social.url && (
                    <a
                      key={social.url}
                      href={urlHelper.websiteUrl(social.url)}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <SocialIcon name={social.name} />
                    </a>
                  )
              )}
            </div>
          </div>
        </div>

        <div className="flex max-h-96">
          <VideoPlayer
            src={urlHelper.videoUrl(application.video_url) as string}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {application.skills?.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={{
                ...skill,
                threshold: jobSkills?.find((j) => j.id === skill.id)?.level,
              }}
            />
          ))}
        </div>
      </div>
    </Card>
  )
}

export default ApplicationCard
