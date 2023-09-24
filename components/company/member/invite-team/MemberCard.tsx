import React, { useCallback, useMemo } from "react"
import { Text } from "ui-library/text/Text"
import { useCompanyMembersAction } from "state/company_members/useCompanyMembersAction"
import { useUserState } from "state/user/useUserState"
import { urlHelper } from "helper/urlHelper"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Divider } from "ui-library/content/divider/Divider"
import { Select } from "ui-library/form/select/Select"
import { CompanyMemberPermissionEnum } from "state/company_member_profile/companyMemberProfile.types"
import { ICompanyMember } from "state/company_members/companyMembers.types"
import { MenuBar } from "ui-library/menu/menu-bar/MenuBar"
import { useCompanyMembersState } from "state/company_members/useCompanyMembersState"

enum RolesEnum {
  admin = "Admin",
  member = "Member",
}

const MemberCard = ({ member }: { member: ICompanyMember }) => {
  const { user } = useUserState()
  const { updateRole, deleteMember } = useCompanyMembersAction()
  const { loading } = useCompanyMembersState()

  const options = useMemo(
    () => [
      {
        name: "Remove",
        onClick: () => {
          deleteMember({
            company_id: user.company_id,
            user_id: member.user_id,
            member_id: member.member_id,
          })
        },
      },
    ],
    [member, user.id]
  )

  const onUpdateRole = useCallback(
    (e) => {
      updateRole({
        user_id: member.user_id,
        company_id: user.company_id,
        permission:
          JSON.parse(e.target.value) === RolesEnum.admin ? "write" : "read",
      })
    },
    [member, user.id]
  )

  const memberName = useMemo(() => {
    if (member.name) return member.name
    else if (member.user_id === user.id) return "Me"
    else return "Invited"
  }, [member, user.id])

  return (
    <>
      <div className="flex flex-row gap-3 justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <Avatar image_url={urlHelper.imageUrl(member.avatar_url)} size={10} />
          <div className="flex flex-col">
            <Text as="span">{memberName}</Text>
            <Text as="span" size="sm">
              {`${member.email}`}
            </Text>
          </div>
        </div>

        {user.permission === "write" && user.id !== member.user_id && (
          <div className="flex flex-row gap-2 items-center">
            <Select
              placeholder="Role"
              size="sm"
              disabled={loading}
              onChange={onUpdateRole}
              value={
                member.permission === CompanyMemberPermissionEnum.write
                  ? RolesEnum.admin
                  : RolesEnum.member
              }
              options={[RolesEnum.admin, RolesEnum.member]}
            ></Select>
            <MenuBar
              options={options}
              max_number={0}
              variant="text"
              size="xs"
            />
          </div>
        )}
      </div>
      <Divider />
    </>
  )
}

export default MemberCard
