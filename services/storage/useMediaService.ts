import { supabaseClientComponent } from "../_supabase/client"
import {
  AddMediaPayload,
  DownloadMediaPayload,
  MediaPayload,
} from "./media.types"

const useMediaService = () => {
  const uploadMedia = async ({ bucketName, file, filePath }: MediaPayload) => {
    console.log("-> uploadMedia")

    const { data, error } = await supabaseClientComponent.storage
      .from(bucketName)
      .upload(filePath, file)

    return {
      data,
      error,
    }
  }

  const updateMedia = async ({ bucketName, file, filePath }: MediaPayload) => {
    const { data, error } = await supabaseClientComponent.storage
      .from(bucketName)
      .update(filePath, file, { upsert: true })

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

  const addMedia = async ({
    bucketName,
    file,
    filePath,
    type,
  }: AddMediaPayload) => {
    if (type === "upload") {
      const { data, error } = await uploadMedia({ bucketName, file, filePath })
      return { data, error }
    } else {
      const { data, error } = await updateMedia({ bucketName, file, filePath })
      return { data, error }
    }
  }

  return { uploadMedia, updateMedia, addMedia, downloadMedia }
}
export default useMediaService
