import React from "react"
import { HeadingProps } from "./Heading.types"
import { headingStyles } from "./Heading.styles"

export const Heading: React.FC<HeadingProps> = (props) => {
  const styles = headingStyles
  return (
    <>
      <h1 className={headingStyles.heading}>{props.heading}</h1>
      {props.subHeading && (
        <p className={headingStyles.subHeading}>{props.subHeading}</p>
      )}
    </>
  )
}
