import React, { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Check } from "lucide-react"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Modal, useModal } from "ui-library/modal/Modal"
import { Text } from "ui-library/text/Text"
import { Button } from "ui-library/button/Button"
import { VideoRecorder } from "ui-library/video/video-recorder/VideoRecorder"
import { static_data_job } from "data/job"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import { ProgressBar } from "ui-library/progress-bar/ProgressBar"
import { urlHelper } from "helper/urlHelper"
import { useApplication } from "./application/useApplication"
import { useTalentApplicationAction } from "state/talent_application/useTalentApplicationAction"
import { useUserState } from "state/user/useUserState"
import { useTalentApplicationState } from "state/talent_application/useTalentApplicationState"
import { RecordingStatus } from "ui-library/video/video-recorder/video-recorder/useVideoRecorder"
import { AccountTypeEnum } from "state/user/user.types"
import SkillCard from "ui-library/content/card/skill-card-tabs/SkillCard"
import UserName from "components/user/profile/UserName"

const Application = () => {
  const router = useRouter()
  const { user } = useUserState()
  const { talent_job } = useTalentJobState()
  const { modal, showModal, hideModal } = useModal()
  const {
    progress,
    step,
    nextStep,
    prevStep,
    skills,
    updateSkill,
    videoFile,
    setVideoFile,
  } = useApplication(talent_job.skills)

  const [recordingStatus, setRecordingStatus] =
    useState<RecordingStatus>("inactive")

  const { addApplication } = useTalentApplicationAction()
  const { success, loading } = useTalentApplicationState()

  const submitApplication = useCallback(() => {
    if (!videoFile) return

    const data = {
      file: videoFile,
      user_id: user.id,
      company_id: talent_job.company_id,
      job_id: talent_job.id,
      skills: skills,
    }

    addApplication(data)
  }, [videoFile, user, talent_job])

  useEffect(() => {
    success && nextStep()
  }, [success])

  const startApplication = () => {
    if (user.id && user.account_type === AccountTypeEnum.talent) showModal()
    else router.push(`/?jobId=${talent_job.id}`)
  }

  return (
    <>
      {user.account_type !== AccountTypeEnum.company && (
        <Button
          size="base"
          color="special"
          variant="contained"
          label="Apply"
          onClick={startApplication}
        />
      )}

      <Modal open={modal} onClose={hideModal}>
        <div className="h-[30rem] md:h-[40rem]">
          <div className="overflow-y-scroll h-full flex flex-col px-1">
            <div className="flex flex-row gap-5 items-center">
              <Avatar
                image_url={urlHelper.imageUrl(talent_job.company.logo)}
                size={10}
                alt={`${talent_job.company.name} logo`}
              />
              <div className="flex flex-col">
                <Text as="h1" size="lg">
                  {talent_job.title}
                </Text>

                <Text as="span" size="sm">
                  {talent_job.company.name}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-5 mb-5 w-full mx-auto">
              <ProgressBar progress={progress(step)} type="sticky" />

              {step === 1 && (
                <div className="flex flex-col gap-5 mt-10">
                  {!user.name && (
                    <div className="mb-10">
                      <UserName />
                    </div>
                  )}

                  <Text as="span" size="base" align="left">
                    Rate your skills
                  </Text>

                  <div className="flex flex-col flex-wrap gap-5">
                    {skills &&
                      skills.map((skill) => (
                        <SkillCard
                          key={skill.id}
                          skill={skill}
                          levels={static_data_job.skill_levels}
                          updateSkill={(level) => updateSkill(level, skill)}
                          hideRemove={true}
                        />
                      ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="flex flex-col gap-5 mt-10">
                  <Text as="span" size="base" align="left">
                    {talent_job.application_video?.description
                      ? talent_job.application_video?.description
                      : "Why are you the best person for this job?"}
                  </Text>

                  <div className="flex flex-col flex-wrap gap-5">
                    <VideoRecorder
                      duration={Number(talent_job.application_video?.duration)}
                      onChange={(video) => setVideoFile(video)}
                      recordLabel={videoFile ? "Record again" : "Start"}
                      disabled={loading}
                      getRecordingStatus={(status) =>
                        setRecordingStatus(status)
                      }
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="flex flex-col gap-5 mt-32">
                  <div className="flex justify-center align-middle">
                    <Text as="span" size="base" align="center">
                      <span className="flex flex-col justify-center items-center gap-2">
                        <Check className="h-6 w-6" />
                        <span>Application submitted</span>
                      </span>
                    </Text>
                  </div>
                </div>
              )}
            </div>
          </div>

          {step < 3 && (
            <div className="flex flex-row gap-5 justify-center bg-gray-100 absolute bottom-0 left-0 w-full p-3">
              {step !== 1 && (
                <Button
                  label="Back"
                  size="base"
                  variant="text"
                  onClick={prevStep}
                  disabled={loading || recordingStatus === "recording"}
                />
              )}
              <Button
                label={step === 2 ? "Submit" : "Next"}
                size="base"
                variant="outlined"
                onClick={step === 2 ? submitApplication : nextStep}
                disabled={
                  (step === 2 && (!videoFile || skills.length < 1)) ||
                  !user.name
                }
                loading={loading}
              />
            </div>
          )}
        </div>
      </Modal>
    </>
  )
}

export default Application
