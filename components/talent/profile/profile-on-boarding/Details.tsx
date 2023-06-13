import React, { useRef } from "react"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { Text } from "ui-library/text/Text"
import { Heading } from "../../Heading/Heading"
import { Button } from "ui-library/button/Button"

const Details = ({ goNext }) => {
  const formRef = useRef(null)

  const onSubmit = () => {
    if (!formRef.current) return

    const formData = new FormData(formRef.current)
    const formValues = Object.fromEntries(formData.entries())

    goNext()
  }
  return (
    <form ref={formRef}>
      <Heading heading="Details" subHeading="Tell us a bit about yourself" />
      <div>
        <TextInput name="fullname" label="Full name" />
        <TextInput name="avatar" type="file" label="Profile picture" />
      </div>

      <div className="mt-8 mb-4">
        <Text as="h2">Social media links</Text>
        <TextInput name="linkedin" label="Linkedin profile" />
        <TextInput name="github" label="Github profile" />
      </div>

      <Button color="important" label="Next" onClick={onSubmit} size="base" />
    </form>
  )
}

export default Details
