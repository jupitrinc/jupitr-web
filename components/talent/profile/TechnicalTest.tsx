import React, { useMemo } from "react"
import { talentProfileAction } from "state/talent_profile/talentProfileAction"
import { talentProfileState } from "state/talent_profile/talentProfileState"
import { CheckboxGroup } from "ui-library/form/checkbox/checkbox-group/CheckboxGroup"
import { SectionHeader } from "./Sections"
import { CheckboxProps } from "ui-library/form/checkbox/checkbox/Checkbox.types"

const tech_tests = [
  "Take-home challenge",
  "Technical discussion",
  "Pair programming",
  "No tech test",
]

export const TechnicalTest = () => {
  const { talent_profile } = talentProfileState()
  const data = talent_profile.preferences.technical_test

  const { addTechTest, removeTechTest } = talentProfileAction()

  const handleOnChange = (e) => {
    const { value, checked } = e.target

    if (checked) {
      addTechTest(value)
    } else if (!checked) {
      removeTechTest(value)
    }
  }

  const items = useMemo(() => {
    const items_array = [] as CheckboxProps[]
    for (const test of tech_tests) {
      items_array.push({
        label: test,
        name: test,
        value: test,
        checked: data.includes(test) ? true : false,
        onChange: handleOnChange,
      })
    }
    return items_array
  }, [data])

  return (
    <>
      <SectionHeader title="Tech test" />

      <form className="flex flex-row gap-5 flex-wrap">
        <CheckboxGroup items={items} />
      </form>
    </>
  )
}
