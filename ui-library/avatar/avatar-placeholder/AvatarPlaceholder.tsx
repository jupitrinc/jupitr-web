import { UserIcon } from "ui-library/icons/Icons"
import { AvatarPlaceholderProps } from "./AvatarPlaceholder.types"

export const AvatarPlaceholder: React.FC<AvatarPlaceholderProps> = (
  avatarPlaceholder
) => {
  let containerClassName =
    "inline-flex overflow-hidden relative justify-center items-center bg-gray-100 rounded-full text-gray-600"
  containerClassName += avatarPlaceholder.size
    ? ` w-${avatarPlaceholder.size} h-${avatarPlaceholder.size}`
    : " w-10 h-10"

  containerClassName += avatarPlaceholder.className
    ? " " + avatarPlaceholder.className
    : ""

  let iconClassName = "font-medium text-gray-300"
  iconClassName += avatarPlaceholder.size
    ? ` w-${avatarPlaceholder.size} h-${avatarPlaceholder.size}`
    : " w-10 h-10"
  return (
    <div className={containerClassName}>
      {!getInitials(avatarPlaceholder.label) ? (
        <UserIcon className={iconClassName} />
      ) : (
        <span>{getInitials(avatarPlaceholder.label)}</span>
      )}
    </div>
  )
}

const getInitials = function (label: AvatarPlaceholderProps["label"]) {
  if (!label) {
    return ""
  } else {
    const parts = label.split(" ")
    let initials = ""
    for (let i = 0; i < parts.length && i < 2; i++) {
      if (parts[i].length > 0 && parts[i] !== "") {
        initials += parts[i][0]
      }
    }
    return initials.toUpperCase()
  }
}
