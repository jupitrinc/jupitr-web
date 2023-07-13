import React from "react"
import { Intro } from "./Intro"
import { SocialLinks } from "./SocialLinks"
import { Skills } from "./Skills"
import { Select } from "ui-library/form/select/Select"
import { Text } from "ui-library/text/Text"
import { job } from "data/job"

export const Sections: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex flex-col gap-10 bg-white rounded-lg p-5 sm:p-10">
        <Intro />
        <SocialLinks />
        <Select options={job.locations} label="Location" />
      </div>
      <Skills />
    </div>
  )
}

export const SectionHeader = ({ title }: { title: string }) => (
  <div className="grid grid-cols-1 gap-5">
    <Text as="p" size="xl">
      {title}
    </Text>
  </div>
)
