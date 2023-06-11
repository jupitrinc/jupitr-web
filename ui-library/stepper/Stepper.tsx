import React from "react"
import { StepperProps } from "./Stepper.types"
import { stepperStyles } from "./Stepper.styles."
import { Button } from "ui-library/button/Button"
import { Pill } from "ui-library/pill/Pill"

export const Stepper: React.FC<StepperProps> = (props) => {
  const styles = stepperStyles
  return (
    <ol className={styles.container}>
      {props.steps.map((step, idx, arr) => (
        <li
          key={step.name}
          className={idx !== arr.length - 1 ? styles.item : styles.last_item}
        >
          <div className={styles.item_container}>
            {props.clickable ? (
              <Button
                color={step.active ? "important" : "standard"}
                label={
                  step.step_label ? String(step.step_label) : String(idx + 1)
                }
                onClick={step.onClick}
                size="sm"
              />
            ) : (
              <Pill
                color={step.active ? "important" : "standard"}
                label={
                  step.step_label ? String(step.step_label) : String(idx + 1)
                }
                size="sm"
              />
            )}
          </div>
          <span className={styles.name}>{step.name}</span>
        </li>
      ))}
    </ol>
  )
}
