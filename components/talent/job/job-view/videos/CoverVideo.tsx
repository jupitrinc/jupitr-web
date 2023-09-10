import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import { urlHelper } from "helper/urlHelper"

const CoverVideo = () => {
  const { talent_job } = useTalentJobState()

  if (talent_job.company_videos.length) {
    return (
      <VideoPlayer
        src={
          urlHelper.videoUrl(talent_job.company_videos[0].video_url) as string
        }
        poster={urlHelper.videoPosterUrl(
          talent_job.company_videos[0].video_url
        )}
      />
    )
  } else {
    return null
  }
}

export default CoverVideo
