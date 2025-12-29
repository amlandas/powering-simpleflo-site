import { ArticleShell } from "@/components/article-shell"
import { JsonLd } from "@/components/json-ld"
import { contentMap } from "@/lib/content"
import { buildMetadata } from "@/lib/metadata"
import { getMdxContent } from "@/lib/mdx"
import { siteConfig } from "@/lib/site"

export const metadata = buildMetadata(contentMap.home.metadata)

export default async function HomePage() {
  const { content, toc } = await getMdxContent("home")

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
        }}
      />
      <ArticleShell toc={toc}>{content}</ArticleShell>
    </>
  )
}
