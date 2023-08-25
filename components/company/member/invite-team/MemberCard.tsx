import React from "react"
import { Text } from "ui-library/text/Text"
import { useCompanyMembersAction } from "state/company_members/useCompanyMembersAction"
import { useUserState } from "state/user/useUserState"
import { urlHelper } from "helper/urlHelper"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { Divider } from "ui-library/content/divider/Divider"
import { Select } from "ui-library/form/select/Select"
import { CompanyMemberPermissionEnum } from "state/company_member_profile/companyMemberProfile.types"
import { ICompanyMember } from "state/company_members/companyMembers.types"

enum RolesEnum {
  admin = "Admin",
  member = "Member",
}

const MemberCard = ({ member }: { member: ICompanyMember }) => {
  const { user } = useUserState()
  const { updateRole } = useCompanyMembersAction()

  return (
    <>
      <div className="flex flex-row gap-3 justify-between">
        <div className="flex flex-row gap-2 items-center">
          <Avatar image_url={urlHelper.imageUrl(member.avatar_url)} size={10} />
          <Text as="span" size="lg">
            {member.name ? member.name : "Invited"}
          </Text>
        </div>

        {user.permission === "write" && user.id !== member.user_id && (
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
        )}
      </div>
      <Divider />
    </>
  )
}

export default MemberCard
