import React, { forwardRef, useImperativeHandle, useRef } from "react"
import { ProgressBarProps } from "./ProgressBar.types"
import { progressBarStyles } from "./ProgressBar.styles"

const styles = progressBarStyles

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (progressBar, ref) => {
    const innerRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

    return progressBar.type === "sticky" ? (
      <div className={styles.sticky.container}>
        <div className={styles.sticky.bar}>
          <div
            className={styles.sticky.progress}
            style={{ width: `${progressBar.progress}%` }}
            ref={innerRef}
          ></div>
        </div>
      </div>
    ) : (
      <div className={styles.default.container}>
        <div
          className={styles.default.progress}
          style={{ width: `${progressBar.progress}%` }}
          ref={innerRef}
        ></div>

        {progressBar.threshold && (
          <div
            className={styles.default.threshold_container}
            style={{ width: `${progressBar.threshold}%` }}
          >
            <div className={styles.default.threshold}></div>
          </div>
        )}
      </div>
    )
  }
)
