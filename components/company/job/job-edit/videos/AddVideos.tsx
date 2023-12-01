import React, { useCallback, useEffect, useState } from "react"
import { Plus } from "lucide-react"
import { Text } from "ui-library/text/Text"
import { Card } from "ui-library/content/card/Card"
import InviteTeam from "components/company/member/InviteTeam"
import { Modal, useModal } from "ui-library/modal/Modal"
import { VideoRecorder } from "ui-library/video/video-recorder/VideoRecorder"
import { static_data_job } from "data/job"
import { Button } from "ui-library/button/Button"
import { useCompanyJobVideosState } from "state/company_job_videos/useCompanyJobVideosState"
import { useCompanyJobVideosAction } from "state/company_job_videos/useCompanyJobVideosAction"
import { useUserState } from "state/user/useUserState"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"

const AddVideos = () => {
  const { user } = useUserState()
  const { company_job, videos } = useCompanyJobState()

  const { modal, showModal, hideModal } = useModal()

  const [videoFile, setVideoFile] = useState<File | null>(null)
  const { loading, success } = useCompanyJobVideosState()
  const { addVideo } = useCompanyJobVideosAction()

  const handleAddVideo = useCallback(() => {
    if (!videoFile) return

    addVideo({
      file: videoFile,
      user_id: user.id,
      company_id: user.company_id,
      job_id: company_job.id,
    })
  }, [videoFile, user, company_job])

  useEffect(() => {
    success && hideModal()
  }, [success])

  return (
    <div className="grid grid-cols-2 justify-center gap-5">
      {videos && videos.length < 10 && (
        <Card type="linked" onClick={showModal} justifyContent="center">
          <div className="flex flex-col items-center justify-center gap-1 self-center">
            <Plus className="h-5 w-5 text-gray-600" />
            <Text as="span" size="base">
              Add video
            </Text>
          </div>
        </Card>
      )}

      <Modal open={modal} onClose={hideModal}>
        <div className="flex min-h-[18rem] flex-col gap-5 overflow-auto pb-5">
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

      <InviteTeam title="Add team" />
    </div>
  )
}

export default AddVideos
