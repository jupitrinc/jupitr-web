import React, { useState } from "react"
import { Stepper } from "ui-library/stepper/Stepper"
import Details from "./Details"
import Skills from "./Skills"
import Filters from "./Filters"

const ProfileOnboarding = () => {
  const [step, setStep] = useState(1)

  const goNext = () => {
    setStep((prevStep) => (prevStep < 3 ? prevStep + 1 : 3))
  }

  const goBack = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : 1))
  }
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
        {step == 1 && <Details goNext={goNext} />}
        {step == 2 && <Skills goNext={goNext} goBack={goBack} />}
        {step == 3 && <Filters goBack={goBack} />}
      </div>
    </div>
  )
}

export default ProfileOnboarding
