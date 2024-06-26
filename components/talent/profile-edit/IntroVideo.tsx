import React, { useCallback, useEffect, useState } from "react"
import { Plus, RefreshCw } from "lucide-react"
import { Modal, useModal } from "ui-library/modal/Modal"
import { Text } from "ui-library/text/Text"
import { VideoRecorder } from "ui-library/video/video-recorder/VideoRecorder"
import { Button } from "ui-library/button/Button"
import { Card } from "ui-library/content/card/Card"
import { useUserState } from "state/user/useUserState"
import { system_data } from "data/system"
import { SectionHeader } from "ui-library/content/section-header/SectionHeader"
import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { urlHelper } from "helper/urlHelper"
import { useTalentProfileAction } from "state/talent_profile/useTalentProfileAction"
import SectionVisibility from "./SectionVisibility"

const IntroVideo = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const { user, success, loading } = useUserState()
  const { updateIntroVideo } = useTalentProfileAction()
  const { modal, showModal, hideModal } = useModal()

  const handleAddVideo = useCallback(() => {
    if (!videoFile) return

    updateIntroVideo({
      file: videoFile,
      user_id: user.id,
    })
  }, [videoFile, user])

  useEffect(() => {
    success && hideModal()
  }, [success])

  return (
    <>
      <Card type="section">
        <div className="absolute right-1 top-1 flex items-center">
          <SectionVisibility section="intro_video" />
        </div>
        <div className="flex flex-row items-center justify-between gap-1">
          <SectionHeader title="Intro video" />
          <Button
            label={user.intro_video ? "Change" : "Add"}
            onClick={showModal}
            variant="outlined"
            size="xs"
            icon={
              user.intro_video ? (
                <RefreshCw className="h-3 w-3" />
              ) : (
                <Plus className="h-4 w-4" />
              )
            }
          />
        </div>

        {user.intro_video && (
          <VideoPlayer
            src={urlHelper.videoUrl(user.intro_video) as string}
            poster={urlHelper.videoPosterUrl(user.intro_video)}
          />
        )}
      </Card>

      <Modal open={modal} onClose={hideModal}>
        <div className="flex min-h-[18rem] flex-col gap-5 overflow-auto pb-5">
          <Text as="span" size="xl">
            Add video
          </Text>

          <VideoRecorder
            duration={Number(system_data.video_duration[2])}
            recordLabel={videoFile ? "Record again" : "Start"}
            onChange={(videoFile) => setVideoFile(videoFile)}
            disabled={loading}
          />

          {videoFile && (
            <div className="flex justify-center">
              <Button
                label={loading ? "Saving..." : "Save"}
                size="base"
                variant="outlined"
                loading={loading}
                onClick={handleAddVideo}
              />
            </div>
          )}
        </div>
      </Modal>
    </>
  )
}

export default IntroVideo
