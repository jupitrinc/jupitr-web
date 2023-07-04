export interface VideoRecorderProps {
  duration: 15 | 30 | 45 | 60
  getBlobURL: (media_blob_url: string) => string
}

export const VIDEO_FILE_NAME = "jupitr-recording"
