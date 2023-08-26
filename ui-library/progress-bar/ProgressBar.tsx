import React from "react"
import { ProgressBarProps } from "./ProgressBar.types"
import { progressBarStyles } from "./ProgressBar.styles"

const styles = progressBarStyles

export const ProgressBar: React.FC<ProgressBarProps> = (progressBar) =>
  progressBar.type === "sticky" ? (
    <div className={styles.sticky.container}>
      <div className={styles.sticky.bar}>
        <div
          className={styles.sticky.progress}
          style={{ width: `${progressBar.progress}%` }}
        ></div>
      </div>
    </div>
  ) : (
    <div className={styles.default.container}>
      <div
        className={styles.default.progress}
        style={{ width: `${progressBar.progress}%` }}
      ></div>
    </div>
  )
