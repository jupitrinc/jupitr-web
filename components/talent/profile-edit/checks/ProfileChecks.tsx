import React from "react"
import { useProfileChecks } from "./useProfileChecks"
import { CheckList } from "ui-library/content/check-list/CheckList"

const ProfileChecks = () => {
  const { checksCompleted, name, socials, skills, projects, introVideo } =
    useProfileChecks()

  if (checksCompleted()) return

  const items = [
    { label: "Name", checked: name() },
    { label: "Intro video", checked: introVideo() },
    { label: "3 skills", checked: skills() },
    { label: "1 project", checked: projects() },
    { label: "Socials", checked: socials() },
  ]

  return (
    <div className="mb-10">
      <CheckList items={items} />
    </div>
  )
}

export default ProfileChecks
