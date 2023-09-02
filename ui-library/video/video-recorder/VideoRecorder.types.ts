import { RecordingStatus } from "./video-recorder/useVideoRecorder"

export interface VideoRecorderProps {
  duration: number
  recordLabel?: string
  disabled?: boolean
  onChange: (videoFile: File | null) => void
  getRecordingStatus?: (status: RecordingStatus) => void
}
