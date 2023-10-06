import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"

export const config = {
  runtime: "edge",
}

export default async function (request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    // ?title=<title>
    const hasTitle = searchParams.has("title")
    const image = searchParams.get("image")
    const company_name = searchParams.get("company_name")
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "My default title"
    const fontData = await fetch(
      new URL("../../public/fonts/Roboto-Regular.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer())

    return new ImageResponse(
      (
        // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
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

            <div tw=" flex w-[582px] left-[309px] top-[140px] absolute text-gray-600 text-[60px] font-bold ">
              {title}
            </div>
            <div
              style={{
                backgroundImage: "linear-gradient(to right, #FB923C, #FB7185)",
              }}
              tw="left-[700px] top-[435px] text-[30px] font-medium flex focus:outline-none justify-center items-center text-white px-7 pt-3 pb-4 rounded-lg"
            >
              Apply now
            </div>
            <div tw=" flex w-[209px] h-[83px] left-[295px] top-[420px] items-center absolute">
              <div tw="left-[103px] top-[17px] absolute text-gray-600 text-[40px] font-normal ">
                {company_name ? company_name : null}
              </div>
              {image && (
                <img
                  tw="w-[100px] h-[100px] left-0 top-0 absolute"
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
