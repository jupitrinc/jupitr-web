import React from "react"
import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { ITalentProfile } from "state/talent_profile/talentProfile.types"
import { urlHelper } from "helper/urlHelper"

interface props {
  intro_video: ITalentProfile["intro_video"] | undefined
}

const IntroVideo = ({ intro_video }: props) => {
  return (
    intro_video && (
      <div className="flex max-h-96">
        <VideoPlayer src={urlHelper.videoUrl(intro_video) as string} />
      </div>
    )
  )
}

export default IntroVideo
