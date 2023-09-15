import React from "react"
import { useUserAction } from "state/user/useUserAction"
import { useUserState } from "state/user/useUserState"
import { Button } from "ui-library/button/Button"
import { Divider } from "ui-library/content/divider/Divider"
import { Modal, useModal } from "ui-library/modal/Modal"
import { Text } from "ui-library/text/Text"

const AccountResume = () => {
  const { user } = useUserState()
  const { modal, showModal, hideModal } = useModal(user && !user.active)
  const { toggleActive } = useUserAction()

  const activateAccount = () => {
    hideModal()
    toggleActive(user.id, user.active)
  }

  return (
    <Modal open={modal} onClose={hideModal}>
      <div className="flex flex-col gap-5">
        <Text as="span" size="xl">
          Account paused
        </Text>

        <Text as="p">Resume your account to continue.</Text>

        <Divider />

        <div className="flex flex-row justify-between">
          <Button label="Cancel" onClick={hideModal} variant="text" />
          <Button label="Resume" onClick={activateAccount} />
        </div>
      </div>
    </Modal>
  )
}

export default AccountResume
