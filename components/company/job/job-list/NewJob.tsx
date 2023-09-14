import React from "react"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { useUserState } from "state/user/useUserState"
import { Button } from "ui-library/button/Button"

const NewJob = () => {
  const { user } = useUserState()
  const { addJob } = useCompanyJobAction()
  const { loading } = useCompanyJobState()

  const createJob = () => {
    if (!user.company_id) return

    addJob("draft", user.company_id)
  }

  return (
    <div className="flex justify-end">
      <Button
        label="New job"
        size="sm"
        color="special"
        loading={loading}
        onClick={createJob}
      />
    </div>
  )
}

export default NewJob
