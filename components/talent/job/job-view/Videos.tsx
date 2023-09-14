import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import { urlHelper } from "helper/urlHelper"

const Videos = () => {
  const { talent_job } = useTalentJobState()

  if (talent_job.company_videos.length) {
    return (
      <div className="flex flex-col gap-5">
        {talent_job.company_videos.map(
          (video, index) =>
            index !== 0 && (
              <div key={video.id}>
                <VideoPlayer
                  src={urlHelper.videoUrl(video.video_url) as string}
                  poster={urlHelper.videoPosterUrl(video.video_url)}
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
