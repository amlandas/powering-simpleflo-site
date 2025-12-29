import { ArticleShell } from "@/components/article-shell"
import { contentMap } from "@/lib/content"
import { buildMetadata } from "@/lib/metadata"
import { getMdxContent } from "@/lib/mdx"

export const metadata = buildMetadata(contentMap.library.metadata)

export default async function LibraryPage() {
  const { content, toc } = await getMdxContent("library")

  return <ArticleShell toc={toc}>{content}</ArticleShell>
}
