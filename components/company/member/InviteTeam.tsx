import React, { useEffect, useMemo } from "react"
import { Text } from "ui-library/text/Text"
import { Card } from "ui-library/content/card/Card"
import { useCompanyMembersState } from "state/company_members/useCompanyMembersState"
import { useCompanyMembersAction } from "state/company_members/useCompanyMembersAction"
import { useUserState } from "state/user/useUserState"
import { AvatarGroup } from "ui-library/avatar/avatar-group/AvatarGroup"
import { urlHelper } from "helper/urlHelper"
import { Modal } from "ui-library/modal/Modal"
import { useNotification } from "helper/hooks/useNotification"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Divider } from "ui-library/content/divider/Divider"
import { Select } from "ui-library/form/select/Select"
import { CompanyMemberPermissionEnum } from "state/company_member_profile/companyMemberProfile.types"
import { ICompanyMember } from "state/company_members/companyMembers.types"

enum RolesEnum {
  admin = "admin",
  member = "member",
}

const InviteTeam = () => {
  const { user } = useUserState()
  const { notification, hideNotification, showNotification } = useNotification()
  const { getMembers, clearMembers } = useCompanyMembersAction()
  const { company_members } = useCompanyMembersState()

  useEffect(() => {
    if (user.company_id && company_members.length < 1) {
      getMembers(user.company_id)
    }

    return () => {
      clearMembers()
    }
  }, [user.company_id])

  const avatars = useMemo(() => {
    let data = [] as { image_url?: string; size: number }[]

    for (const member of company_members)
      data = [
        ...data,
        { image_url: urlHelper.imageUrl(member.avatar_url), size: 10 },
      ]

    return data
  }, [company_members])

  return (
    <>
      <Card type="linked" onClick={showNotification}>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div className="h-10">
            <AvatarGroup max_number={5} avatars={avatars} />
          </div>

          <Text as="span" size="base">
            Invite team
          </Text>
        </div>
      </Card>

      <Modal open={notification} onClose={hideNotification}>
        <div className="flex flex-col gap-10">
          <Text as="span" size="xl">
            Invite team
          </Text>

          <div className="flex flex-col gap-5">
            {company_members &&
              company_members.map((member) => (
                <MemberCard key={member.user_id} member={member} />
              ))}
          </div>
        </div>
      </Modal>
    </>
  )
}

export default InviteTeam

const MemberCard = ({ member }: { member: ICompanyMember }) => {
  const { user } = useUserState()
  const { updateRole } = useCompanyMembersAction()

  return (
    <>
      <div className="flex flex-row gap-3 justify-between">
        <div className="flex flex-row gap-2 items-center">
          <Avatar image_url={urlHelper.imageUrl(member.avatar_url)} size={10} />
          <Text as="span" size="lg">
            {member.name}
          </Text>
        </div>

        <Select
          placeholder="Role"
          onChange={(e) =>
            updateRole({
              user_id: member.user_id,
              company_id: user.company_id,
              permission:
                JSON.parse(e.target.value) === RolesEnum.admin
                  ? "write"
                  : "read",
            })
          }
          value={
            member.permission === CompanyMemberPermissionEnum.write
              ? RolesEnum.admin
              : RolesEnum.member
          }
          options={[RolesEnum.admin, RolesEnum.member]}
        ></Select>
      </div>
      <Divider />
    </>
  )
}
