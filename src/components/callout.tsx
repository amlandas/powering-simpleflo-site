import * as React from "react"

import { cn } from "@/lib/utils"

type CalloutTone = "subtle"

type CalloutProps = {
  tone?: CalloutTone
  title?: string
  className?: string
  children: React.ReactNode
}

export function Callout({
  tone = "subtle",
  title,
  className,
  children,
}: CalloutProps) {
  const toneStyles: Record<CalloutTone, string> = {
    subtle: "border-border/70 bg-card/60",
  }

  return (
    <div
      className={cn(
        "callout not-prose rounded-2xl border px-5 py-4 text-sm text-muted-foreground",
        toneStyles[tone],
        className
      )}
    >
      {title ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
          {title}
        </p>
      ) : null}
      <div className={cn(title ? "mt-2" : null)}>{children}</div>
    </div>
  )
}
