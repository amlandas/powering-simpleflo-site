import { ArticleShell } from "@/components/article-shell"
import { contentMap } from "@/lib/content"
import { buildMetadata } from "@/lib/metadata"
import { getMdxContent } from "@/lib/mdx"

export const metadata = buildMetadata(contentMap.privacy.metadata)

export default async function PrivacyPage() {
  const { content, toc } = await getMdxContent("privacy")

  return <ArticleShell toc={toc}>{content}</ArticleShell>
}
