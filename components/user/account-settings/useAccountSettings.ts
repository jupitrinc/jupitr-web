import { useState } from "react"
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
      description: "",
      onConfirm: () => alert(""),
      confirm_button_label: "Change",
      confirm_button_variant: "standard" as ColorType,
    },
    [SettingsEnum.delete_account]: {
      title: "Delete account",
      description:
        "This action cannot be undone. Are you sure you want to delete your account?",
      onConfirm: () => alert(""),
      confirm_button_label: "Delete",
      confirm_button_variant: "dangerous" as ColorType,
    },
  }

  return {
    modal,
    activeSetting,
    settings,
    settingModal,
  }
}
