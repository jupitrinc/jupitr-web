export interface VideoRecorderProps {
  duration: number
  recordLabel?: string
  onChange: (videoFile: File | null) => void
}
