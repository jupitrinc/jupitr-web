import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { useTalentJobState } from "state/talent_job/useTalentJobState"

const Videos = () => {
  const { talent_job } = useTalentJobState()

  return (
    <div className="flex flex-row">
      {talent_job.videos.map((video, index) => (
        <div key={video.id} className={`${index === 0 ? "" : "basis-1/3"}`}>
          <VideoPlayer src={video.video_url} />
        </div>
      ))}
    </div>
  )
}

export default Videos
