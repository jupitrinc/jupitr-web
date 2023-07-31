import {
  STORAGE_DOMAIN,
  StorageBucketsEnum,
} from "services/storage/media.types"

export const urlHelper = {
  avatarUrl: (avatar: string) =>
    avatar
      ? `${STORAGE_DOMAIN}/${StorageBucketsEnum.avatars}/${avatar}`
      : undefined,
}
