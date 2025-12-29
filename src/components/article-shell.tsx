import * as React from "react"

import { Container, Section } from "@/components/layout"
import { TableOfContents, TocItem } from "@/components/table-of-contents"
import { cn } from "@/lib/utils"

type ArticleShellProps = {
  toc?: TocItem[]
  children: React.ReactNode
  className?: string
}

export function ArticleShell({ toc = [], children, className }: ArticleShellProps) {
  const shouldShowToc = toc.length >= 4

  return (
    <Section className="pt-10 md:pt-16">
      <Container>
        <article
          className={cn(
            "article-grid prose max-w-none md:prose-lg",
            "prose-headings:text-foreground prose-h1:text-4xl md:prose-h1:text-5xl prose-h1:leading-tight",
            "prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12",
            "prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-8",
            "prose-p:text-foreground/85 prose-p:leading-relaxed",
            "prose-li:text-foreground/85",
            "prose-strong:text-foreground",
            "prose-a:text-foreground prose-a:underline prose-a:decoration-border/70",
            "prose-hr:border-border/70",
            "prose-blockquote:text-foreground/80 prose-blockquote:border-border/70",
            className
          )}
        >
          {shouldShowToc ? (
            <>
              <TableOfContents items={toc} className="lg:hidden" />
              <TableOfContents items={toc} className="article-rail hidden lg:block" />
            </>
          ) : null}
          {children}
        </article>
      </Container>
    </Section>
  )
}
