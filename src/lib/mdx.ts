import path from "path"
import { readFile } from "fs/promises"

import { compileMDX } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import { visit } from "unist-util-visit"
import { toString } from "mdast-util-to-string"
import Slugger from "github-slugger"
import type { Node } from "unist"

import { mdxComponents } from "@/components/mdx-components"
import { contentMap, ContentKey } from "@/lib/content"

export type TocItem = {
  id: string
  title: string
}

export async function getMdxContent(key: ContentKey) {
  const entry = contentMap[key]
  const filePath = path.join(process.cwd(), "content", entry.file)
  const source = await readFile(filePath, "utf8")
  const toc: TocItem[] = []
  const slugger = new Slugger()

  const remarkCollectHeadings = () => (tree: Node) => {
    slugger.reset()
    visit(tree, "heading", (node) => {
      const depth =
        typeof node === "object" && node && "depth" in node
          ? (node as { depth?: number }).depth
          : undefined
      if (depth !== 2) {
        return
      }
      const title = toString(node)
      if (!title) {
        return
      }
      toc.push({ id: slugger.slug(title), title })
    })
  }

  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkCollectHeadings],
        rehypePlugins: [rehypeSlug],
      },
    },
  })

  return { content, toc }
}
