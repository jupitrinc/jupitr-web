import React, { useCallback } from "react"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { useReactiveState } from "helper/hooks/useReactiveState"

const Title = () => {
  const { company_job } = useCompanyJobState()
  const { updateTitle } = useCompanyJobAction()
  const { value, setValue } = useReactiveState("", company_job.title ?? "")

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
        onChange={(e) => setValue(e.target.value)}
        onBlur={update}
        autoFocus={!company_job.title}
        light
      />
    </div>
  )
}

export default Title
