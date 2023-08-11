import {
  STORAGE_DOMAIN,
  StorageBucketsEnum,
} from "services/storage/media.types"

export const urlHelper = {
  imageUrl: (image: string) => {
    if (!image) return undefined

    if (image.includes("google")) {
      return image
    } else {
      return `${STORAGE_DOMAIN}/${StorageBucketsEnum.images}/${image}`
    }
  },
}
