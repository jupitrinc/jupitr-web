import React from "react"
import { Heading } from "../Heading/Heading"
import { LightForm } from "ui-library/form/light-form/LightForm"
import { Trash2 } from "lucide-react"
import { Button } from "ui-library/button/Button"

export const Skills = () => {
  return (
    <div>
      <Heading
        heading="Skills"
        subHeading="What are the skills you feel more confident about?"
      />

      <LightForm
        icon={<Trash2 />}
        onChange={() => {
          return
        }}
        onSubmit={() => {
          return
        }}
        placeHolder="Skill name"
      />

      <Button
        color="standard"
        label="Add skill"
        onClick={() => {
          return
        }}
        size="base"
      />
    </div>
  )
}
