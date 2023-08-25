import { NextRequest, NextResponse } from "next/server"
import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
  cloud_name: "dyfg2jhz8",
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRET,
})
async function uploadToCloudinary(buffer, public_id) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        resource_type: "video",
        public_id,
        eager: {
          quality: "auto:good", // handle video compression
        },
        eager_async: true, // this will handle the video compression on background in cloudinary servers
      },
      (error, result) => {
        if (error) {
          reject(error)
        } else {
          resolve(result)
        }
      }
    )

    uploadStream.end(buffer)
  })
}
export async function POST(request: NextRequest) {
  const data = await request.formData()
  const file: File | null = data.get("file") as unknown as File
  const public_id: string = data.get("public_id") as string
  if (!file) {
    return NextResponse.json({ success: false })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  try {
    const cloudinaryResponse = await uploadToCloudinary(buffer, public_id)

    return new NextResponse(
      JSON.stringify({ error: null, data: cloudinaryResponse }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    )
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error)

    return new NextResponse(JSON.stringify({ error, data: null }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    })
  }
}
