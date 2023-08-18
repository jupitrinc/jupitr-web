import { useStringState } from "helper/hooks/useDataState"
import React from "react"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { TextInput } from "ui-library/form/text-input/TextInput"

const JobTitle = () => {
  const { company_job } = useCompanyJobState()
  const { updateTitle } = useCompanyJobAction()
  const { value, setValue } = useStringState(company_job.title)

  const update = () => {
    if (value && value !== company_job.title) {
      updateTitle(company_job.id, value.trim())
    }
  }

  return (
    <div className="basis-1/3 w-full">
      <TextInput
        placeholder="Job title"
        value={value}
        autoFocus={!value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={update}
        light
      />
    </div>
  )
}

export default JobTitle
