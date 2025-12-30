import Link from "next/link"
import { BlogPostMeta } from "@/lib/blog"
import { BlogCard } from "./BlogCard"

interface LatestInsightsProps {
    posts: BlogPostMeta[]
}

export function LatestInsights({ posts }: LatestInsightsProps) {
    if (!posts.length) return null

    return (
        <section className="section-pad border-t border-border/40">
            <div className="container-tight space-y-12">
                <div className="flex items-end justify-between">
                    <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                        Latest Insights
                    </h2>
                    <Link
                        href="/blog"
                        className="hidden md:block text-muted-foreground hover:text-foreground transition-colors pb-1 border-b border-transparent hover:border-foreground/20"
                    >
                        View all articles →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.slice(0, 3).map((post) => (
                        <BlogCard key={post.slug} post={post} className="bg-transparent border-none p-0 shadow-none card-quiet" />
                    ))}
                </div>

                <div className="md:hidden mt-8 text-center pt-8 border-t border-border/40">
                    <Link
                        href="/blog"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        View all articles →
                    </Link>
                </div>
            </div>
        </section>
    )
}
