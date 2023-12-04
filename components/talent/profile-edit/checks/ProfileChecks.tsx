import React from "react"
import { useProfileChecks } from "./useProfileChecks"
import { CheckList } from "ui-library/content/check-list/CheckList"

const ProfileChecks = () => {
  const { checksCompleted, name, socials, skills, location, introVideo } =
    useProfileChecks()

  if (checksCompleted()) return

  const items = [
    { label: "Name", checked: name() },
    { label: "3 skills", checked: skills() },
    { label: "Socials", checked: socials() },
    { label: "Location", checked: location() },
    { label: "Intro video", checked: introVideo() },
  ]

  return (
    <div className="mb-10">
      <CheckList items={items} />
    </div>
  )
}

export default ProfileChecks