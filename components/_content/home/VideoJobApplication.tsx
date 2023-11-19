import {
  ScrollAnimation,
  ScrollAnimationItem,
} from "ui-library/content/scroll-animation/ScrollAnimation"
import { Image } from "ui-library/image/Image"
import { urlHelper } from "helper/urlHelper"
import SectionHeader from "./SectionHeader"

const data_prefix = "content/community"
const data_images = [
  `${data_prefix}/t8_v7tidc.png`,
  `${data_prefix}/t2_tdvx2i.png`,
  `${data_prefix}/t1_jde20e.png`,
  `${data_prefix}/t4_bauuhq.png`,
  `${data_prefix}/t6_cmoao4.png`,
]

const VideoJobApplication = () => {
  return (
    <div className="flex flex-col gap-20">
      <SectionHeader
        title="Video job application"
        subtitle="Show off your attitude alongside
          skills. You are more than just your CV."
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

export default VideoJobApplication
