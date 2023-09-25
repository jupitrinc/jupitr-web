import { NextRequest, NextResponse } from "next/server"
import { v2 as cloudinary } from "cloudinary"

const config = cloudinary.config({
  cloud_name: "dyfg2jhz8",
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { folder } = body
    const timestamp = Math.round(new Date().getTime() / 1000)
    const signature = cloudinary.utils.api_sign_request(
      {
        timestamp: timestamp,
        eager: "q_auto",
        folder,
      },
      config.api_secret as string
    )

    return new NextResponse(
      JSON.stringify({
        timestamp,
        signature,
        cloud_name: config.cloud_name,
        api_key: config.api_key,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    )
  } catch (error) {
    return new NextResponse(JSON.stringify({ error, data: null }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    })
  }
}
