import {
  STORAGE_DOMAIN,
  StorageBucketsEnum,
  VIDEO_CDN_DOMAIN,
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

  videoUrl: (video_name: string) => {
    if (!video_name) return undefined

    return `${VIDEO_CDN_DOMAIN}/${video_name}`
  },
}
