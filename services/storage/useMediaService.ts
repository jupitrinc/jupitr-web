import { supabaseClientComponent } from "../_supabase/client"
import { DownloadMediaPayload, MediaPayload } from "./media.types"

const storageUrl = `https://cgbrcxjbovzwarqujqoq.supabase.co/storage/v1/object/public`
const useMediaService = () => {
  const uploadMedia = async ({ bucketName, file, filePath }: MediaPayload) => {
    console.log("-> uploadMedia")

    const { data, error } = await supabaseClientComponent.storage
      .from(bucketName)
      .upload(filePath, file)

    if (data) {
      return {
        data: { url: `${storageUrl}/avatars/${data.path}` },
      }
    }
    if (error) {
      return { error, data: null }
    }
  }

  const updateMedia = async ({ bucketName, file, filePath }: MediaPayload) => {
    const { data, error } = await supabaseClientComponent.storage
      .from(bucketName)
      .update(filePath, file, { upsert: true })
    if (data?.path) {
      return {
        data: { url: `${storageUrl}/avatars/${data.path}` },
      }
    }
    if (error) {
      return error
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
