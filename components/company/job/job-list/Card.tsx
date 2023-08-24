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

  return (
    <Card type="linked" onClick={viewJob}>
      <div className="flex flex-col gap-2 group">
        <Text as="span" size="xl">
          {job.title}
        </Text>

        <Text as="span" size="base">
          {job.location?.name}
        </Text>
      </div>
    </Card>
  )
}

export default ListCard
