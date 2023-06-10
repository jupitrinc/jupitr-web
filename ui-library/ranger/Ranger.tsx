import React from "react"
import { RangerProps } from "./Ranger.types"
import { progressBarStyles } from "./Ranger.styles"

export const Ranger: React.FC<RangerProps> = (ranger) => {
  const styles = progressBarStyles
  return (
    <input
      type="range"
      value={ranger.value}
      min={ranger.min}
      max={ranger.max}
      onChange={ranger.onChange}
      className={styles.ranger}
    />
  )
}
