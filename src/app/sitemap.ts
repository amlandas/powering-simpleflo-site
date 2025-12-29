import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/tools",
    "/tools/kinetiq",
    "/tools/scientia",
    "/principles",
    "/security",
    "/privacy",
    "/conduit",
  ]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }))
}
