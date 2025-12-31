import fs from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"

import { mdxComponents } from "@/components/mdx-components"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date?: string
  readTime: string
  category: string
  heroImage?: string
  content: React.ReactNode
}

export type BlogPostMeta = Omit<BlogPost, "content">

export async function getBlogPosts(): Promise<BlogPostMeta[]> {
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"))

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "")
      const filePath = path.join(BLOG_DIR, file)
      const source = fs.readFileSync(filePath, "utf8")

      const { frontmatter } = await compileMDX<{
        title: string
        excerpt: string
        date?: string
        readTime: string
        category: string
        heroImage?: string
      }>({
        source,
        options: { parseFrontmatter: true }, // Ensure frontmatter is parsed
      })

      return {
        slug,
        title: frontmatter.title,
        excerpt: frontmatter.excerpt,
        date: frontmatter.date,
        readTime: frontmatter.readTime,
        category: frontmatter.category,
        heroImage: frontmatter.heroImage,
      }
    })
  )

  return posts.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0
    const dateB = b.date ? new Date(b.date).getTime() : 0
    return dateA > dateB ? -1 : 1
  })
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const source = fs.readFileSync(filePath, "utf8")

  const { content, frontmatter } = await compileMDX<{
    title: string
    excerpt: string
    date?: string
    readTime: string
    category: string
    heroImage?: string
  }>({
    source,
    components: mdxComponents,
    options: { parseFrontmatter: true },
  })

  return {
    slug,
    content,
    title: frontmatter.title,
    excerpt: frontmatter.excerpt,
    date: frontmatter.date,
    readTime: frontmatter.readTime,
    category: frontmatter.category,
    heroImage: frontmatter.heroImage,
  }
}

export async function getCategories(): Promise<string[]> {
  const posts = await getBlogPosts()
  const categories = new Set(posts.map((post) => post.category))
  return Array.from(categories)
}
