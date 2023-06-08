import clsx from "clsx"
import { AvatarProps } from "./Avatar.types"
import { avatarStyles } from "./Avatar.styles"
import { stringHelper } from "helper/stringHelper"
import { OptimisedImage } from "ui-library/image/Image"
import { User } from "lucide-react"

export const Avatar: React.FC<AvatarProps> = (avatar) => {
  const styles = avatarStyles
  const { getInitials } = stringHelper

  if (avatar.image_url) {
    return <Photo avatar={avatar} styles={styles} />
  } else if (!getInitials(avatar.name_initials as string)) {
    return <Placeholder avatar={avatar} styles={styles} />
  } else {
    return <NameInitials avatar={avatar} styles={styles} />
  }
}

const Photo = ({ avatar, styles }) => (
  <div className={clsx(styles.container, styles.size(avatar.size))}>
    <OptimisedImage
      className={clsx(styles.image, styles.size(avatar.size))}
      src={avatar.image_url}
      alt={avatar.name_initials || "avatar"}
    />
  </div>
)

const NameInitials = ({ avatar, styles }) => {
  const { getInitials } = stringHelper
  return (
    <div className={clsx(styles.container, styles.size(avatar.size))}>
      <span>{getInitials(avatar.name_initials || "")}</span>
    </div>
  )
}

const Placeholder = ({ avatar, styles }) => (
  <div className={clsx(styles.container, styles.size(avatar.size))}>
    <User className={clsx(styles.icon)} />
  </div>
)
