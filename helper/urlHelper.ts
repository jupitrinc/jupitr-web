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

    const filters = "f_auto:video,q_auto/v1"
    return `${VIDEO_CDN_DOMAIN}/${filters}/${video_name}`
  },

  videoPosterUrl: (video_name: string) => {
    if (!video_name) return undefined

    const filters = "so_auto/v1"
    return `${VIDEO_CDN_DOMAIN}/${filters}/${video_name}.jpg`
  },

  websiteUrl: (url: string) => {
    return !url.includes("http") ? `https://${url.trim()}` : url.trim()
  },

  pageUrl: () => {
    return window.location.href
  },
  hostName: () => {
    return !window.location.hostname.includes("localhost")
      ? window.location.hostname
      : `${window.location.hostname}:${window.location.port}`
  },
  protocol: () => {
    return window.location.protocol
  },
  domain: () => {
    return `${urlHelper.protocol() + urlHelper.hostName()}`
  },
}
