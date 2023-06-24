import { Plus } from "lucide-react"
import React, { useState } from "react"
import { talentProfileAction } from "state/talent_profile/talentProfileAction"
import { talentProfileState } from "state/talent_profile/talentProfileState"
import { LightForm } from "ui-library/form/light-form/LightForm"
import { Pill } from "ui-library/pill/Pill"
import { SectionHeader } from "./Sections"

export const Industry = () => {
  const { talent_profile } = talentProfileState()
  const industries = talent_profile.preferences.industry
  const [newIndustry, setNewIndustry] = useState<string>("")
  const { addIndustry, removeIndustry } = talentProfileAction()

  const handleAddIndustry = (e) => {
    e.preventDefault()
    addIndustry({ id: "444", name: newIndustry })
    setNewIndustry("")
  }

  return (
    <>
      <SectionHeader title="Industry" />

      <div className="space-y-10">
        <div>
          <LightForm
            placeHolder="Search ..."
            onChange={(e) => setNewIndustry(e.target.value)}
            value={newIndustry}
            onSubmit={handleAddIndustry}
            onClick={handleAddIndustry}
            icon={<Plus />}
          />
        </div>

        <div className="flex flex-row gap-5 flex-wrap">
          {industries.map((industry) => (
            <Pill
              key={industry.id}
              color="important"
              size="base"
              variant="outlined"
              label={industry.name}
              onClick={() => removeIndustry(industry)}
            />
          ))}
        </div>
      </div>
    </>
  )
}
