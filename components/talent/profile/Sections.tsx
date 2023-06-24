import React, { useState } from "react"
import { Button } from "ui-library/button/Button"
import { Intro } from "./Intro"
import { SocialLinks } from "./SocialLinks"
import { Skills } from "./Skills"
import { Menu } from "lucide-react"
import { JobCategory } from "./JobCategory"
import { Industry } from "./Industry"
import { WorkModel } from "./WorkModel"
import { Location } from "./Location"
import { TechnicalTest } from "./TechnicalTest"
import { VisaSponsorship } from "./VisaSponsorship"
import { Divider } from "ui-library/divider/Divider"
import { Text } from "ui-library/text/Text"
import { Salary } from "./Salary"

enum SectionEnum {
  profile = "Profile",
  job_category = "Job category",
  industry = "Industry",
  skills = "Skills",
  work_model = "Work model",
  location = "Location",
  salary = "Salary",
  technical_test = "Technical test",
  visa_sponsorship = "Visa sponsorship",
}

const sections = [
  SectionEnum.profile,
  SectionEnum.job_category,
  SectionEnum.industry,
  SectionEnum.skills,
  SectionEnum.work_model,
  SectionEnum.location,
  SectionEnum.salary,
  SectionEnum.technical_test,
  SectionEnum.visa_sponsorship,
]

export const Sections: React.FC = () => {
  const [sidebar, SetSidebar] = useState<boolean>(true)
  const [activeFilter, setActiveFilter] = useState<string>(sections[0])

  return (
    <div className="flex flex-row gap-5">
      <aside className={`basis-1/5 bg-gray-100 rounded-lg fixed z-10`}>
        <div className="flex justify-center">
          <Button
            onClick={() => SetSidebar(!sidebar)}
            icon={<Menu className="h-5 w-5" />}
          />
        </div>

        {sidebar && (
          <div className="block p-5 space-y-5 ease-in-out duration-300">
            {sections.map((section) => (
              <Button
                key={section}
                label={section}
                variant={activeFilter === section ? "outlined" : "text"}
                color={activeFilter === section ? "important" : "standard"}
                size="sm"
                onClick={() => setActiveFilter(section)}
                full_width
              />
            ))}
          </div>
        )}
      </aside>

      <div className="sm:basis-2/4 space-y-5 mx-auto w-full">
        {activeFilter === SectionEnum.profile && (
          <>
            <Intro />
            <SocialLinks />
          </>
        )}

        {activeFilter === SectionEnum.skills && <Skills />}
        {activeFilter === SectionEnum.job_category && <JobCategory />}
        {activeFilter === SectionEnum.industry && <Industry />}
        {activeFilter === SectionEnum.work_model && <WorkModel />}
        {activeFilter === SectionEnum.location && <Location />}
        {activeFilter === SectionEnum.salary && <Salary />}
        {activeFilter === SectionEnum.technical_test && <TechnicalTest />}
        {activeFilter === SectionEnum.visa_sponsorship && <VisaSponsorship />}
      </div>
    </div>
  )
}

export const SectionHeader = ({ title }: { title: string }) => (
  <div className="grid grid-cols-3 gap-4 items-center text-center mb-16">
    <Divider />
    <Text as="p" size="xl">
      {title}
    </Text>
    <Divider />
  </div>
)
