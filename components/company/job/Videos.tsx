import React from "react"
import { SectionHeader } from "./Sections"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { Text } from "ui-library/text/Text"
import { Dropdown } from "ui-library/menu/dropdown/Dropdown"
import { Divider } from "ui-library/divider/Divider"
import { Card } from "ui-library/card/Card"
import { Plus, Send } from "lucide-react"

export const Videos = () => {
  const { company_job } = useCompanyJobState()
  const videos = company_job.videos
  return (
    <div className="flex flex-col gap-5 bg-white rounded-lg p-5 md:p-10">
      <SectionHeader title="Videos" />
      <SectionActions />

      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  )
}

const SectionActions = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <Card type="linked">
        <div className="flex flex-col gap-1 justify-center items-center">
          <Plus className="h-6 w-6 text-gray-600" />
          <Text as="span" size="base">
            Add video
          </Text>
        </div>
      </Card>

      <Card type="linked">
        <div className="flex flex-col gap-1 justify-center items-center">
          <Send className="h-5 w-5 text-gray-600" />
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
