import { Plus } from "lucide-react"
import React, { useState } from "react"
import { useTalentProfileAction } from "state/talent_profile/useTalentProfileAction"
import { useTalentProfileState } from "state/talent_profile/useTalentProfileState"
import { LightForm } from "ui-library/form/light-form/LightForm"
import { Pill } from "ui-library/pill/Pill"
import { SectionHeader } from "./Sections"

export const Industry = () => {
  const { talent_profile } = useTalentProfileState()
  const industries = talent_profile.preferences.industry
  const [newIndustry, setNewIndustry] = useState<string>("")
  const { addIndustry, removeIndustry } = useTalentProfileAction()

  const handleAddIndustry = (e) => {
    e.preventDefault()
    addIndustry(newIndustry)
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
              key={industry}
              color="important"
              size="base"
              variant="outlined"
              label={industry}
              type="clickable"
              onClick={() => removeIndustry(industry)}
            />
          ))}
        </div>
      </div>
    </>
  )
}
