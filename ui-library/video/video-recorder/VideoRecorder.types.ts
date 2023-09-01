export interface VideoRecorderProps {
  duration: number
  recordLabel?: string
  disabled?: boolean
  onChange: (videoFile: File | null) => void
  toggleIsRecording?: () => void
}
