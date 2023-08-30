import { useEffect } from "react"
import { VideoPlayer } from "../video-player/VideoPlayer"
import { Button } from "ui-library/button/Button"
import { Video } from "lucide-react"
import { videoRecorderStyles } from "./VideoRecorder.styles"
import { VideoRecorderProps } from "./VideoRecorder.types"
import {
  RecordingStatus,
  useVideoRecorder,
} from "ui-library/video/video-recorder/video-recorder/useVideoRecorder"
import { useTimeout } from "helper/hooks/useTimeout"
import Preview from "./video-recorder/Preview"
import Countdown from "./video-recorder/Countdown"
import { Text } from "ui-library/text/Text"

const styles = videoRecorderStyles
const default_duration = 30

export const VideoRecorder: React.FC<VideoRecorderProps> = (recorder) => {
  const {
    cameraPermission,
    status,
    streamRef,
    videoRef,
    startRecording,
    stopRecording,
    recording,
    videoFile,
  } = useVideoRecorder()

  const { setRef, clearRef } = useTimeout()

  const record = (duration: VideoRecorderProps["duration"]) => {
    startRecording()

    const timeout = setTimeout(() => {
      stopRecording()
    }, duration * 1000)

    setRef(timeout)
  }

  const stop = () => {
    stopRecording()
    clearRef()
  }

  useEffect(() => {
    recorder.onChange(videoFile)
  }, [videoFile])

  const recordButtonLabel = (status: RecordingStatus) => {
    return status === "recording"
      ? "Stop"
      : recorder.recordLabel
      ? recorder.recordLabel
      : "Start"
  }

  return (
    <div className={styles.container}>
      {status !== "recording" && recording ? (
        <VideoPlayer src={recording as string} />
      ) : (
        <Preview stream={streamRef.current} videoRef={videoRef} />
      )}

      {cameraPermission && (
        <div className={styles.toolbar}>
          <Button
            icon={<Video className="h-6 w-6" />}
            onClick={() =>
              status === "recording"
                ? stop()
                : record(
                    recorder.duration ? recorder.duration : default_duration
                  )
            }
            label={recordButtonLabel(status)}
            size="base"
            variant="outlined"
            disabled={recorder.disabled}
          />

          {status === "recording" && (
            <Countdown
              duration={
                recorder.duration ? recorder.duration : default_duration
              }
              status={status}
            />
          )}
        </div>
      )}

      {!cameraPermission && (
        <Text as="span">
          Unblock browser camera and microphone and try again
        </Text>
      )}
    </div>
  )
}
