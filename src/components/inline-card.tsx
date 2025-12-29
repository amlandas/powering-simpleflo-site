import Link from "next/link"

import { cn } from "@/lib/utils"

type InlineCardProps = {
  title: string
  description: string
  href: string
  className?: string
}

export function InlineCard({
  title,
  description,
  href,
  className,
}: InlineCardProps) {
  const isExternal = href.startsWith("http")
  const Comp = isExternal ? "a" : Link

  return (
    <Comp
      href={href}
      className={cn(
        "not-prose group my-6 block rounded-2xl border border-border/70 bg-card/60 p-5 transition hover:border-border",
        className
      )}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <div>
        <p className="text-base font-semibold text-foreground">{title}</p>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </Comp>
  )
}
