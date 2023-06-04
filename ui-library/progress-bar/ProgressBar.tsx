import React from "react"
import { ProgressBarProps } from "./ProgressBar.types"
import { progressBarStyles } from "./ProgressBar.styles"

export const ProgressBar: React.FC<ProgressBarProps> = (progressBar) => {
  const styles = progressBarStyles
  return (
    <div className={styles.container}>
      <div
        className={styles.progress}
        style={{ width: `${progressBar.value}%` }}
      ></div>
    </div>
  )
}
