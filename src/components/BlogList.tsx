"use client"

import { useState } from "react"
import type { BlogPostMeta } from "@/lib/blog"
import { BlogCard } from "./BlogCard"
import { cn } from "@/lib/utils"

interface BlogListProps {
    posts: BlogPostMeta[]
    categories: string[]
}

export function BlogList({ posts, categories }: BlogListProps) {
    const [activeCategory, setActiveCategory] = useState<string>("All")

    const filteredPosts =
        activeCategory === "All"
            ? posts
            : posts.filter((post) => post.category === activeCategory)

    return (
        <div className="space-y-12">
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => setActiveCategory("All")}
                    className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
                        activeCategory === "All"
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background text-muted-foreground border-border/50 hover:border-border hover:text-foreground"
                    )}
                >
                    All
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
                            activeCategory === category
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-background text-muted-foreground border-border/50 hover:border-border hover:text-foreground"
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {filteredPosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>

            {filteredPosts.length === 0 && (
                <div className="py-20 text-center text-muted-foreground">
                    No posts found for this category.
                </div>
            )}
        </div>
    )
}
