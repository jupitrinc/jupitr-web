import React, { useState, useEffect } from "react"
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
import useAuthStateChanges from "helper/hooks/useAuthStateChanges"

const AccountSettings = () => {
  const { user, error } = useUserState()
  const { settings, activeSetting, modal, settingModal } = useAccountSettings()
  const [email, setEmail] = useState(user.email)
  const [toggleEmailModal, setToggleEmailModal] = useState(false)

  useAuthStateChanges()

  const onEmailChange = (e?) => {
    e && e.preventDefault()
    settingModal[activeSetting].onConfirm(email)
    setToggleEmailModal(true)
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
              <Text as="span" size="xl">
                {settingModal[activeSetting].title}
              </Text>

              <form className="w-full" onSubmit={onEmailChange}>
                <Text as="p">{settingModal[activeSetting].description}</Text>
                {activeSetting === "change_email" && (
                  <>
                    {!toggleEmailModal && (
                      <TextInput
                        placeholder="New email address"
                        value={email}
                        name="new_email"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        light={true}
                        required
                      />
                    )}
                    {toggleEmailModal && error && (
                      <div className="flex flex-col gap-5">
                        <Text as="span" size="base">
                          {error}
                        </Text>
                      </div>
                    )}
                    {toggleEmailModal && !error && (
                      <div className="flex flex-col gap-5">
                        <Text as="span" size="base">
                          We&apos;ve sent a request to change your email. Please
                          check your inbox to confirm the update.
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
                    />
                  </div>
                )}
              </div>
            </div>
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
