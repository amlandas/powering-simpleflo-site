import { ArticleShell } from "@/components/article-shell"
import { contentMap } from "@/lib/content"
import { buildMetadata } from "@/lib/metadata"
import { getMdxContent } from "@/lib/mdx"

export const metadata = buildMetadata(contentMap.principles.metadata)

export default async function PrinciplesPage() {
  const { content, toc } = await getMdxContent("principles")

  return <ArticleShell toc={toc}>{content}</ArticleShell>
}
