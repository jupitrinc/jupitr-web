import React, { useCallback } from "react"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { useReactiveState } from "helper/hooks/useReactiveState"
import { stringHelper } from "helper/stringHelper"

const JobTitle = () => {
  const { isEmpty } = stringHelper

  const { company_job } = useCompanyJobState()
  const { updateTitle } = useCompanyJobAction()
  const { value, setValue } = useReactiveState("", company_job.title)

  const update = useCallback(() => {
    if (value && value !== company_job.title) {
      updateTitle(company_job.id, value.trim())
    }
  }, [value, company_job.id])

  return (
    <div className="basis-1/3 w-full">
      <TextInput
        placeholder="Job title"
        value={value}
        autoFocus={isEmpty(value)}
        onChange={(e) => setValue(e.target.value)}
        onBlur={update}
        light
      />
    </div>
  )
}

export default JobTitle
