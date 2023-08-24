import { supabaseClientComponent } from "../_supabase/client"
import {
  DownloadMediaPayload,
  JobMediaPayload,
  MediaPayload,
} from "./media.types"

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

  const uploadJobVideo = async (payload: JobMediaPayload) => {
    const formData = new FormData()
    formData.append("file", payload.file)
    formData.append("job_id", payload.job_id)
    formData.append("company_id", payload.company_id)
    formData.append("user_id", payload.user_id)

    const { data, error } = await supabaseClientComponent.functions.invoke(
      "jobs-video",
      {
        body: FormData,
      }
    )
    if (error) {
      console.error("jobMedia: ", error)
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
    const { data } = supabaseClientComponent.storage
      .from(bucketName)
      .getPublicUrl(filePath)

    return data
  }

  return { uploadMedia, updateMedia, downloadMedia, uploadJobVideo }
}
export default useMediaService
