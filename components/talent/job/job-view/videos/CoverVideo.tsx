import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import { urlHelper } from "helper/urlHelper"
import VideoTitle from "./VideoTitle"

const CoverVideo = () => {
  const { talent_job } = useTalentJobState()
  const user = {
    title:
      talent_job.company_videos[0]?.users?.company_member_profile?.job_title,
    name: talent_job.company_videos[0]?.users?.company_member_profile?.users
      ?.name,
  }
  if (talent_job.company_videos.length) {
    return (
      <div>
        <VideoPlayer
          src={
            urlHelper.videoUrl(talent_job.company_videos[0].video_url) as string
          }
          poster={urlHelper.videoPosterUrl(
            talent_job.company_videos[0].video_url
          )}
        />
        <VideoTitle name={user.name} title={user.title} />
      </div>
    )
  } else {
    return null
  }
}

export default CoverVideo
