import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import { urlHelper } from "helper/urlHelper"
import { useMemo } from "react"

const CoverVideo = () => {
  const { talent_job } = useTalentJobState()

  const coverVideo = useMemo(() => {
    const coverVideo = talent_job.company_videos.find(
      (video) => video.primary === true
    )

    if (coverVideo) return coverVideo
    else return talent_job.company_videos[0]
  }, [talent_job.company_videos])

  if (talent_job.company_videos.length) {
    return (
      <VideoPlayer
        src={urlHelper.videoUrl(coverVideo.video_url) as string}
        poster={urlHelper.videoPosterUrl(coverVideo.video_url)}
      />
    )
  } else {
    return null
  }
}

export default CoverVideo
