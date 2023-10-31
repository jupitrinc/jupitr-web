import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import { urlHelper } from "helper/urlHelper"
import VideoTitle from "./videos/VideoTitle"

const Videos = () => {
  const { talent_job } = useTalentJobState()
  const videos = talent_job.company_videos.sort((v) => (v.primary ? -1 : 1))

  if (videos.length) {
    return (
      <div className="snap-proximity snap-x flex flex-row overflow-scroll gap-3 pb-1">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`snap-center shrink-0 ${
              videos.length > 1 ? "w-[90%]" : "w-full"
            }`}
          >
            <div className="py-3">
              <VideoPlayer
                src={urlHelper.videoUrl(video.video_url) as string}
                poster={urlHelper.videoPosterUrl(video.video_url)}
              />
            </div>
            <VideoTitle
              name={video?.user?.name}
              title={video?.user?.job_title}
            />
          </div>
        ))}
      </div>
    )
  } else {
    return null
  }
}

export default Videos
