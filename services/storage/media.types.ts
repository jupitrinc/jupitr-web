export interface StoragePayload {
  bucketName: AvailableBucketsTypes
  filePath: string
}
export interface MediaPayload extends StoragePayload {
  file: File
}

export interface DownloadMediaPayload extends StoragePayload {}

export type AvailableBucketsTypes =
  | StorageBucketsEnum.avatars
  | StorageBucketsEnum.images

export enum StorageBucketsEnum {
  avatars = "avatars",
  images = "images",
}

export const STORAGE_DOMAIN = `https://cgbrcxjbovzwarqujqoq.supabase.co/storage/v1/object/public`
