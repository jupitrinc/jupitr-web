import React, { useState } from "react"
import { Modal } from "ui-library/modal/Modal"
import { Button } from "ui-library/button/Button"
import { Card } from "ui-library/content/card/Card"
import { Text } from "ui-library/text/Text"
import { Divider } from "ui-library/content/divider/Divider"
import { useAccountSettings } from "./useAccountSettings"
import { SectionHeader } from "ui-library/content/section-header/SectionHeader"
import AccountDeactivation from "../account-deactivation/AccountDeactivation"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { useUserState } from "state/user/useUserState"
import { Toast } from "ui-library/toast/Toast"
import { useNotification } from "helper/hooks/useNotification"
import { stringHelper } from "helper/stringHelper"
import { emailHelper } from "helper/emailHelper"

const AccountSettings = () => {
  const { user, error, loading } = useUserState()
  const { settings, activeSetting, modal, settingModal } = useAccountSettings()
  const [email, setEmail] = useState("")
  const { notification, showNotification, hideNotification } = useNotification(
    !stringHelper.isEmpty(error)
  )
  const [toggleEmailModal, setToggleEmailModal] = useState(false)
  const [emailValidationError, setEmailValidationError] = useState("")

  const onEmailChange = () => {
    if (emailHasErrors()) {
      showNotification()
    } else {
      settingModal[activeSetting].onConfirm(email)
      setToggleEmailModal(true)
      setEmail("")
    }
  }

  const emailHasErrors = () => {
    if (!email.trim() || !emailHelper.isEmailValid(email)) {
      setEmailValidationError(
        "Email is not valid. Please, provide a valid email."
      )
      return true
    } else {
      return false
    }
  }

  const onClose = () => {
    settingModal.onClose()
    setToggleEmailModal(false)
    setEmail("")
  }

  return (
    <>
      <Card type="section">
        <div className="flex flex-col gap-5">
          <SectionHeader title="Account settings" />
          <Divider />

          <div className="flex flex-col gap-5">
            {settings.map((setting) => (
              <Setting key={setting.name} {...setting} />
            ))}
          </div>

          <Modal open={modal} onClose={onClose}>
            <div className="flex flex-col gap-5">
              <Text as="span" size="base">
                {settingModal[activeSetting].title}
              </Text>

              <Text as="p">{settingModal[activeSetting].description}</Text>

              <form className="w-full" onSubmit={onEmailChange}>
                {activeSetting === "change_email" && (
                  <>
                    {!toggleEmailModal && (
                      <>
                        <TextInput
                          placeholder="New email address"
                          value={email}
                          name="new_email"
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          required
                        />
                      </>
                    )}

                    {toggleEmailModal && loading && !error && (
                      <div className="flex flex-col gap-5">
                        <Text as="span" size="base">
                          Updating your email.
                        </Text>
                      </div>
                    )}

                    {toggleEmailModal && !loading && !error && (
                      <div className="flex flex-col gap-5">
                        <Text as="span" size="base">
                          Check your inbox and confirm your email update
                          request.
                        </Text>
                      </div>
                    )}
                  </>
                )}
              </form>

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
                    />
                  </div>
                )}
                {activeSetting === "change_email" && (
                  <div className="inline-flex gap-4">
                    <Button
                      label={
                        !toggleEmailModal
                          ? settingModal[activeSetting].confirm_button_label
                          : "Close"
                      }
                      color={settingModal[activeSetting].confirm_button_variant}
                      onClick={() => {
                        !toggleEmailModal ? onEmailChange() : onClose()
                      }}
                      loading={loading}
                    />
                  </div>
                )}
              </div>
            </div>

            <Toast
              show={notification}
              onHide={hideNotification}
              label={emailValidationError ? emailValidationError : error}
            />
          </Modal>
        </div>
      </Card>
      <AccountDeactivation />
    </>
  )
}

export default AccountSettings

interface SettingProps {
  name: string
  onClick: () => void
  button_label: string
}

const Setting = (setting: SettingProps) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <Text as="span">{setting.name}</Text>
      <Button
        label={setting.button_label}
        onClick={setting.onClick}
        size="xs"
        variant="text"
      />
    </div>
  )
}
