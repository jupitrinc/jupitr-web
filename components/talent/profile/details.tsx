import React from "react"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { Text } from "ui-library/text/Text"
import { Heading } from "../Heading/Heading"

export const Details = () => {
  return (
    <div>
      <Heading heading="Details" subHeading="Tell us a bit about yourself" />
      <div>
        <TextInput
          value=""
          label="Full name"
          onChange={() => {
            return
          }}
        />
        <TextInput
          value=""
          type="file"
          label="Profile picture"
          onChange={() => {
            return
          }}
        />
      </div>

      <div className="mt-8">
        <Text as="h2">Social media links</Text>
        <TextInput
          value=""
          label="Linkedin profile"
          onChange={() => {
            return
          }}
        />
        <TextInput
          value=""
          label="Github profile"
          onChange={() => {
            return
          }}
        />
      </div>
    </div>
  )
}
