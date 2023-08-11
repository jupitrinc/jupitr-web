import { useNotification } from "helper/hooks/useNotification"
import React, { useEffect } from "react"
import { useUserAction } from "state/user/useUserAction"
import { useUserState } from "state/user/useUserState"
import { Button } from "ui-library/button/Button"
import { Divider } from "ui-library/content/divider/Divider"
import { Modal } from "ui-library/modal/Modal"
import { Text } from "ui-library/text/Text"

const AccountDeactivation = () => {
  const { notification, showNotification, hideNotification } = useNotification()
  const { user } = useUserState()
  const { toggleActive } = useUserAction()

  const activateAccount = () => {
    hideNotification()
    toggleActive(user.id, user.active)
  }

  useEffect(() => {
    if (user && !user.active) {
      showNotification()
    }
  }, [])

  return (
    <Modal open={notification} onClose={hideNotification}>
      <div className="flex flex-col gap-5">
        <Text as="span" size="xl">
          Account deactivated
        </Text>

        <Text as="p">Your account is deactivated.</Text>

        <Divider />

        <div className="flex flex-row justify-between">
          <Button label="Cancel" onClick={hideNotification} variant="text" />
          <Button
            label="Reactivate"
            color="important"
            onClick={activateAccount}
          />
        </div>
      </div>
    </Modal>
  )
}

export default AccountDeactivation
