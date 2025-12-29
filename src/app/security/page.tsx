import { ArticleShell } from "@/components/article-shell"
import { contentMap } from "@/lib/content"
import { buildMetadata } from "@/lib/metadata"
import { getMdxContent } from "@/lib/mdx"

export const metadata = buildMetadata(contentMap.security.metadata)

export default async function SecurityPage() {
  const { content, toc } = await getMdxContent("security")

  return <ArticleShell toc={toc}>{content}</ArticleShell>
}
