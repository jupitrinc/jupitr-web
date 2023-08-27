export interface StoragePayload {
  bucketName: AvailableBucketsTypes
  filePath: string
}
export interface MediaPayload extends StoragePayload {
  file: File
}
export interface UploadVideoPayload {
  file: File
  folderPath: string
  fileName: string
}

export interface DownloadMediaPayload extends StoragePayload {}

export type AvailableBucketsTypes =
  | StorageBucketsEnum.images
  | StorageBucketsEnum.videos

export enum StorageBucketsEnum {
  images = "images",
  videos = "videos",
}

export const STORAGE_DOMAIN = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public`
export const VIDEO_CDN_DOMAIN = `https://res.cloudinary.com/dyfg2jhz8/video/upload/f_auto:video,q_auto/v1`
