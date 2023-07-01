import { videoPlayerStyles } from "./VideoPlayer.styles"
import { VideoPlayerProps } from "./VideoPlayer.types"

export const VideoPlayer: React.FC<VideoPlayerProps> = (player) => {
  const styles = videoPlayerStyles
  return (
    <video className={styles.player} controls={player.controls}>
      <source src={player.src} type="video/mp4" />
    </video>
  )
}
