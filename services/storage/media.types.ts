export interface StoragePayload {
  bucketName: AvailableBucketsTypes
  filePath: string
}
export interface MediaPayload extends StoragePayload {
  file: File
}
export interface JobMediaPayload {
  file: File
  company_id: string
  user_id: string
  job_id: string
}

export interface DownloadMediaPayload extends StoragePayload {}

export type AvailableBucketsTypes =
  | StorageBucketsEnum.images
  | StorageBucketsEnum.videos

export enum StorageBucketsEnum {
  images = "images",
  videos = "videos",
}

export const STORAGE_DOMAIN = `https://cgbrcxjbovzwarqujqoq.supabase.co/storage/v1/object/public`
