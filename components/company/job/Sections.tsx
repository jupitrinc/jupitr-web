import React from "react"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { Text } from "ui-library/text/Text"
import { Details, TalentResponse } from "./Details"
import { Skills } from "./Skills"
import { Videos } from "./Videos"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { MenuBar } from "ui-library/menu/menu-bar/MenuBar"
import { Button } from "ui-library/button/Button"
import { useRouter } from "next/router"

export const Sections = () => {
  const { company_job } = useCompanyJobState()

  return (
    <div className="grid grid-cols-1 gap-5">
      <PreviewApplications />

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
  const options = [
    { name: "Preview", onClick: () => alert("") },
    { name: "Share", onClick: () => alert("") },
    { name: "Archive", onClick: () => alert("") },
  ]

  return (
    <div className="basis-2/3 flex flex-row gap-2 items-center justify-end">
      <Button label="Publish" variant="contained" />
      <MenuBar options={options} max_number={1} variant="text" />
    </div>
  )
}

export const PreviewApplications = () => {
  const router = useRouter()
  const { company_job } = useCompanyJobState()

  const viewApplications = (e) => {
    e.stopPropagation()
    router.push(`/c/jobs/${company_job.id}/apps`)
  }
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-between items-center bg-gray-200 p-5 rounded-lg">
      {company_job.applications?.length && (
        <Text as="span" size="sm" align="right">
          {`${company_job.applications?.length} applications`}
        </Text>
      )}
      <Button
        label="View"
        variant="outlined"
        size="xs"
        onClick={viewApplications}
      />
    </div>
  )
}
