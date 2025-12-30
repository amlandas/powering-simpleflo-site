import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/utilities",
    "/utilities/kinetiq",
    "/utilities/scientia",
    "/utilities/conduit",
    "/principles",
    "/security",
    "/privacy",
  ]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }))
}
