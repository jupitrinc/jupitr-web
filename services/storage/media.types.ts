export interface StoragePayload {
  bucketName?: AvailableBucketsTypes
  filePath: string
}
export interface MediaPayload extends StoragePayload {
  file: File
}
export interface DownloadMediaPayload extends StoragePayload {}

export type AvailableBucketsTypes = "avatars"
