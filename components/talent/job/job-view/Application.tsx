import React, { useState } from "react"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Modal } from "ui-library/modal/Modal"
import { Text } from "ui-library/text/Text"
import { Button } from "ui-library/button/Button"
import { Check } from "lucide-react"
import { VideoRecorder } from "ui-library/video/video-recorder/VideoRecorder"
import { SkillCard } from "ui-library/content/card/skill-card/SkillCard"
import { static_data_job } from "data/job"
import { useNotification } from "helper/hooks/useNotification"
import { useTalentJobState } from "state/talent_job/useTalentJobState"
import { ProgressBar } from "ui-library/progress-bar/ProgressBar"

const Application = () => {
  const { talent_job } = useTalentJobState()
  const [step, setStep] = useState<number>(1)
  const { notification, showNotification, hideNotification } = useNotification()

  const progress = (step: number) => {
    switch (step) {
      case 1:
        return 50

      case 2:
        return 90

      default:
        return 100
    }
  }

  const handleStepBack = () => {
    setStep(step > 1 ? step - 1 : 1)
  }

  const handleNextStep = () => {
    setStep(step + 1)
  }
  return (
    <>
      <Button
        size="lg"
        color="special"
        variant="contained"
        label="Apply"
        full_width
        onClick={showNotification}
      />

      <Modal open={notification} onClose={hideNotification}>
        <div className="h-[40rem]">
          <div className="overflow-y-scroll h-full flex flex-col pb-28">
            <div className="flex flex-row gap-5 items-center">
              <Avatar
                image_url={talent_job.company.logo}
                size={10}
                alt={`${talent_job.company.name} logo`}
              />
              <div className="flex flex-col gap-1">
                <Text as="h1" size="lg">
                  {talent_job.title}
                </Text>

                <Text as="span" size="sm">
                  {talent_job.company.name}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-5 mb-5 w-4/5 mx-auto">
              <ProgressBar progress={progress(step)} type="sticky" />

              {step === 1 && (
                <div className="flex flex-col gap-5 mt-10">
                  <Text as="span" size="base" align="left">
                    Rate your skills
                  </Text>

                  <div className="flex flex-col flex-wrap gap-5">
                    {talent_job.skills &&
                      talent_job.skills.map((skill) => (
                        <SkillCard
                          key={skill.id}
                          skill={skill}
                          levels={static_data_job.skill_levels}
                        />
                      ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="flex flex-col gap-5 mt-10">
                  <Text as="span" size="base" align="left">
                    {talent_job.application_video.description}
                  </Text>

                  <div className="flex flex-col flex-wrap gap-5">
                    <VideoRecorder
                      duration={Number(talent_job.application_video.duration)}
                      //onChange={(video) => console.log(video)}
                      recordLabel="Start"
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
            <div className="flex flex-row gap-5 justify-center  bg-gray-100 absolute bottom-0 left-0 w-full p-3">
              {step !== 1 && (
                <Button
                  label="Back"
                  size="base"
                  variant="text"
                  onClick={handleStepBack}
                />
              )}
              <Button
                label={step === 2 ? "Submit" : "Next"}
                size="base"
                variant="outlined"
                onClick={handleNextStep}
              />
            </div>
          )}
        </div>
      </Modal>
    </>
  )
}

export default Application
