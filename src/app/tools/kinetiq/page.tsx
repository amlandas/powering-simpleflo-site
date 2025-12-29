import { ArticleShell } from "@/components/article-shell"
import { contentMap } from "@/lib/content"
import { buildMetadata } from "@/lib/metadata"
import { getMdxContent } from "@/lib/mdx"

export const metadata = buildMetadata(contentMap.kinetiq.metadata)

export default async function KinetiqPage() {
  const { content, toc } = await getMdxContent("kinetiq")

  return <ArticleShell toc={toc}>{content}</ArticleShell>
}
