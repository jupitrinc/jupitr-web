import React from "react"
import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { ITalentProfile } from "state/talent_profile/talentProfile.types"
import { urlHelper } from "helper/urlHelper"

const IntroVideo = ({
  video,
}: {
  video: ITalentProfile["intro_video"] | undefined
}) => {
  return (
    video && (
      <div className="flex max-h-96">
        <VideoPlayer src={urlHelper.videoUrl(video) as string} />
      </div>
    )
  )
}

export default IntroVideo
