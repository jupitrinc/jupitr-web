import React from "react"
import { useCompanyMemberProfileState } from "state/company_member_profile/useCompanyMemberProfileState"
import { TextInput } from "ui-library/form/text-input/TextInput"

export const MemberDetails: React.FC = () => {
  const { company_member_profile } = useCompanyMemberProfileState()
  return (
    <div className="grid grid-cols-1 gap-5">
      <TextInput
        placeholder="Job title"
        name="job-title"
        label="Job title"
        defaultValue={company_member_profile.job_title}
      />
    </div>
  )
}
