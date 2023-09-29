import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import { urlHelper } from "helper/urlHelper"
import { Text } from "../../../../../ui-library/text/Text"

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
        {user?.name && user?.title ? (
          <Text align="center" as="span" size="base">
            {user?.name} - {user?.title}
          </Text>
        ) : (
          ""
        )}
      </div>
    )
  } else {
    return null
  }
}

export default CoverVideo
