import React, { useMemo } from "react"
import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { Text } from "ui-library/text/Text"
import { Dropdown } from "ui-library/menu/dropdown/Dropdown"
import { Divider } from "ui-library/content/divider/Divider"
import { IJobVideo } from "state/company_job/companyJob.types"
import { useCompanyJobVideosAction } from "state/company_job_videos/useCompanyJobVideosAction"
import { urlHelper } from "helper/urlHelper"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"
import { Pill } from "ui-library/pill/Pill"

const VideoCard = ({ video }: { video: IJobVideo }) => {
  const { deleteVideo } = useCompanyJobVideosAction()
  const { togglePrimaryVideo } = useCompanyJobAction()

  const dropdown_options = useMemo(
    () =>
      video.primary
        ? [{ name: "Remove", onClick: () => video.id && deleteVideo(video.id) }]
        : [
            {
              name: "Set as cover video",
              onClick: () =>
                togglePrimaryVideo({
                  video_id: video.id,
                  job_id: video.job_id,
                }),
            },
            {
              name: "Remove",
              onClick: () => video.id && deleteVideo(video.id),
            },
          ],

    [video]
  )

  return (
    <div className="flex flex-col gap-3">
      <VideoPlayer src={urlHelper.videoUrl(video.video_url) as string} />

      <div className="flex flex-row gap-5 justify-between">
        <div className="flex flex-col gap-0">
          <Text as="span" size="lg">
            {video.user.name}
          </Text>
          <Text as="span" size="sm">
            {video.user.job_title}
          </Text>
        </div>

        <div className="flex flex-row items-center gap-2">
          {video.primary && (
            <Pill label="Cover video" size="xs" variant="outlined" />
          )}
          <Dropdown options={dropdown_options} type="more" />
        </div>
      </div>
      <Divider />
    </div>
  )
}

export default VideoCard
