import { supabaseClientComponent } from "../_supabase/client"
import {
  DownloadMediaPayload,
  MediaPayload,
  UploadVideoPayload,
} from "./media.types"
import axios from "axios"

const mediaService = () => {
  const uploadImage = async ({ bucketName, file, filePath }: MediaPayload) => {
    const { data, error } = await supabaseClientComponent.storage
      .from(bucketName)
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: true,
      })

    if (error) {
      console.error("mediaService -> uploadImage:", error.message)
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
      console.error("mediaService -> updateImage:", error.message)
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
    const signData = await fetch("/api/jobs-video-upload", {
      method: "POST",
      body: JSON.stringify({
        folder: `${process.env.NODE_ENV}/${payload.folderPath}/${payload.fileName}`,
      }),
    }).then((res) => res.json())
    const formData = new FormData()
    formData.append("file", payload.file)
    formData.append("api_key", signData.api_key)
    formData.append("timestamp", signData.timestamp)
    formData.append("signature", signData.signature)
    formData.append("eager", "q_auto")
    formData.append(
      "folder",
      `${process.env.NODE_ENV}/${payload.folderPath}/${payload.fileName}`
    )
    const url =
      "https://api.cloudinary.com/v1_1/" + signData?.cloud_name + "/auto/upload"

    try {
      const { data } = await axios.post(url, formData)
      return {
        data,
      }
    } catch (error) {
      console.error("mediaService -> uploadVideo:", error.message)
      return { error }
    }
  }

  return { uploadImage, updateImage, downloadImage, uploadVideo }
}
export default mediaService
