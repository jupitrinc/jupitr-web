import React from "react"
import { Select } from "ui-library/form/select/Select"
import { static_data_locations } from "data/location"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"

const Location = () => {
  const { company_job } = useCompanyJobState()
  const { updateLocation } = useCompanyJobAction()

  const update = (e) => {
    const location = JSON.parse(e.target.value)
    if (!location) return
    updateLocation(company_job.id, location)
  }

  return (
    <Select
      options={static_data_locations}
      label="Location"
      placeholder="Select"
      value={company_job.location}
      onChange={update}
    />
  )
}

export default Location
