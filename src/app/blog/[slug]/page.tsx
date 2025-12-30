import { notFound } from "next/navigation"
import Link from "next/link"
import { getBlogPost, getBlogPosts } from "@/lib/blog"
import { BlogCard } from "@/components/BlogCard"
import { ArrowLeft } from "lucide-react"

interface BlogPostPageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(props: BlogPostPageProps) {
    const params = await props.params;
    const post = await getBlogPost(params.slug)
    if (!post) return {}
    return {
        title: `${post.title} - Simpleflo`,
        description: post.excerpt,
    }
}

export async function generateStaticParams() {
    const posts = await getBlogPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPostPage(props: BlogPostPageProps) {
    const params = await props.params;
    const post = await getBlogPost(params.slug)

    if (!post) {
        notFound()
    }

    // Fetch all posts to find related ones (simple logic: same category or just recent)
    const allPosts = await getBlogPosts()
    const relatedPosts = allPosts
        .filter((p) => p.slug !== post.slug)
        .slice(0, 3) // Just take next 3 for now

    return (
        <main className="min-h-screen pb-24">
            {/* Article Header */}
            <header className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background border-b border-border/40">
                <div className="container-tight">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>

                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                            <span className="px-3 py-1 rounded-full border border-border bg-background/50">
                                {post.category}
                            </span>
                            <span>•</span>
                            <time>{post.date}</time>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-6 text-balance">
                            {post.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                            {post.excerpt}
                        </p>
                    </div>
                </div>
            </header>

            {/* Article Content */}
            <article className="container-tight py-16">
                <div className="prose prose-lg md:prose-xl dark:prose-invert prose-headings:font-serif prose-headings:font-normal prose-p:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline mx-auto">
                    {post.content}
                </div>
            </article>

            {/* Related Content */}
            {relatedPosts.length > 0 && (
                <section className="section-pad bg-secondary/20 border-t border-border/40">
                    <div className="container-tight">
                        <h2 className="font-serif text-3xl mb-10">Related</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((related) => (
                                <BlogCard key={related.slug} post={related} className="bg-background" />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    )
}
