import React, { useMemo, useState } from "react"
import { Check, Edit } from "lucide-react"
import { NumberInput } from "ui-library/form/number-input/NumberInput"
import { Select } from "ui-library/form/select/Select"
import { CheckboxProps } from "ui-library/form/checkbox/checkbox/Checkbox.types"
import { Label } from "ui-library/form/label/Label"
import { CheckboxGroup } from "ui-library/form/checkbox/checkbox-group/CheckboxGroup"
import { numberHelper } from "helper/numberHelper"
import { ICompanyJob } from "state/company_job/companyJob.types"
import { Text } from "ui-library/text/Text"
import { Button } from "ui-library/button/Button"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { Textarea } from "ui-library/form/textarea/Textarea"
import { Card } from "ui-library/content/card/Card"
import { static_data_locations } from "data/location"
import { static_data_job } from "data/job"
import { SectionHeader } from "ui-library/content/section-header/SectionHeader"

export const Details = () => {
  const { company_job } = useCompanyJobState()
  return (
    <Card type="section">
      <Salary salary={company_job.salary} />
      <WorkModel models={company_job.work_model} />
      <Location location={company_job.location} />
    </Card>
  )
}

export const Salary = ({ salary }: { salary: ICompanyJob["salary"] }) => {
  const [editing, setEditing] = useState<boolean>(false)
  const { formatNumber } = numberHelper
  const handleOnChange = (e: { target: { value: string } }) => {
    const { value } = e.target
    const max_salary_length = 7 // £m

    //value.length <= max_salary_length && updateSalary(Number(value))
  }

  return (
    <div className="flex flex-col gap-3">
      <Label value="Salary" htmlFor="" />

      {editing && (
        <div className="relative">
          <NumberInput
            value={salary}
            onChange={handleOnChange}
            placeholder="Salary"
            onBlur={() => setEditing(false)}
          />

          <div className="absolute top-1/2 transform -translate-y-1/2 right-5">
            <Button
              icon={<Check className="h-5 w-5" />}
              onClick={() => setEditing(false)}
              variant="text"
            />
          </div>
        </div>
      )}

      {!editing && (
        <div className="flex flex-row gap-3 items-center -mt-3">
          <Text as="span" size="lg">{`£${formatNumber(salary)}/annum`}</Text>
          <Button
            icon={<Edit className="h-4 w-4" />}
            onClick={() => setEditing(true)}
            variant="text"
          />
        </div>
      )}
    </div>
  )
}

export const WorkModel = ({
  models,
}: {
  models: ICompanyJob["work_model"]
}) => {
  //const { addWorkModel, removeWorkModel } = useTalentProfileAction()

  const handleOnChange = (e) => {
    const { value, checked } = e.target

    if (checked) {
      // add option
    } else if (!checked) {
      // remove option
    }
  }

  const items = useMemo(() => {
    const items_array = [] as CheckboxProps[]
    for (const model of static_data_job.work_models) {
      items_array.push({
        label: model,
        name: model,
        value: model,
        checked: models.includes(model) ? true : false,
        onChange: handleOnChange,
      })
    }
    return items_array
  }, [])

  return (
    <div className="flex flex-col gap-2 justify-center">
      <Label value="Work model" htmlFor="" />
      <div className="flex flex-row gap-5 flex-wrap">
        <CheckboxGroup options={items} />
      </div>
    </div>
  )
}

const Location = ({ location }: { location: ICompanyJob["location"] }) => {
  return <Select options={static_data_locations} label="Location" />
}

export const TalentResponse = () => {
  return (
    <Card type="section">
      <SectionHeader title="Application" />
      <Textarea
        placeholder="E.g Why are you the best person for this job?"
        label="Question"
        name="application_question"
      />
      <Select
        options={static_data_job.video_duration}
        label="Video duration"
        magic_word="seconds"
      />
    </Card>
  )
}
