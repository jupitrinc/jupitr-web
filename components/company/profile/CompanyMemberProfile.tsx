import { useStringState } from "helper/hooks/useDataState"
import React from "react"
import { useCompanyMemberProfileAction } from "state/company_member_profile/useCompanyMemberProfileAction"
import { useUserState } from "state/user/useUserState"
import { TextInput } from "ui-library/form/text-input/TextInput"

const CompanyMemberProfile = () => {
  const { user } = useUserState()
  const { value, setValue } = useStringState(user.job_title)
  const { updateJobTitle } = useCompanyMemberProfileAction()

  return (
    <div className="grid grid-cols-1 gap-5">
      <TextInput
        value={value}
        placeholder="Job title"
        name="job-title"
        label="Job title"
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => updateJobTitle(user.id, user.company_id, value)}
      />
    </div>
  )
}

export default CompanyMemberProfile
