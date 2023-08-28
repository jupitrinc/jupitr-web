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
import { Toast } from "ui-library/toast/Toast"
import { stringHelper } from "helper/stringHelper"
import MemberCard from "./invite-team/MemberCard"
import InviteMember from "./invite-team/InviteMember"

const InviteTeam = ({ title }: { title: string }) => {
  const { user } = useUserState()
  const { notification, hideNotification, showNotification } = useNotification()
  const { getMembers, clearMembers } = useCompanyMembersAction()
  const { company_members, error } = useCompanyMembersState()
  const { notification: errorMessage, hideNotification: hideError } =
    useNotification(!stringHelper.isEmpty(error))

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
      if (member.name)
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
            <AvatarGroup max_number={3} avatars={avatars} />
          </div>

          <Text as="span" size="base">
            {title}
          </Text>
        </div>
      </Card>

      <Modal open={notification} onClose={hideNotification}>
        <div className="flex flex-col gap-10">
          <Text as="span" size="xl">
            {title}
          </Text>

          <InviteMember />

          <div className="flex flex-col gap-3">
            {company_members &&
              company_members.map(
                (member) =>
                  member.name && (
                    <MemberCard key={member.user_id} member={member} />
                  )
              )}
          </div>
        </div>
      </Modal>

      <Toast onHide={hideError} show={errorMessage} label={error} />
    </>
  )
}

export default InviteTeam
