import React from "react"
import { Button } from "ui-library/button/Button"
import { Text } from "ui-library/text/Text"

interface SettingProps {
  name: string
  onClick: () => void
  button_label: string
}

const Setting = (setting: SettingProps) => {
  return (
    <div className="flex flex-row items-center justify-between">
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

export default Setting
