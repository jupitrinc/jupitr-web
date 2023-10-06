import {
  STORAGE_DOMAIN,
  StorageBucketsEnum,
  VIDEO_CDN_DOMAIN,
} from "services/storage/media.types"

export const urlHelper = {
  isPublicUrl: (pathName: string) => {
    const routes = ["/auth/callback", "/", "/c/signup", "/login/verify"]
    return routes.includes(`${pathName}`)
  },
  isPublicJobRoute: (pathName: string) => {
    if (pathName) {
      const parts = pathName?.split("/")
      return parts[1] === "jobs" && parts.length === 3
    }
  },
  imageUrl: (image: string) => {
    if (!image) return undefined

    if (image.includes("google")) {
      return image
    } else {
      return `${STORAGE_DOMAIN}/${StorageBucketsEnum.images}/${image}`
    }
  },
  ogImageUrl: (title: string, image: string, company_name: string) => {
    if (image && title) {
      return `${urlHelper.domain()}/api/og?title=${encodeURIComponent(
        title
      )}&image=${image}&company_name=${encodeURIComponent(company_name)}`
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
    if (typeof url !== "string") return ""
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
    return `${urlHelper.protocol()}//${urlHelper.hostName()}`
  },
}
