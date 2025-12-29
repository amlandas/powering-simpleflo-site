import * as React from "react"

import { cn } from "@/lib/utils"

export type TocItem = {
  id: string
  title: string
}

type TableOfContentsProps = {
  items: TocItem[]
  className?: string
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  if (!items.length) {
    return null
  }

  return (
    <nav
      aria-label="Table of contents"
      className={cn(
        "not-prose rounded-2xl border border-border/70 bg-card/60 p-5 text-sm text-muted-foreground",
        className
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
        On this page
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="transition hover:text-foreground"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
