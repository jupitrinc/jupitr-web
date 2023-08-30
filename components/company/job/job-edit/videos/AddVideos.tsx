import React, { useCallback, useEffect, useState } from "react"
import { Plus } from "lucide-react"
import { Text } from "ui-library/text/Text"
import { Card } from "ui-library/content/card/Card"
import InviteTeam from "components/company/member/InviteTeam"
import { Modal } from "ui-library/modal/Modal"
import { useNotification } from "helper/hooks/useNotification"
import { VideoRecorder } from "ui-library/video/video-recorder/VideoRecorder"
import { static_data_job } from "data/job"
import { Button } from "ui-library/button/Button"
import { Toast } from "ui-library/toast/Toast"
import { useCompanyJobVideosState } from "state/company_job_videos/useCompanyJobVideosState"
import { useCompanyJobVideosAction } from "state/company_job_videos/useCompanyJobVideosAction"
import { useUserState } from "state/user/useUserState"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"

const AddVideos = () => {
  const { user } = useUserState()
  const { company_job } = useCompanyJobState()

  const [videoFile, setVideoFile] = useState<File | null>(null)
  const { loading, error, success } = useCompanyJobVideosState()
  const { addVideo } = useCompanyJobVideosAction()

  const { notification, showNotification, hideNotification } = useNotification()
  const { notification: errorMessage, hideNotification: hideError } =
    useNotification(Boolean(error))

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
    success && hideNotification()
  }, [success])

  return (
    <div className="grid grid-cols-2 gap-5 justify-center">
      <Card type="linked" onClick={showNotification} justifyContent="center">
        <div className="flex flex-col gap-1 justify-center items-center self-center">
          <Plus className="h-5 w-5 text-gray-600" />
          <Text as="span" size="base">
            Add video
          </Text>
        </div>
      </Card>

      <Modal open={notification} onClose={hideNotification}>
        <div className="flex flex-col gap-5">
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

        <Toast label={String(error)} show={errorMessage} onHide={hideError} />
      </Modal>

      <InviteTeam title="Add team" />
    </div>
  )
}

export default AddVideos
