import React, { useState } from "react"
import { Stepper } from "ui-library/stepper/Stepper"
import { Details } from "./details"
import { Skills } from "./skills"

export const ProfileOnboarding = () => {
  const [step, setStep] = useState(1)
  return (
    <div className="grid grid-cols-3">
      <div>
        <Stepper
          clickable
          steps={[
            {
              active: step === 1,
              name: "Details",
              onClick: () => setStep(1),
              step_label: "1",
            },
            {
              active: step === 2,
              name: "Skills",
              onClick: () => setStep(2),
              step_label: "2",
            },
            {
              active: step == 3,
              name: "Filters",
              onClick: () => setStep(3),
              step_label: "3",
            },
          ]}
        />
      </div>
      <div className="col-span-2">
        {step == 1 && <Details />}
        {step == 2 && <Skills />}
      </div>
    </div>
  )
}
