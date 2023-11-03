import { useCallback, useMemo } from "react"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { CheckboxGroup } from "ui-library/form/checkbox/checkbox-group/CheckboxGroup"
import { CheckboxProps } from "ui-library/form/checkbox/checkbox/Checkbox.types"
import { Label } from "ui-library/form/label/Label"
import { static_data_job } from "data/job"
import { useReactiveState } from "helper/hooks/useReactiveState"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"

const WorkModel = () => {
  const { company_job } = useCompanyJobState()
  const { updateWorkModel } = useCompanyJobAction()
  const { value: workModels } = useReactiveState(
    [],
    company_job.work_model ?? []
  )

  const update = useCallback(
    (e) => {
      const { value, checked } = e.target

      if (checked && !workModels.includes(value)) {
        updateWorkModel(company_job.id, [...workModels, value])
      } else if (!checked && workModels.includes(value)) {
        updateWorkModel(company_job.id, [
          ...workModels.filter((model) => model !== value),
        ])
      }
    },
    [workModels, company_job.id]
  )

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
  }, [workModels, company_job.id])

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
