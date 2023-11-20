import {
  ScrollAnimation,
  ScrollAnimationItem,
} from "ui-library/content/scroll-animation/ScrollAnimation"
import { Image } from "ui-library/image/Image"
import { urlHelper } from "helper/urlHelper"
import SectionHeader from "./SectionHeader"

const data_prefix = "content/partners"
const data_images = [
  `${data_prefix}/c1_aymw3k.png`,
  `${data_prefix}/c2_xonwhs.png`,
  `${data_prefix}/c3_ekt713.png`,
]

const VideoJob = () => {
  return (
    <div className="flex flex-col gap-20">
      <SectionHeader
        title="Video jobs"
        subtitle="Let tech teams talk you through jobs and their company culture."
        highlight="Video"
      />
      <div className="max-w-sm sm:max-w-5xl">
        <ScrollAnimation>
          {data_images.map((image) => (
            <ScrollAnimationItem key={image}>
              <div className="w-60">
                <Image
                  src={urlHelper.cloudinaryImageUrl(image) as string}
                  className="w-60 rounded-md"
                  alt="image"
                />
              </div>
            </ScrollAnimationItem>
          ))}
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default VideoJob
