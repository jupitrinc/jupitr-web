import { OptimisedImage } from "ui-library/image/Image"
import { AvatarPlaceholder } from "../avatar-placeholder/AvatarPlaceholder"
import { AvatarGroupProps } from "./AvatarGroup.types"

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatars, limit }) => {
  return (
    <div className="flex -space-x-2 overflow-hidden">
      {avatars
        .slice(0, limit ? limit : 5)
        .map((avatar, index) =>
          avatar.photo && index !== 4 ? (
            <OptimisedImage
              key={avatar.id}
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src={avatar.photo}
              alt={avatar.name}
              size={32}
            />
          ) : (
            <AvatarPlaceholder
              key={avatar.id}
              label={avatar.name}
              size={8}
              className="ring-2 ring-white"
            />
          )
        )}

      {avatars.length > (limit ? limit : 5) && (
        <span className="text-gray-600 self-center pl-3 text-xs">
          + {avatars.length - (limit ? limit : 5)}
        </span>
      )}
    </div>
  )
}
