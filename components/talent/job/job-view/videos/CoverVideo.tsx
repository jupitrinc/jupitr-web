import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import { urlHelper } from "helper/urlHelper"
import { useMemo } from "react"
import VideoTitle from "./VideoTitle"

const CoverVideo = () => {
  const { talent_job } = useTalentJobState()

  const coverVideo = useMemo(() => {
    const coverVideo = talent_job.company_videos.find(
      (video) => video.primary === true
    )

    if (coverVideo) return coverVideo
    else return talent_job.company_videos[0]
  }, [talent_job.company_videos])

  const user = {
    title:
      talent_job.company_videos[0]?.users?.company_member_profile?.job_title,
    name: talent_job.company_videos[0]?.users?.company_member_profile?.users
      ?.name,
  }
  if (talent_job.company_videos.length) {
    return (
      <div className="flex flex-col gap-3">
        <VideoPlayer
          src={urlHelper.videoUrl(coverVideo.video_url) as string}
          poster={urlHelper.videoPosterUrl(coverVideo.video_url)}
        />
        <VideoTitle name={user.name} title={user.title} />
      </div>
    )
  } else {
    return null
  }
}

export default CoverVideo
