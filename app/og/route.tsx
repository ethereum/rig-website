import { SITE_URL } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { ImageResponse } from "next/og"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const author = searchParams.get("author")

  // Load Garamond font
  const fontResponse = await fetch(
    new URL("/fonts/EBGaramond-Regular.ttf", SITE_URL)
  )
  const fontData = await fontResponse.arrayBuffer()

  return new ImageResponse(
    (
      <div tw="w-full h-full flex flex-col justify-center items-center font-serif">
        <img
          src={new URL("og-image.png", SITE_URL).toString()}
          alt="RIG logo"
          tw={cn("object-cover w-full", author && "w-2/3")}
        />

        {author && (
          <h1
            tw="text-6xl text-center font-serif text-primary"
            style={{
              fontFamily: "Garamond",
              textShadow:
                "0px 0px 2px white, 0px 0px 2px white, 0px 0px 2px white, 0px 0px 2px white, 0px 0px 2px white",
            }}
          >
            {author}
          </h1>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Garamond",
          data: fontData,
          style: "normal",
        },
      ],
    }
  )
}
