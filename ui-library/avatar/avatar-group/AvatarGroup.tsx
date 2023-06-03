import { Avatar } from "../avatar/Avatar"
import { avatarGroupStyles } from "./AvatarGroup.styles"
import { AvatarGroupProps } from "./AvatarGroup.types"

export const AvatarGroup: React.FC<AvatarGroupProps> = (avatarGroup) => {
  const styles = avatarGroupStyles
  return (
    <div className={styles.container}>
      {avatarGroup.avatars
        .slice(0, avatarGroup.max_number)
        .map((avatar, index) => (
          <Avatar
            key={index}
            image_url={avatar.image_url}
            name_initials={avatar.name_initials}
            size={avatar.size}
          />
        ))}

      {avatarGroup.avatars.length > avatarGroup.max_number && (
        <span className={styles.label}>
          + {avatarGroup.avatars.length - avatarGroup.max_number}
        </span>
      )}
    </div>
  )
}
