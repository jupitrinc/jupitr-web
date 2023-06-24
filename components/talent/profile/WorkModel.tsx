import React, { useMemo } from "react"
import { talentProfileAction } from "state/talent_profile/talentProfileAction"
import { talentProfileState } from "state/talent_profile/talentProfileState"
import { CheckboxGroup } from "ui-library/form/checkbox/checkbox-group/CheckboxGroup"
import { SectionHeader } from "./Sections"
import { CheckboxProps } from "ui-library/form/checkbox/checkbox/Checkbox.types"

const models = ["Remote", "Office", "Hybrid"]

export const WorkModel = () => {
  const { talent_profile } = talentProfileState()
  const work_models = talent_profile.preferences.work_model

  const { addWorkModel, removeWorkModel } = talentProfileAction()

  const handleOnChange = (e) => {
    const { value, checked } = e.target

    if (checked) {
      addWorkModel(value)
    } else if (!checked) {
      removeWorkModel(value)
    }
  }

  const items = useMemo(() => {
    const items_array = [] as CheckboxProps[]
    for (const model of models) {
      items_array.push({
        label: model,
        name: model,
        value: model,
        checked: work_models.includes(model) ? true : false,
        onChange: handleOnChange,
      })
    }
    return items_array
  }, [work_models])

  return (
    <>
      <SectionHeader title="Work model" />

      <form className="flex flex-row gap-5 flex-wrap">
        <CheckboxGroup items={items} />
      </form>
    </>
  )
}
