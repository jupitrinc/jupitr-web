import React, { useCallback } from "react"
import { Select } from "ui-library/form/select/Select"
import { Textarea } from "ui-library/form/textarea/Textarea"
import { Card } from "ui-library/content/card/Card"
import { static_data_job } from "data/job"
import { SectionHeader } from "ui-library/content/section-header/SectionHeader"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { useReactiveState } from "helper/hooks/useReactiveState"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"

const TalentApplication = () => {
  const { company_job } = useCompanyJobState()
  const { updateApplicationVideo } = useCompanyJobAction()
  const { value: application, setValue: setApplication } = useReactiveState(
    {
      description: "",
      duration: "",
    },
    company_job.application_video
  )

  const updateDescription = useCallback(() => {
    if (!application.description.trim()) return
    updateApplicationVideo(company_job.id, {
      ...company_job.application_video,
      description: application.description,
    })
  }, [application, company_job])

  const updateDuration = useCallback(
    (e) => {
      const duration = JSON.parse(e.target.value)
      if (!duration.trim()) return

      updateApplicationVideo(company_job.id, {
        ...company_job.application_video,
        duration: duration,
      })
    },
    [application, company_job.id]
  )

  return (
    <Card type="section">
      <SectionHeader title="Talent application" />
      <Textarea
        placeholder="E.g Why are you the best person for this job?"
        label="Question"
        name="application_question"
        value={application.description}
        onChange={(e) =>
          setApplication({ ...application, description: e.target.value })
        }
        onBlur={updateDescription}
      />
      <Select
        options={static_data_job.video_duration}
        label="Video duration"
        magic_word="seconds"
        placeholder="Select"
        value={application.duration}
        onChange={updateDuration}
      />
    </Card>
  )
}

export default TalentApplication
