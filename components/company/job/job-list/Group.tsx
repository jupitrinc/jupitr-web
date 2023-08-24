import React, { memo } from "react"
import { ICompanyJob } from "state/company_job/companyJob.types"
import { Text } from "ui-library/text/Text"
import ListCard from "./Card"

const Group = memo(
  ({ title, jobs }: { title: string; jobs: ICompanyJob[] }) => {
    const highlight = title === "Open"
    return (
      <div
        className={`flex flex-col gap-5 p-5 relative ${
          highlight && "bg-white rounded-lg"
        }`}
      >
        <Text as="h2" size="sm" align="left">
          {title}
        </Text>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 overflow-x-auto p-1">
          {jobs.map((job) => (
            <ListCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    )
  }
)

Group.displayName = "ListGroup"

export default Group
