import React from "react"
import { useRouter } from "next/router"
import { ICompanyJob } from "state/company_job/companyJob.types"
import { Text } from "ui-library/text/Text"
import { Card } from "ui-library/content/card/Card"

const ListCard = ({ job }: { job: ICompanyJob }) => {
  const router = useRouter()

  const viewJob = (e) => {
    e.stopPropagation()
    router.push(`/c/jobs/${job.id}`)
  }

  const location = job.location?.name.split(", ")[0] ?? ""

  return (
    <Card type="linked" onClick={viewJob}>
      <div className="group flex flex-col gap-2">
        <Text as="span" size="xl">
          {job.title ? job.title : "Untitled"}
        </Text>

        {location && (
          <Text as="span" size="sm">
            {location}
          </Text>
        )}
      </div>
    </Card>
  )
}

export default ListCard
