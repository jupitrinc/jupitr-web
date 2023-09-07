import { useRef, useState } from "react"
import clsx from "clsx"
import { videoPlayerStyles } from "./VideoPlayer.styles"
import { VideoPlayerProps } from "./VideoPlayer.types"
import { Button } from "ui-library/button/Button"
import { Pause, Play } from "lucide-react"
import { ProgressBar } from "ui-library/progress-bar/ProgressBar"

const styles = videoPlayerStyles

export const VideoPlayer: React.FC<VideoPlayerProps> = (video) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [player, setPlayer] = useState({ playing: false, progress: 0 })

  const isPaused = () => videoRef.current?.paused
  const isEnded = () => videoRef.current?.ended

  const togglePlay = () => {
    if (isPaused() || isEnded()) {
      videoRef.current?.play()
      setPlayer({ ...player, playing: true })
    } else {
      videoRef.current?.pause()
      setPlayer({ ...player, playing: false })
    }
  }

  const onTimeUpdate = () => {
    const currentTime = videoRef.current?.currentTime
    const currentDuration = videoRef.current?.duration

    if (currentTime && currentDuration) {
      const progress = (currentTime / currentDuration) * 100
      setPlayer({ ...player, progress: progress })
    }
  }

  const onPause = () => {
    setPlayer({ ...player, playing: false })
  }

  return (
    <div className={styles.container} onClick={togglePlay}>
      <video
        className={styles.player}
        ref={videoRef}
        onTimeUpdate={onTimeUpdate}
        onPause={onPause}
        key={video.src}
      >
        <source src={video.src} />
      </video>
      <PlayButton playing={player.playing} />
      <ProgressBar progress={player.progress} type="sticky" />
    </div>
  )
}

const PlayButton = ({ playing }: { playing: boolean }) => {
  return (
    <div
      className={clsx(
        styles.play_button,
        `${playing ? "opacity-0" : "opacity-100"}`
      )}
    >
      <Button
        icon={
          playing ? <Pause className="h-7 w-7" /> : <Play className="h-7 w-7" />
        }
      />
    </div>
  )
}
