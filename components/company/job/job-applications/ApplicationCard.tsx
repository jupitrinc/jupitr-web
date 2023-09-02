import React from "react"
import { SocialIcon } from "components/talent/profile/SocialLinks"
import { IApplication } from "state/company_job_application/companyJobApplication.types"
import { Card } from "ui-library/content/card/Card"
import { CopyClipboard } from "ui-library/copy-clipboard/CopyClipboard"
import { Text } from "ui-library/text/Text"
import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { urlHelper } from "helper/urlHelper"
import SkillCard from "ui-library/content/card/skill-card-progress-bar/SkillCard"

const ApplicationCard = ({ application }: { application: IApplication }) => {
  return (
    <Card type="section">
      <div className="flex flex-col gap-5">
        <div>
          <Text as="span" size="lg">
            {application.users.name}
          </Text>

          <div className="flex flex-row gap-1 items-center justify-between">
            <div className="flex flex-col">
              <div className="flex flex-row gap-2 items-center">
                <Text as="span" size="sm">
                  {application.users.email}
                </Text>
                <CopyClipboard value={application.users.email} />
              </div>
            </div>

            <div className="flex flex-row gap-3">
              {application.users.talent_profile.socials?.map((link) => (
                <a
                  key={link}
                  href={urlHelper.websiteUrl(link)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <SocialIcon link={link} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <VideoPlayer
          src={urlHelper.videoUrl(application.video_url) as string}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {application.skills &&
            application.skills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
        </div>
      </div>
    </Card>
  )
}

export default ApplicationCard
