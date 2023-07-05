import React, { useState } from "react"
import { ITalentJob } from "state/talent_job/talentJob.types"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Modal } from "ui-library/modal/Modal"
import { ProgressBar } from "ui-library/progress-bar/ProgressBar"
import { Text } from "ui-library/text/Text"
import { SkillCard } from "../profile/Skills"
import { Button } from "ui-library/button/Button"
import { Check } from "lucide-react"
import { VideoRecorder } from "ui-library/video/video-recorder/VideoRecorder"
import { VideoRecorderProps } from "ui-library/video/video-recorder/VideoRecorder.types"

interface application {
  job: ITalentJob
  open: boolean
  onClose: (value: boolean) => void
}

export const Application: React.FC<application> = (application) => {
  const [step, setStep] = useState<number>(1)

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
    <Modal open={application.open} onClose={application.onClose}>
      <div className="h-[40rem]">
        <div className="overflow-y-scroll h-full flex flex-col pb-28">
          <div className="flex flex-row gap-5 items-center">
            <Avatar
              image_url={application.job.company.logo}
              size={10}
              alt={`${application.job.company.name} logo`}
            />
            <div className="flex flex-col gap-1">
              <Text as="h1" size="lg">
                {application.job.title}
              </Text>

              <Text as="span" size="sm">
                {application.job.company.name}
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5 mb-5 w-4/5 mx-auto">
            <ProgressBar value={progress(step)} />

            {step === 1 && (
              <div className="flex flex-col gap-5 mt-10">
                <Text as="span" size="base" align="left">
                  Rate your skills
                </Text>

                <div className="flex flex-col flex-wrap gap-5">
                  {application.job.skills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col gap-5 mt-10">
                <Text as="span" size="base" align="left">
                  {application.job.talent_response_video.description}
                </Text>

                <div className="flex flex-col flex-wrap gap-5">
                  {/* <VideoRecorder
                    duration={
                      application.job.talent_response_video
                        .length as VideoRecorderProps["duration"]
                    }
                  /> */}
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
          <div className="flex flex-row gap-5 justify-center p-5 bg-gray-100 absolute bottom-0 left-0 w-full h-20">
            {step !== 1 && (
              <Button label="Back" size="base" onClick={handleStepBack} />
            )}
            <Button
              label={step === 2 ? "Submit" : "Next"}
              color="special"
              size="base"
              onClick={handleNextStep}
            />
          </div>
        )}
      </div>
    </Modal>
  )
}
