"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChipRow, Eyebrow } from "@/components/editorial"

export type ToolIndexItem = {
  title: string
  eyebrow: string
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
    <div className="reading-width space-y-8">
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
      <div className="space-y-10">
        {filteredItems.map((item, index) => (
          <div key={item.title} className="space-y-10">
            <section className="space-y-4">
              <Eyebrow>{item.eyebrow}</Eyebrow>
              <h2 className="text-2xl font-semibold text-foreground">{item.title}</h2>
              <p className="text-foreground/80">{item.excerpt}</p>
              <ChipRow items={item.chips} />
              <Button asChild className="rounded-full">
                <Link href={item.href}>{item.ctaLabel}</Link>
              </Button>
            </section>
            {index < filteredItems.length - 1 ? (
              <hr className="border-border/60" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
