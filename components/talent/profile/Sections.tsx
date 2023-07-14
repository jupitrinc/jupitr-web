import React from "react"
import { Card } from "ui-library/card/Card"
import { Select } from "ui-library/form/select/Select"
import { Text } from "ui-library/text/Text"
import { Intro } from "./Intro"
import { SocialLinks } from "./SocialLinks"
import { Skills } from "./Skills"
import { job } from "data/job"

export const Sections: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <Card type="section">
          <Intro />
          <SocialLinks />
          <Select options={job.locations} label="Location" />
        </Card>
      </div>

      <div>
        <Skills />
      </div>
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
