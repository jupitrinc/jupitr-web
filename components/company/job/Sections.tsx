import React from "react"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { Text } from "ui-library/text/Text"
import { Details, TalentResponse } from "./Details"
import { Skills } from "./Skills"
import { Videos } from "./Videos"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { Button } from "ui-library/button/Button"
import { Eye } from "lucide-react"

export const Sections = () => {
  const { company_job } = useCompanyJobState()

  return (
    <div className="grid grid-cols-1 gap-10">
      <div className="flex flex-col md:flex-row gap-5">
        <JobTitle title={company_job.title} />
        <Toolbar />
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <div className="basis-1/3 flex flex-col gap-5">
          <Details />
          <Skills />
        </div>
        <div className="basis-2/3 flex flex-col gap-5">
          <Videos />
          <TalentResponse />
        </div>
      </div>
    </div>
  )
}

const JobTitle = ({ title }: { title: string }) => {
  return (
    <div className="basis-1/3 w-full">
      <TextInput
        placeholder="Job title"
        defaultValue={title}
        autoFocus={!title}
        light
      />
    </div>
  )
}

const Toolbar = () => {
  return (
    <div className="basis-2/3 flex justify-end items-center">
      <div className="flex flex-row gap-3 items-center align-middle">
        <Button
          label="Preview"
          variant="text"
          icon={<Eye className="h-5 w-5" />}
        />
        <div className="w-24">
          <Button label="Publish" color="special" full_width />
        </div>
      </div>
    </div>
  )
}

export const SectionHeader = ({ title }: { title: string }) => (
  <div className="grid grid-cols-1">
    <Text as="p" size="lg">
      {title}
    </Text>
  </div>
)
