import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"

export const config = {
  runtime: "edge",
}

export default async function (request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get("title")
    const image = searchParams.get("image")
    const fontData = await fetch(
      new URL("../../public/fonts/Roboto-Regular.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer())

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          tw="bg-gray-100"
        >
          <div tw="flex bg-gray-100">
            <div
              style={{
                backgroundImage: "linear-gradient(to right, #FB923C, #FB7185)",
              }}
              tw="w-[1200px] h-[30px] left-0 top-0 absolute "
            ></div>
            <div tw="flex w-[850px] left-[309px] top-[200px] absolute text-gray-600 text-[65px] font-bold ">
              {title}
            </div>
            <div tw="flex w-[300x] left-0 top-[300px] absolute">
              {image && (
                <img
                  tw="h-[300px] max-w-[600px] left-0 top-0 absolute"
                  alt="company-logo"
                  src={image}
                />
              )}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Roboto",
            data: fontData,
            style: "normal",
          },
        ],
      }
    )
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
