import { useState } from "react"
import { useUserAction } from "state/user/useUserAction"
import { useUserState } from "state/user/useUserState"
import { ColorType } from "ui-library/_theme/Theme.types"

type SettingsType = "delete_account" | "change_email" | "change_notifications"
enum SettingsEnum {
  delete_account = "delete_account",
  change_email = "change_email",
  change_notifications = "change_notifications",
}

export const useAccountSettings = () => {
  const { toggleActive, deleteAccount, requestEmailUpdate } = useUserAction()
  const [modal, setModal] = useState<boolean>(false)
  const [activeSetting, setActiveSetting] =
    useState<SettingsType>("delete_account")
  const { user } = useUserState()

  const settings = [
    {
      name: user.email,
      button_label: "Change",
      onClick: () => {
        setActiveSetting("change_email")
        setModal(true)
      },
    },
    {
      name: "Notifications",
      button_label: "Change",
      onClick: () => {
        setActiveSetting("change_notifications")
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
      onConfirm: (email) => requestEmailUpdate(email),
      confirm_button_label: "Change",
      confirm_button_variant: "standard" as ColorType,
    },
    [SettingsEnum.change_notifications]: {
      title: "Change notifications",
      description: "",
      onConfirm: () => {},
      confirm_button_label: "Save",
      confirm_button_variant: "standard" as ColorType,
    },
    [SettingsEnum.delete_account]: {
      title: "Delete account",
      description:
        "This action is irreversible. Alternatively, pause to hide your account.",
      onConfirm: () => deleteAccount(),
      confirm_button_label: "Delete",
      confirm_button_variant: "dangerous" as ColorType,
      onPause: () => toggleActive(user.id, user.active),
      pause_button_label: "Pause",
      pause_button_variant: "standard" as ColorType,
    },
  }

  return {
    modal,
    activeSetting,
    settings,
    settingModal,
  }
}
