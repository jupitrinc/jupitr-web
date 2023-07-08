import { useRef, useState } from "react"
import clsx from "clsx"
import { videoPlayerStyles } from "./VideoPlayer.styles"
import { VideoPlayerProps } from "./VideoPlayer.types"
import { Button } from "ui-library/button/Button"
import { Pause, Play } from "lucide-react"

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

  return (
    <div className={styles.container} onClick={togglePlay}>
      <video
        className={styles.player}
        ref={videoRef}
        onTimeUpdate={onTimeUpdate}
      >
        <source src={video.src} type="video/mp4" />
      </video>
      <PlayButton playing={player.playing} />
      <ProgressBar progress={player.progress} />
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
          playing ? <Pause className="h-9 w-9" /> : <Play className="h-9 w-9" />
        }
      />
    </div>
  )
}

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className={styles.progress_bar.container}>
      <div className={styles.progress_bar.bar}>
        <div
          className={styles.progress_bar.progress}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}
