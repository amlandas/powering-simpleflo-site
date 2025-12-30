"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { EditorialCard } from "@/components/editorial"

export type ToolIndexItem = {
  title: string
  excerpt: string
  chips: string[]
  ctaLabel: string
  href: string
  categories: Array<"Decision" | "Knowledge" | "Connectivity">
}

const filters = ["All", "Decision", "Knowledge", "Connectivity"] as const

export function ToolsIndex({ items }: { items: ToolIndexItem[] }) {
  const [active, setActive] = React.useState<(typeof filters)[number]>("All")

  const filteredItems = React.useMemo(() => {
    if (active === "All") {
      return items
    }
    return items.filter((item) => item.categories.includes(active))
  }, [active, items])

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = filter === active
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={cn(
                "rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] transition",
                isActive
                  ? "border-foreground bg-foreground text-background"
                  : "border-border/70 text-muted-foreground hover:text-foreground"
              )}
              aria-pressed={isActive}
            >
              {filter}
            </button>
          )
        })}
      </div>
      <div className="editorial-grid">
        {filteredItems.map((item) => (
          <EditorialCard
            key={item.title}
            title={item.title}
            excerpt={item.excerpt}
            chips={item.chips}
            ctaLabel={item.ctaLabel}
            href={item.href}
          />
        ))}
      </div>
    </div>
  )
}
