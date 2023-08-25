import React, { useEffect, useState } from "react"
import { Plus } from "lucide-react"
import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { Text } from "ui-library/text/Text"
import { Dropdown } from "ui-library/menu/dropdown/Dropdown"
import { Divider } from "ui-library/content/divider/Divider"
import { Card } from "ui-library/content/card/Card"
import { SectionHeader } from "ui-library/content/section-header/SectionHeader"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import InviteTeam from "components/company/member/InviteTeam"
import { IJobVideo } from "state/company_job/companyJob.types"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"
import { Modal } from "ui-library/modal/Modal"
import { useNotification } from "helper/hooks/useNotification"
import { VideoRecorder } from "ui-library/video/video-recorder/VideoRecorder"
import { static_data_job } from "data/job"
import { Button } from "ui-library/button/Button"

export const Videos = () => {
  const { videos } = useCompanyJobState()

  return (
    <Card type="section">
      <div className="flex flex-col gap-5">
        <SectionHeader title="Videos" />
        <AddVideos />
      </div>

      {videos &&
        videos.map((video) => <VideoCard key={video.id} video={video} />)}
    </Card>
  )
}

const AddVideos = () => {
  const { notification, showNotification, hideNotification } = useNotification()
  const [videoFile, setVideoFile] = useState<File | null>(null)

  return (
    <div className="grid grid-cols-2 gap-5 justify-center">
      <Card type="linked" onClick={showNotification}>
        <div className="flex flex-col gap-1 justify-center items-center self-center">
          <Plus className="h-5 w-5 text-gray-600" />
          <Text as="span" size="base">
            Add video
          </Text>
        </div>
      </Card>

      <Modal open={notification} onClose={hideNotification}>
        <div className="flex flex-col gap-5">
          <Text as="span" size="xl">
            Add video
          </Text>

          <VideoRecorder
            duration={Number(static_data_job.video_duration[0])}
            recordLabel="Start"
            onChange={(videoFile) => setVideoFile(videoFile)}
          />

          {videoFile && <Button label="Add video" size="base" />}
        </div>
      </Modal>

      <InviteTeam title="Collaborate" />
    </div>
  )
}

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
