import SkillCard from "components/talent/job/job-view/SkillCard"
import { SocialIcon } from "components/talent/profile/SocialLinks"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { IJobApplication } from "state/company_job/companyJob.types"
import { IApplication } from "state/company_job_application/companyJobApplication.types"
import { useCompanyJobApplicationAction } from "state/company_job_application/useCompanyJobApplicationAction"
import { useCompanyJobApplicationState } from "state/company_job_application/useCompanyJobApplicationState"
import { Button } from "ui-library/button/Button"
import { Card } from "ui-library/content/card/Card"
import { CopyClipboard } from "ui-library/copy-clipboard/CopyClipboard"
import { Text } from "ui-library/text/Text"
import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"

export const Applications = () => {
  const router = useRouter()
  const { jobId } = router.query
  const { company_job_applications: jobApplications } =
    useCompanyJobApplicationState()
  const { getAllApplications, clearJobApplications } =
    useCompanyJobApplicationAction()

  useEffect(() => {
    getAllApplications(String(jobId))

    return () => {
      clearJobApplications()
    }
  }, [])

  const viewJob = () => {
    router.push(`/c/jobs/${jobId}`)
  }

  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center bg-gray-200 p-5 rounded-lg">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <Text as="span" size="xl" align="left">
            {jobApplications.title}
          </Text>
          <Button
            label="View job"
            variant="outlined"
            size="xs"
            onClick={viewJob}
          />
        </div>

        {jobApplications.applications?.length && (
          <Text as="span" size="sm" align="right">
            {`${jobApplications.applications?.length} applications`}
          </Text>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {jobApplications.applications?.map((application) => (
          <ApplicationCard key={application.id} application={application} />
        ))}
      </div>
    </div>
  )
}

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
          {application.users.talent_profile.skills?.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </Card>
  )
}
