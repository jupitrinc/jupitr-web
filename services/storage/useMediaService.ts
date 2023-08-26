import { supabaseClientComponent } from "../_supabase/client"
import {
  DownloadMediaPayload,
  MediaPayload,
  UploadVideoPayload,
} from "./media.types"

const useMediaService = () => {
  const uploadImage = async ({ bucketName, file, filePath }: MediaPayload) => {
    const { data, error } = await supabaseClientComponent.storage
      .from(bucketName)
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: true,
      })

    if (error) {
      console.error("uploadImage: ", error)
    }

    return {
      data,
      error,
    }
  }

  const updateImage = async ({ bucketName, file, filePath }: MediaPayload) => {
    const { data, error } = await supabaseClientComponent.storage
      .from(bucketName)
      .update(filePath, file, { upsert: true })

    if (error) {
      console.error("updateImage: ", error)
    }

    return {
      data,
      error,
    }
  }

  const downloadImage = async ({
    bucketName,
    filePath,
  }: DownloadMediaPayload) => {
    const { data } = supabaseClientComponent.storage
      .from(bucketName)
      .getPublicUrl(filePath)

    return data
  }

  const uploadVideo = async (payload: UploadVideoPayload) => {
    const formData = new FormData()
    formData.append("file", payload.file)
    formData.append("public_id", `${payload.folderPath}/${payload.fileName}`)
    const { data, error } = await fetch("/api/jobs-video-upload", {
      method: "POST",
      body: formData,
    }).then((r) => r.json())

    return {
      data,
      error,
    }
  }

  return { uploadImage, updateImage, downloadImage, uploadVideo }
}
export default useMediaService
