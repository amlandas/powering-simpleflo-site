import * as React from "react"

import { cn } from "@/lib/utils"

type MarginNoteProps = {
  children: React.ReactNode
  className?: string
}

export function MarginNote({ children, className }: MarginNoteProps) {
  return (
    <aside className={cn("article-rail margin-note not-prose", className)}>
      <div className="note-card hidden md:block lg:hidden">{children}</div>
      <div className="note-card hidden lg:block">{children}</div>
      <details className="note-disclosure md:hidden">
        <summary>Note</summary>
        <div className="note-body">{children}</div>
      </details>
    </aside>
  )
}
