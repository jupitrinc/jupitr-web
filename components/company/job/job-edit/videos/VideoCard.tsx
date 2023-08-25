import React from "react"
import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { Text } from "ui-library/text/Text"
import { Dropdown } from "ui-library/menu/dropdown/Dropdown"
import { Divider } from "ui-library/content/divider/Divider"
import { IJobVideo } from "state/company_job/companyJob.types"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"

const VideoCard = ({ video }: { video: IJobVideo }) => {
  const { deleteJobVideo } = useCompanyJobAction()

  const dropdown_options = [
    { name: "Remove", onClick: () => video.id && deleteJobVideo(video.id) },
  ]
  return (
    <div className="flex flex-col gap-5">
      <VideoPlayer src={video.video_url} />

      <div className="flex flex-row gap-5 justify-between">
        <div className="flex flex-col gap-0">
          <Text as="span" size="lg">
            {video.company_member_profile.users.name}
          </Text>
          <Text as="span" size="sm">
            {video.company_member_profile.job_title}
          </Text>
        </div>

        <Dropdown options={dropdown_options} type="more" />
      </div>
      <Divider />
    </div>
  )
}

export default VideoCard
