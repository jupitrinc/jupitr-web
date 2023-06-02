import Image from "next/image"
import { ImageProps } from "./Image.types"

export const OptimisedImage: React.FC<ImageProps> = (image) => {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      height={image.size}
      width={image.size}
      className={image.className}
      priority={image.priority}
    />
  )
}
