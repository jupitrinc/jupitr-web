import React, { useCallback, useState } from "react"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { useReactiveState } from "helper/hooks/useReactiveState"
import { Text } from "ui-library/text/Text"
import { Button } from "ui-library/button/Button"
import { Edit } from "lucide-react"
import { Label } from "ui-library/form/label/Label"

const Title = () => {
  const { company_job } = useCompanyJobState()
  const { updateTitle } = useCompanyJobAction()
  const { value, setValue } = useReactiveState("", company_job.title)
  const [editing, setEditing] = useState<boolean>(false)

  const update = useCallback(
    (e: React.FormEvent<HTMLFormElement | HTMLInputElement>) => {
      e.preventDefault()
      if (value && value !== company_job.title) {
        updateTitle(company_job.id, value.trim())
      }
      setEditing(false)
    },
    [value, company_job.id]
  )

  return (
    <form className="basis-1/3 w-full ml-3" onSubmit={update}>
      <Label value="Job title" htmlFor="" />
      {editing && (
        <div className="relative">
          <TextInput
            placeholder="Job title"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={update}
            autoFocus={!company_job.title}
            light
          />
        </div>
      )}

      {!editing && (
        <div className="flex flex-row gap-3 items-center">
          <Text as="span" size="xl2">
            {value}
          </Text>
          <Button
            icon={<Edit className="h-4 w-4" />}
            onClick={() => setEditing(true)}
            variant="text"
          />
        </div>
      )}
    </form>
  )
}

export default Title
