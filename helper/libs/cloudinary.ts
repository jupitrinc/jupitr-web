import { Cloudinary } from "@cloudinary/url-gen"

export const cloudName = "dyfg2jhz8"
export const cloudinary = new Cloudinary({
  cloud: { cloudName },
  url: {
    secure: true,
  },
})
