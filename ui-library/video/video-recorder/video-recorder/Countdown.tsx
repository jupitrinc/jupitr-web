import { useEffect } from "react"
import { Text } from "ui-library/text/Text"
import { useCountDown } from "helper/hooks/useCountdown"
import { RecordingStatus } from "ui-library/video/video-recorder/video-recorder/useVideoRecorder"
import { VideoRecorderProps } from "../VideoRecorder.types"

const Countdown = ({
  duration,
  status,
}: {
  duration: VideoRecorderProps["duration"]
  status: RecordingStatus
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

export default Countdown
