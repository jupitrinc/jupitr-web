import { useCallback, useState } from "react"
import { Check, Edit } from "lucide-react"
import { Button } from "ui-library/button/Button"
import { Label } from "ui-library/form/label/Label"
import { NumberInput } from "ui-library/form/number-input/NumberInput"
import { Text } from "ui-library/text/Text"
import { numberHelper } from "helper/numberHelper"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { useReactiveState } from "helper/hooks/useReactiveState"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"

export const Salary = () => {
  const { company_job } = useCompanyJobState()
  const { updateSalary } = useCompanyJobAction()

  const { value, setValue } = useReactiveState("", company_job.salary)
  const [editing, setEditing] = useState<boolean>(false)

  const { formatNumber } = numberHelper

  const onChange = useCallback((e) => {
    const { value } = e.target
    const max_salary_length = 7
    value.length <= max_salary_length && setValue(String(value))
  }, [])

  const update = useCallback(
    (
      e:
        | React.FormEvent<HTMLFormElement | HTMLInputElement>
        | React.MouseEvent<Element, MouseEvent>
    ) => {
      e.preventDefault()
      if (value && value !== company_job.salary) {
        updateSalary(company_job.id, value)
      }

      setEditing(false)
    },
    [value, company_job]
  )

  return (
    <form className="flex flex-col gap-3" onSubmit={update}>
      <Label value="Salary" htmlFor="" />

      {editing && (
        <div className="relative">
          <NumberInput
            value={Number(value)}
            onChange={onChange}
            placeholder="Salary"
            onBlur={update}
          />

          <div className="absolute top-1/2 transdiv -translate-y-1/2 right-5">
            <Button
              icon={<Check className="h-5 w-5" />}
              variant="text"
              onClick={update}
            />
          </div>
        </div>
      )}

      {!editing && (
        <div className="flex flex-row gap-3 items-center -mt-3">
          <Text as="span" size="lg">{`£${formatNumber(
            Number(value)
          )}/annum`}</Text>
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

export default Salary
