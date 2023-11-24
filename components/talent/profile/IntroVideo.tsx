import React, { useCallback, useEffect, useState } from "react"
import { Plus, RefreshCw } from "lucide-react"
import { Modal, useModal } from "ui-library/modal/Modal"
import { Text } from "ui-library/text/Text"
import { VideoRecorder } from "ui-library/video/video-recorder/VideoRecorder"
import { Button } from "ui-library/button/Button"
import { Card } from "ui-library/content/card/Card"
import { useUserState } from "state/user/useUserState"
import { static_data_job } from "data/job"
import { SectionHeader } from "ui-library/content/section-header/SectionHeader"
import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { urlHelper } from "helper/urlHelper"
import { useTalentProfileAction } from "state/talent_profile/useTalentProfileAction"

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
        <div className="flex flex-row gap-1 justify-between">
          <SectionHeader title="Intro video" />
          <Button
            label={user.intro_video ? "Change" : "Add"}
            onClick={showModal}
            variant="outlined"
            icon={
              user.intro_video ? (
                <RefreshCw className="h-4 w-4" />
              ) : (
                <Plus className="h-5 w-5" />
              )
            }
          />
        </div>

        {user.intro_video && (
          <VideoPlayer src={urlHelper.videoUrl(user.intro_video) as string} />
        )}
      </Card>

      <Modal open={modal} onClose={hideModal}>
        <div className="flex flex-col gap-5 min-h-[18rem] overflow-auto pb-5">
          <Text as="span" size="xl">
            Add video
          </Text>

          <VideoRecorder
            duration={Number(static_data_job.video_duration[2])}
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
