import { useEffect, useRef } from "react"
import { StatusMessages, useReactMediaRecorder } from "react-media-recorder"
import { VideoPlayer } from "../video-player/VideoPlayer"
import { Button } from "ui-library/button/Button"
import { Video } from "lucide-react"
import { videoRecorderStyles } from "./VideoRecorder.styles"
import { VIDEO_FILE_NAME, VideoRecorderProps } from "./VideoRecorder.types"
import { Text } from "ui-library/text/Text"
import { useCountDown } from "helper/hooks/useCountdown"

const styles = videoRecorderStyles

export const VideoRecorder: React.FC<VideoRecorderProps> = (recorder) => {
  const blobToFile = (theBlob: Blob, fileName: string): File => {
    return new File([theBlob as Blob], fileName, {
      lastModified: new Date().getTime(),
      type: theBlob.type,
    })
  }

  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    previewStream,
    clearBlobUrl,
  } = useReactMediaRecorder({
    askPermissionOnMount: false,
    video: true,
    onStop: async (_blobUrl, blob) => {
      const file = blobToFile(blob, VIDEO_FILE_NAME)
      console.log(file)
    },
  })

  const record = (duration: VideoRecorderProps["duration"]) => {
    clearBlobUrl()
    startRecording()

    setTimeout(() => {
      stopRecording()
    }, duration * 1000)
  }

  const recordButtonLabel = (status: StatusMessages) => {
    if (status === "recording") return "Stop"
    else return "Reply"
  }

  return (
    <div className={styles.container}>
      {status !== "recording" && mediaBlobUrl ? (
        <VideoPlayer src={mediaBlobUrl} />
      ) : (
        <Preview stream={previewStream} />
      )}

      <div className={styles.toolbar}>
        <Button
          icon={<Video className="h-6 w-6" />}
          onClick={() =>
            status === "recording" ? stopRecording() : record(recorder.duration)
          }
          label={recordButtonLabel(status)}
          variant="text"
          size="base"
          color={status !== "recording" ? "special" : "standard"}
        />

        {status === "recording" && (
          <Countdown duration={recorder.duration} status={status} />
        )}
      </div>
    </div>
  )
}

const Preview = ({ stream }: { stream: MediaStream | null }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

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

const Countdown = ({
  duration,
  status,
}: {
  duration: VideoRecorderProps["duration"]
  status: StatusMessages
}) => {
  const { counter, start, reset } = useCountDown(duration)

  useEffect(() => {
    if (status === "recording") {
      start()
    } else {
      reset()
    }
  }, [status])

  return (
    <Text as="span" size="base">
      {`${counter}`}
    </Text>
  )
}
