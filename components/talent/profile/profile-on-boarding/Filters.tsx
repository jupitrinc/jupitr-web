import React, { useRef } from "react"
import { Heading } from "../../Heading/Heading"
import { Text } from "ui-library/text/Text"
import { Button } from "ui-library/button/Button"
import { Select } from "ui-library/form/select/Select"
import { Ranger } from "ui-library/ranger/Ranger"

const Filters = ({ goBack }) => {
  const formRef = useRef(null)

  const onSubmit = () => {
    if (!formRef.current) return

    const formData = new FormData(formRef.current)
    const formValues = Object.fromEntries(formData.entries())
  }
  return (
    <form ref={formRef}>
      <Heading
        heading="Filters for jobs"
        subHeading="Add the desired filters to your job preferences"
      />
      <div>
        <Select
          label="Location"
          name="location"
          onChange={() => {
            return
          }}
          options={["England", "Portugal", "Remote"]}
        />
        <Select
          label="Work model"
          name="workModel"
          onChange={() => {
            return
          }}
          options={["England", "Portugal", "Remote"]}
        />
      </div>

      <div className="mt-8 mb-4">
        <Text as="h2">Salary range</Text>
        <Ranger
          max={5}
          min={1}
          onChange={() => {
            return
          }}
        />
      </div>

      <Button color="standard" label="Back" onClick={goBack} size="base" />
      <Button
        color="important"
        label="Start your journey"
        onClick={onSubmit}
        size="base"
      />
    </form>
  )
}

export default Filters
