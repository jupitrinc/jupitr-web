import React from "react"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { useUserState } from "state/user/useUserState"
import { useNotification } from "helper/hooks/useNotification"
import { Button } from "ui-library/button/Button"
import { Toast } from "ui-library/toast/Toast"
import { stringHelper } from "helper/stringHelper"

const NewJob = () => {
  const { isEmpty } = stringHelper
  const { user } = useUserState()
  const { addJob } = useCompanyJobAction()
  const { loading, error } = useCompanyJobState()
  const { notification, hideNotification } = useNotification(!isEmpty(error))

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
