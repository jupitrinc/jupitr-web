import { Plus } from "lucide-react"
import React, { useState } from "react"
import { talentProfileAction } from "state/talent_profile/talentProfileAction"
import { talentProfileState } from "state/talent_profile/talentProfileState"
import { LightForm } from "ui-library/form/light-form/LightForm"
import { Pill } from "ui-library/pill/Pill"
import { SectionHeader } from "./Sections"

export const JobCategory = () => {
  const { talent_profile } = talentProfileState()
  const job_categories = talent_profile.preferences.job_category

  const [newCategory, setNewCategory] = useState<string>("")
  const { addJobCategory, removeJobCategory } = talentProfileAction()

  const handleAddCategory = (e) => {
    e.preventDefault()
    addJobCategory({ id: "444", name: newCategory })
    setNewCategory("")
  }
  return (
    <>
      <SectionHeader title="Job category" />

      <div className="space-y-10">
        <div>
          <LightForm
            placeHolder="Search ..."
            onChange={(e) => setNewCategory(e.target.value)}
            value={newCategory}
            onSubmit={handleAddCategory}
            onClick={handleAddCategory}
            icon={<Plus />}
          />
        </div>

        <div className="flex flex-row gap-5 flex-wrap">
          {job_categories.map((category) => (
            <Pill
              key={category.id}
              color="important"
              size="base"
              label={category.name}
              variant="outlined"
              onClick={() => removeJobCategory(category)}
            />
          ))}
        </div>
      </div>
    </>
  )
}
