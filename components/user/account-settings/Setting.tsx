import { Bell, Mail, User2 } from "lucide-react"
import React from "react"
import { Button } from "ui-library/button/Button"
import { Text } from "ui-library/text/Text"

interface SettingProps {
  name: string
  icon: string
  onClick: () => void
  button_label: string
}

const Setting = (setting: SettingProps) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-3">
        <SocialIcon link={setting.icon} />
        <Text as="span">{setting.name}</Text>
      </div>
      <Button
        label={setting.button_label}
        onClick={setting.onClick}
        size="xs"
        variant="text"
      />
    </div>
  )
}

const SocialIcon = ({ link }) => {
  const styles = "w-5 h-5 align-middle text-gray-600"
  if (link.includes("email")) {
    return <Mail className={styles} />
  } else if (link.includes("notifications")) {
    return <Bell className={styles} />
  } else {
    return <User2 className={styles} />
  }
}

export default Setting
