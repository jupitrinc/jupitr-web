import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import { urlHelper } from "helper/urlHelper"
import VideoTitle from "./videos/VideoTitle"

const Videos = () => {
  const { talent_job } = useTalentJobState()

  if (talent_job.company_videos.length) {
    return (
      <div className="flex flex-col gap-5">
        {talent_job.company_videos.map(
          (video) =>
            video.primary !== true && (
              <div key={video.id} className="flex flex-col gap-3">
                <VideoPlayer
                  src={urlHelper.videoUrl(video.video_url) as string}
                  poster={urlHelper.videoPosterUrl(video.video_url)}
                />
                <VideoTitle
                  name={video?.user?.name}
                  title={video?.user?.job_title}
                />
              </div>
            )
        )}
      </div>
    )
  } else {
    return null
  }
}

export default Videos
