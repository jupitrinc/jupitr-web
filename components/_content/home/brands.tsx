import {
  ScrollAnimation,
  ScrollAnimationItem,
} from "ui-library/content/scroll-animation/ScrollAnimation"
import { Image } from "ui-library/image/Image"
import { urlHelper } from "helper/urlHelper"
import SectionHeader from "./SectionHeader"

const data_prefix = "content/brands"
const data_images = [
  `${data_prefix}/aws_igqtux.png`,
  `${data_prefix}/meta_ypgner.png`,
  `${data_prefix}/google-meet_o1l9ns.png`,
  `${data_prefix}/tesla_wc29qg.png`,
  `${data_prefix}/apple-music_kynvx1.png`,
  `${data_prefix}/netflix_ke7tmp.png`,
]

const Brands = () => {
  return (
    <div className="flex flex-col gap-20">
      <SectionHeader
        title="Join A-player tech teams"
        subtitle="Find tech jobs that align with your skills and aspirations."
        highlight="A-player"
      />
      <div className="max-w-sm sm:max-w-5xl">
        <ScrollAnimation>
          {data_images.map((image) => (
            <ScrollAnimationItem key={image}>
              <div className="w-20">
                <Image
                  src={urlHelper.cloudinaryImageUrl(image) as string}
                  className="w-20 rounded-md"
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

export default Brands
