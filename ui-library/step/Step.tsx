import React from "react"
import { StepProps } from "./Step.types"
import { stepStyles } from "./Step.styles."

export const Step: React.FC<StepProps> = (step) => {
  const styles = stepStyles
  return (
    <li
      className={
        step.active ? styles.active.container : styles.default.container
      }
    >
      <span
        className={step.active ? styles.active.number : styles.default.number}
      >
        {step.number}
      </span>
      <span>
        <h3
          className={step.active ? styles.active.label : styles.default.label}
        >
          {step.label}
        </h3>
      </span>
    </li>
  )
}
