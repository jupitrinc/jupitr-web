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
import { MapPin } from "lucide-react"

const ApplicationCard = ({
  application,
  jobSkills,
}: {
  application: IApplication
  jobSkills?: ICompanyJob["skills"]
}) => {
  const socials = application.users.talent_profile?.socials ?? []
  const location = application.users.location?.name

  return (
    <Card type="section">
      <div className="flex flex-col gap-5">
        <div>
          <div className="flex flex-row items-center justify-between gap-1">
            <Text as="span" size="lg">
              {application.users.name}
            </Text>

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

          <div className="flex flex-row items-center justify-between gap-1">
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-2">
                <Text as="span" size="sm">
                  {application.users?.email}
                </Text>
                <CopyClipboard value={application.users.email} />
              </div>
            </div>

            {location && (
              <div className="mt-1 flex flex-row items-center justify-end gap-1">
                <MapPin className="h-4 w-4 text-gray-600" />
                <Text as="span" size="xs">
                  {location}
                </Text>
              </div>
            )}
          </div>
        </div>

        <div className="flex max-h-96">
          <VideoPlayer
            src={urlHelper.videoUrl(application.video_url) as string}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
