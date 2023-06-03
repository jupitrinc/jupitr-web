import { ImageProps } from "./Image.types"

export const OptimisedImage: React.FC<ImageProps> = (image) => {
  return (
    <img
      src={image.src as string}
      alt={image.alt}
      className={image.className}
    />
  )
}
