import { getBlogPosts, getCategories } from "@/lib/blog"
import { BlogList } from "@/components/BlogList"

export const metadata = {
    title: "Blog - Simpleflo",
    description: "Insights on AI tools, calm productivity, and software design principles.",
}

export default async function BlogIndexPage() {
    const posts = await getBlogPosts()
    const categories = await getCategories()

    return (
        <main>
            <section className="section-pad pt-32 pb-12">
                <div className="container-tight">
                    <div className="max-w-xl mb-16">
                        <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
                            Insights
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Notes on building calmer workflows.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <div key={post.slug} className="group">
                                <a href={`/blog/${post.slug}`} className="block space-y-3">
                                    {post.heroImage ? (
                                        <div className="aspect-[3/2] w-full rounded-md overflow-hidden bg-secondary/50">
                                            <img
                                                src={post.heroImage}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                    ) : (
                                        <div className="aspect-[3/2] w-full rounded-md bg-secondary/50 group-hover:bg-secondary/70 transition-colors" />
                                    )}
                                    <div className="space-y-1">
                                        <h3 className="font-semibold text-lg leading-snug group-hover:underline decoration-1 underline-offset-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
