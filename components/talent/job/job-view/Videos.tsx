import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import { urlHelper } from "helper/urlHelper"

const Videos = () => {
  const { talent_job } = useTalentJobState()

  if (talent_job.company_videos) {
    return (
      <div className="flex flex-row">
        {talent_job.company_videos.map((video, index) => (
          <div key={video.id} className={`${index === 0 ? "" : "basis-1/3"}`}>
            <VideoPlayer src={urlHelper.videoUrl(video.video_url) as string} />
          </div>
        ))}
      </div>
    )
  } else {
    return null
  }
}

export default Videos
