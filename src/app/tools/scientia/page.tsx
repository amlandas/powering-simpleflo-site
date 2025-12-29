import { ArticleShell } from "@/components/article-shell"
import { contentMap } from "@/lib/content"
import { buildMetadata } from "@/lib/metadata"
import { getMdxContent } from "@/lib/mdx"

export const metadata = buildMetadata(contentMap.scientia.metadata)

export default async function ScientiaPage() {
  const { content, toc } = await getMdxContent("scientia")

  return <ArticleShell toc={toc}>{content}</ArticleShell>
}
