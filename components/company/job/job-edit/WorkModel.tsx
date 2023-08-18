import { useMemo } from "react"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { CheckboxGroup } from "ui-library/form/checkbox/checkbox-group/CheckboxGroup"
import { CheckboxProps } from "ui-library/form/checkbox/checkbox/Checkbox.types"
import { Label } from "ui-library/form/label/Label"
import { static_data_job } from "data/job"
import { useArrayState } from "helper/hooks/useDataState"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"

const WorkModel = () => {
  const { company_job } = useCompanyJobState()
  const { updateWorkModel } = useCompanyJobAction()
  const { value: workModels, setValue: setWorkModels } = useArrayState(
    company_job.work_model
  )

  const update = (e) => {
    const { value, checked } = e.target

    if (checked && !workModels.includes(value)) {
      updateWorkModel(company_job.id, [...workModels, value])
    } else if (!checked && workModels.includes(value)) {
      updateWorkModel(company_job.id, [
        ...workModels.filter((model) => model !== value),
      ])
    }
  }

  const items = useMemo(() => {
    const items_array = [] as CheckboxProps[]
    for (const model of static_data_job.work_models) {
      items_array.push({
        label: model,
        name: model,
        value: model,
        checked: workModels && workModels.includes(model) ? true : false,
        onChange: update,
      })
    }
    return items_array
  }, [workModels])

  return (
    <div className="flex flex-col gap-2 justify-center">
      <Label value="Work model" htmlFor="" />
      <div className="flex flex-row gap-5 flex-wrap">
        <CheckboxGroup options={items} />
      </div>
    </div>
  )
}

export default WorkModel
