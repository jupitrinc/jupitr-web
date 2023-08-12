import { useState } from "react"
import { useUserAction } from "state/user/useUserAction"
import { useUserState } from "state/user/useUserState"
import { ColorType } from "ui-library/_theme/Theme.types"

type SettingsType = "delete_account" | "change_email"
enum SettingsEnum {
  delete_account = "delete_account",
  change_email = "change_email",
}

export const useAccountSettings = () => {
  const [modal, setModal] = useState<boolean>(false)
  const [activeSetting, setActiveSetting] =
    useState<SettingsType>("delete_account")
  const { user } = useUserState()
  const { updateEmail, toggleActive } = useUserAction()

  const settings = [
    {
      name: "Email address",
      button_label: "Change",
      onClick: () => {
        setActiveSetting("change_email")
        setModal(true)
      },
    },
    {
      name: "Account",
      button_label: "Delete",
      onClick: () => {
        setActiveSetting("delete_account")
        setModal(true)
      },
    },
  ]

  const settingModal = {
    onClose: () => {
      setModal(false)
    },
    [SettingsEnum.change_email]: {
      title: "Change email address",
      description: "Enter the new email address.",
      onConfirm: (email) => updateEmail(email),
      confirm_button_label: "Change",
      confirm_button_variant: "standard" as ColorType,
    },
    [SettingsEnum.delete_account]: {
      title: "Delete account",
      description:
        "This action is irreversible. Alternatively, deactivate to hide your profile.",
      onConfirm: () => alert(""),
      confirm_button_label: "Delete",
      confirm_button_variant: "dangerous" as ColorType,
      onDeactivate: () => toggleActive(user.id, user.active),
      deactivate_button_label: "Deactivate",
      deactivate_button_variant: "standard" as ColorType,
    },
  }

  return {
    modal,
    activeSetting,
    settings,
    settingModal,
  }
}
