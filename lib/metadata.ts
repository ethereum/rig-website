import type { Metadata } from "next"

import {
  IS_PRODUCTION_CONTEXT,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TWITTER,
  SITE_URL,
} from "./constants"

export type CustomMetadata = {
  title?: string
  description?: string
  images?: { url: string; alt: string }[]
  path?: string
}

export const getTitle = (title?: string) =>
  title && title !== SITE_NAME ? `${title} | ${SITE_NAME}` : SITE_NAME

export const defaults = (custom?: CustomMetadata): Metadata => {
  const title = getTitle(custom?.title)
  const description = custom?.description || SITE_DESCRIPTION
  const images = custom?.images || [{ url: "/og-image.png", alt: "RIG logo" }]

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: custom?.path || "/",
      siteName: SITE_NAME,
      title,
      description,
      images,
    },
    twitter: {
      images,
      description,
      card: "summary_large_image",
      site: "@" + SITE_TWITTER,
      title,
    },
    robots: {
      index: IS_PRODUCTION_CONTEXT,
      follow: IS_PRODUCTION_CONTEXT,
    },
  }
}

export const getMetadata = (
  custom?: CustomMetadata,
  overrides?: Partial<Metadata>
): Metadata => ({
  ...defaults(custom),
  ...overrides,
})
