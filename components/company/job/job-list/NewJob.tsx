import { useNotification } from "helper/hooks/useNotification"
import React, { useEffect } from "react"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { useUserState } from "state/user/useUserState"
import { Button } from "ui-library/button/Button"
import { Toast } from "ui-library/toast/Toast"

const NewJob = () => {
  const { user } = useUserState()
  const { addJob } = useCompanyJobAction()
  const { loading, error } = useCompanyJobState()
  const { notification, showNotification, hideNotification } = useNotification()

  useEffect(() => {
    if (error) {
      showNotification()
    }
  }, [error])

  const createJob = () => {
    if (!user.company_id) return

    addJob("draft", user.company_id)
  }

  return (
    <>
      <div className="flex justify-end">
        <Button
          label="New job"
          size="sm"
          color="special"
          loading={loading}
          onClick={createJob}
        />
      </div>

      <Toast show={notification} onHide={hideNotification} label={error} />
    </>
  )
}

export default NewJob
