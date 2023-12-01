import React, { useCallback, useRef } from "react"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { useReactiveState } from "helper/hooks/useReactiveState"

const Title = () => {
  const { company_job } = useCompanyJobState()
  const { updateTitle } = useCompanyJobAction()

  const { value, setValue } = useReactiveState("", company_job.title ?? "")
  const inputRef = useRef<HTMLInputElement>(null)

  const update = useCallback(
    (e: React.FormEvent<HTMLFormElement | HTMLInputElement>) => {
      e.preventDefault()
      if (value && value !== company_job.title) {
        updateTitle(company_job.id, value.trim())
      }
      if (inputRef.current) {
        inputRef.current.blur()
      }
    },
    [value, company_job.id]
  )

  return (
    <form className="w-full basis-1/3" onSubmit={update}>
      <TextInput
        placeholder="Job title"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={update}
        autoFocus={!company_job.title}
        light
        ref={inputRef}
      />
    </form>
  )
}

export default Title
