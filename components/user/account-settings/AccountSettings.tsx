import React from "react"
import { Modal } from "ui-library/modal/Modal"
import { Button } from "ui-library/button/Button"
import { Card } from "ui-library/content/card/Card"
import { Text } from "ui-library/text/Text"
import { Divider } from "ui-library/content/divider/Divider"
import { useAccountSettings } from "./useAccountSettings"
import { SectionHeader } from "ui-library/content/section-header/SectionHeader"

const AccountSettings = () => {
  const { settings, activeSetting, modal, settingModal } = useAccountSettings()
  return (
    <Card type="section">
      <div className="flex flex-col gap-5">
        <SectionHeader title="Account settings" />
        <Divider />

        <div className="flex flex-col gap-5">
          {settings.map((setting) => (
            <Setting key={setting.name} {...setting} />
          ))}
        </div>

        <Modal open={modal} onClose={settingModal.onClose}>
          <div className="flex flex-col gap-5">
            <Text as="span" size="xl">
              {settingModal[activeSetting].title}
            </Text>

            <Text as="p">{settingModal[activeSetting].description}</Text>

            <Divider />

            <div className="flex flex-row justify-between">
              <Button
                label="Cancel"
                onClick={settingModal.onClose}
                variant="text"
              />
              <Button
                label={settingModal[activeSetting].confirm_button_label}
                color={settingModal[activeSetting].confirm_button_variant}
              />
            </div>
          </div>
        </Modal>
      </div>
    </Card>
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
