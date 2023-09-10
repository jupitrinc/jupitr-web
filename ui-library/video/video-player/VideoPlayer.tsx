import { useEffect, useRef, useState } from "react"
import clsx from "clsx"
import { videoPlayerStyles } from "./VideoPlayer.styles"
import { VideoPlayerProps } from "./VideoPlayer.types"
import { Button } from "ui-library/button/Button"
import { Pause, Play } from "lucide-react"
import { ProgressBar } from "ui-library/progress-bar/ProgressBar"

const styles = videoPlayerStyles

export const VideoPlayer: React.FC<VideoPlayerProps> = (video) => {
  const playerRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState<boolean>(false)

  const isPaused = () => playerRef.current?.paused
  const isEnded = () => playerRef.current?.ended

  const togglePlay = () => {
    if (isPaused() || isEnded()) {
      playerRef.current?.play()
      setPlaying(true)
    } else {
      playerRef.current?.pause()
      setPlaying(false)
    }
  }

  useEffect(() => {
    const onTimeUpdate = () => {
      const currentTime = playerRef.current?.currentTime
      const currentDuration = playerRef.current?.duration

      if (currentTime && currentDuration) {
        const progress = (currentTime / currentDuration) * 100
        progressRef.current!.style.width = `${progress}%`
      }
    }

    playerRef.current?.addEventListener("timeupdate", onTimeUpdate)
    return () =>
      playerRef.current?.removeEventListener("timeupdate", onTimeUpdate)
  }, [playerRef.current])

  useEffect(() => {
    if (progressRef.current) progressRef.current.style.width = `0%`
  }, [video])

  return (
    <div className={styles.container} onClick={togglePlay}>
      <video
        poster={video.poster}
        className={styles.player}
        ref={playerRef}
        onPause={() => setPlaying(false)}
        key={video.src}
      >
        <source src={video.src} />
      </video>
      <PlayButton playing={playing} />
      <ProgressBar type="sticky" progress={0} ref={progressRef} />
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
