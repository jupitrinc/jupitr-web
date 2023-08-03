import { supabaseClientComponent } from "../_supabase/client"
import { DownloadMediaPayload, MediaPayload } from "./media.types"

const useMediaService = () => {
  const uploadMedia = async ({ bucketName, file, filePath }: MediaPayload) => {
    const { data, error } = await supabaseClientComponent.storage
      .from(bucketName)
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: true,
      })

    if (error) {
      console.error("uploadMedia: ", error)
    }

    return {
      data,
      error,
    }
  }

  const updateMedia = async ({ bucketName, file, filePath }: MediaPayload) => {
    const { data, error } = await supabaseClientComponent.storage
      .from(bucketName)
      .update(filePath, file, { upsert: true })

    if (error) {
      console.error("updateMedia: ", error)
    }

    return {
      data,
      error,
    }
  }

  const downloadMedia = async ({
    bucketName,
    filePath,
  }: DownloadMediaPayload) => {
    const { data } = await supabaseClientComponent.storage
      .from(bucketName)
      .getPublicUrl(filePath)

    return data
  }

  return { uploadMedia, updateMedia, downloadMedia }
}
export default useMediaService
