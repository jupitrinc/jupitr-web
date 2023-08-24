import React, { useState } from "react"
import { Plus } from "lucide-react"
import { useCompanyMembersAction } from "state/company_members/useCompanyMembersAction"
import { useUserState } from "state/user/useUserState"
import { LightForm } from "ui-library/form/light-form/LightForm"
import { useCompanyMembersState } from "state/company_members/useCompanyMembersState"
import { CompanyMemberPermissionEnum } from "state/company_member_profile/companyMemberProfile.types"

const InviteMember = () => {
  const { addMember } = useCompanyMembersAction()
  const { loading } = useCompanyMembersState()
  const { user } = useUserState()
  const [email, setEmail] = useState<string>("")

  const sendInvite = async (e) => {
    e.preventDefault()

    if (!user.company_id || !email.trim()) return

    await addMember({
      companyId: user.company_id,
      email: email.trim(),
      permission: CompanyMemberPermissionEnum.read,
    })

    setEmail("")
  }

  return (
    <LightForm
      placeholder="e.g. rafa@company.com"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      onSubmit={sendInvite}
      icon={<Plus />}
      loading={loading}
    />
  )
}

export default InviteMember
