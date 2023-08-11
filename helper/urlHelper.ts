import {
  STORAGE_DOMAIN,
  StorageBucketsEnum,
} from "services/storage/media.types"

export const urlHelper = {
  avatarUrl: (avatar: string) => {
    if (!avatar) return undefined

    if (avatar.includes("google")) {
      return avatar
    } else {
      return `${STORAGE_DOMAIN}/${StorageBucketsEnum.images}/${avatar}`
    }
  },
}
