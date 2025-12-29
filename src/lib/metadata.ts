import type { Metadata } from "next"

import { siteConfig } from "@/lib/site"

type MetadataInput = {
  title: string
  description: string
  path: string
}

export function buildMetadata({
  title,
  description,
  path,
}: MetadataInput): Metadata {
  const url = new URL(path, siteConfig.url)

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url.toString(),
    },
    openGraph: {
      title,
      description,
      url: url.toString(),
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}
