import React, { useCallback, useState } from "react"
import { Modal } from "ui-library/modal/Modal"
import { Button } from "ui-library/button/Button"
import { Card } from "ui-library/content/card/Card"
import { Text } from "ui-library/text/Text"
import { Divider } from "ui-library/content/divider/Divider"
import { useAccountSettings } from "./useAccountSettings"
import { SectionHeader } from "ui-library/content/section-header/SectionHeader"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { useUserState } from "state/user/useUserState"
import { emailHelper } from "helper/emailHelper"
import { useNotificationAction } from "state/notification/useNotificationAction"
import Setting from "./Setting"
import AccountResume from "../account-deactivation/AccountResume"
import AccountNotifications from "./AccountNotifications"
import { AccountTypeEnum } from "state/user/user.types"

const AccountSettings = () => {
  const { accountType, loading } = useUserState()
  const { settings, activeSetting, modal, settingModal } = useAccountSettings()
  const [email, setEmail] = useState("")
  const { notify } = useNotificationAction()

  const onEmailChange = useCallback(() => {
    if (!email.trim() || emailHelper.isEmailValid(email) === false) {
      notify({ message: "Please provide a valid email", type: "warning" })
    } else {
      settingModal[activeSetting].onConfirm(email)
      setEmail("")
    }
  }, [email])

  const onClose = () => {
    settingModal.onClose()
    setEmail("")
  }

  return (
    <>
      <Card type="section">
        <div className="flex flex-col gap-5">
          <SectionHeader title="Account settings" />
          <Divider />

          <div className="flex flex-col gap-5">
            {settings.map(
              (setting) =>
                !(
                  accountType === AccountTypeEnum.talent &&
                  setting.name === "Notifications"
                ) && <Setting key={setting.name} {...setting} />
            )}
          </div>

          <Modal open={modal} onClose={onClose}>
            <div className="flex flex-col gap-5">
              <Text as="span" size="base">
                {settingModal[activeSetting].title}
              </Text>

              <Text as="p">{settingModal[activeSetting].description}</Text>

              {activeSetting === "change_email" && (
                <form className="w-full" onSubmit={onEmailChange}>
                  <TextInput
                    placeholder="New email address"
                    value={email}
                    name="new_email"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                  />
                </form>
              )}

              {activeSetting === "change_notifications" && (
                <AccountNotifications />
              )}

              <Divider />

              <div className="flex flex-row justify-between">
                <Button
                  label="Cancel"
                  onClick={settingModal.onClose}
                  variant="text"
                />
                {activeSetting === "delete_account" && (
                  <div className="inline-flex gap-4">
                    <Button
                      label={settingModal[activeSetting].pause_button_label}
                      color={settingModal[activeSetting].pause_button_variant}
                      onClick={settingModal[activeSetting].onPause}
                    />
                    <Button
                      label={settingModal[activeSetting].confirm_button_label}
                      color={settingModal[activeSetting].confirm_button_variant}
                      onClick={settingModal[activeSetting].onConfirm}
                      loading={loading}
                    />
                  </div>
                )}
                {activeSetting === "change_email" && (
                  <div className="inline-flex gap-4">
                    <Button
                      label={settingModal[activeSetting].confirm_button_label}
                      color={settingModal[activeSetting].confirm_button_variant}
                      onClick={onEmailChange}
                      loading={loading}
                    />
                  </div>
                )}
              </div>
            </div>
          </Modal>
        </div>
      </Card>
      <AccountResume />
    </>
  )
}

export default AccountSettings
