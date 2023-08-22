import React from "react"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { Text } from "ui-library/text/Text"
import { Dropdown } from "ui-library/menu/dropdown/Dropdown"
import { Divider } from "ui-library/content/divider/Divider"
import { Card } from "ui-library/content/card/Card"
import { Plus, Users2 } from "lucide-react"
import { SectionHeader } from "ui-library/content/section-header/SectionHeader"

export const Videos = () => {
  const { company_job } = useCompanyJobState()

  return (
    <Card type="section">
      <div className="flex flex-col gap-5">
        <SectionHeader title="Videos" />
        <ActionBar />
      </div>

      {company_job.videos &&
        company_job.videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
    </Card>
  )
}

const ActionBar = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <Card type="linked">
        <div className="flex flex-col gap-1 justify-center items-center">
          <Plus className="h-5 w-5 text-gray-600" />
          <Text as="span" size="base">
            Add video
          </Text>
        </div>
      </Card>

      <Card type="linked">
        <div className="flex flex-col gap-1 justify-center items-center">
          <Users2 className="h-5 w-5 text-gray-600" />
          <Text as="span" size="base">
            Invite team
          </Text>
        </div>
      </Card>
    </div>
  )
}

const VideoCard = ({ video }) => {
  const dropdown_options = [{ name: "Remove", onClick: () => null }]
  return (
    <div className="flex flex-col gap-5">
      <VideoPlayer src={video.video_url} />

      <div className="flex flex-row gap-5 justify-between">
        <div className="flex flex-col gap-0">
          <Text as="span" size="lg">
            {video.company_member_profile.name}
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
