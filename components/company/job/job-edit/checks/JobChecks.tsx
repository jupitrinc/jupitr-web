import React from "react"
import { CheckList } from "ui-library/content/check-list/CheckList"
import { useJobChecks } from "./useJobChecks"

const JobChecks = () => {
  const {
    checksCompleted,
    title,
    salary,
    workModel,
    location,
    skills,
    videos,
  } = useJobChecks()

  if (checksCompleted()) return

  const items = [
    { label: "Title", checked: title() },
    { label: "Salary", checked: salary() },
    { label: "Work model", checked: workModel() },
    { label: "Location", checked: location() },
    { label: "1 Skill", checked: skills() },
    { label: "1 Video", checked: videos() },
  ]

  return (
    <div className="w-full rounded-md bg-gray-200 p-5">
      <CheckList items={items} />
    </div>
  )
}

export default JobChecks
