import { supabaseClientComponent } from "../_supabase/client"
import {
  DownloadMediaPayload,
  JobMediaPayload,
  MediaPayload,
} from "./media.types"
import { storageFolderHelper } from "../../helper/storageFolderHelper"

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
    const folderPath =
      storageFolderHelper.companyJobApplicantsVideoFolder(payload)
    const newFileName = payload.user_id
    const formData = new FormData()
    formData.append("file", payload.file)
    formData.append("public_id", `${folderPath}/${newFileName}`)
    const { data, error } = await fetch("/api/jobs-video-upload", {
      method: "POST",
      body: formData,
    }).then((r) => r.json())

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
