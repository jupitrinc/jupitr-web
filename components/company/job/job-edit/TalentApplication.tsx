import React from "react"
import { Select } from "ui-library/form/select/Select"
import { Textarea } from "ui-library/form/textarea/Textarea"
import { Card } from "ui-library/content/card/Card"
import { static_data_job } from "data/job"
import { SectionHeader } from "ui-library/content/section-header/SectionHeader"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { useStringState } from "helper/hooks/useDataState"

const TalentApplication = () => {
  const { company_job } = useCompanyJobState()
  const { value: description, setValue: setDescription } = useStringState(
    company_job.application_video?.description
  )
  const { value: duration, setValue: setDuration } = useStringState(
    String(company_job.application_video?.duration)
  )

  return (
    <Card type="section">
      <SectionHeader title="Application" />
      <Textarea
        placeholder="E.g Why are you the best person for this job?"
        label="Question"
        name="application_question"
        value={description}
      />
      <Select
        options={static_data_job.video_duration}
        label="Video duration"
        magic_word="seconds"
        placeholder="Select"
        value={duration}
      />
    </Card>
  )
}

export default TalentApplication
