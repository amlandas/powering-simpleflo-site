import Link from "next/link"
import { BlogPostMeta } from "@/lib/blog"
import { cn } from "@/lib/utils"

interface BlogCardProps {
    post: BlogPostMeta
    className?: string
}

export function BlogCard({ post, className }: BlogCardProps) {
    return (
        <Link href={`/blog/${post.slug}`} className={cn("group block", className)}>
            <article className="flex flex-col h-full">
                {/* Subtle header area - abstract pattern/color */}
                <div className="h-2 mb-6 rounded-full bg-secondary/50 group-hover:bg-sidebar-accent transition-colors duration-300 w-12" />

                <div className="flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        <span className="text-secondary-foreground">{post.category}</span>
                        {post.date && (
                            <>
                                <span>•</span>
                                <time dateTime={post.date}>{post.date}</time>
                            </>
                        )}
                    </div>

                    <h3 className="font-serif text-2xl leading-tight group-hover:text-primary transition-colors duration-200">
                        {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                    </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/40 flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.readTime}</span>
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        Read more →
                    </span>
                </div>
            </article>
        </Link>
    )
}
