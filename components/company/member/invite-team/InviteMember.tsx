import React, { useState } from "react"
import { Plus } from "lucide-react"
import { useCompanyMembersAction } from "state/company_members/useCompanyMembersAction"
import { useUserState } from "state/user/useUserState"
import { LightForm } from "ui-library/form/light-form/LightForm"
import { useCompanyMembersState } from "state/company_members/useCompanyMembersState"
import { CompanyMemberPermissionEnum } from "state/company_member_profile/companyMemberProfile.types"
import { Label } from "ui-library/form/label/Label"
import { emailHelper } from "helper/emailHelper"

const InviteMember = () => {
  const { addMember } = useCompanyMembersAction()
  const { loading } = useCompanyMembersState()
  const { user } = useUserState()
  const [email, setEmail] = useState<string>("")

  const sendInvite = async (e) => {
    e.preventDefault()

    if (!user.company_id || !email.trim() || !emailHelper.isEmailValid(email))
      return

    await addMember({
      companyId: user.company_id,
      email: email.trim(),
      permission: CompanyMemberPermissionEnum.read,
    })

    setEmail("")
  }

  return (
    <div className="flex flex-col gap-2">
      <Label value="Invite with email" htmlFor="" />
      <LightForm
        placeholder="e.g. rafa@company.com"
        value={email}
        name="invite-member-email"
        onChange={(e) => setEmail(e.target.value)}
        onSubmit={sendInvite}
        type="email"
        icon={<Plus />}
        loading={loading}
      />
    </div>
  )
}

export default InviteMember
