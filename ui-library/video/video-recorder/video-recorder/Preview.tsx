import { RefObject, useEffect } from "react"
import { videoRecorderStyles } from "../VideoRecorder.styles"

const styles = videoRecorderStyles

const Preview = ({
  stream,
  videoRef,
}: {
  stream: MediaStream | null
  videoRef: RefObject<HTMLVideoElement>
}) => {
  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream
    }
  }, [stream])

  if (!stream) {
    return null
  }
  return (
    <div className={styles.container}>
      <video ref={videoRef} className={styles.previewer} autoPlay muted />
    </div>
  )
}

export default Preview
