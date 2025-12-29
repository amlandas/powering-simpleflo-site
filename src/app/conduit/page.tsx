import { ArticleShell } from "@/components/article-shell"
import { contentMap } from "@/lib/content"
import { buildMetadata } from "@/lib/metadata"
import { getMdxContent } from "@/lib/mdx"

export const metadata = buildMetadata(contentMap.conduit.metadata)

export default async function ConduitPage() {
  const { content, toc } = await getMdxContent("conduit")

  return <ArticleShell toc={toc}>{content}</ArticleShell>
}
