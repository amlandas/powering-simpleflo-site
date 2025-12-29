import Link from "next/link"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type ProofCardProps = {
  title: string
  children: React.ReactNode
  className?: string
}

export function ProofCard({ title, children, className }: ProofCardProps) {
  return (
    <div className={cn("not-prose rounded-2xl border border-border/70 bg-card/70 p-5", className)}>
      <CardTitle className="text-sm font-semibold text-foreground">
        {title}
      </CardTitle>
      <div className="mt-2 text-sm text-muted-foreground">{children}</div>
    </div>
  )
}

type ToolCardProps = {
  name: string
  tagline: string
  description: string
  bullets: string[]
  ctaLabel: string
  href: string
  iconLabel: string
  className?: string
  style?: React.CSSProperties
}

export function ToolCard({
  name,
  tagline,
  description,
  bullets,
  ctaLabel,
  href,
  iconLabel,
  className,
  style,
}: ToolCardProps) {
  return (
    <Card
      className={cn("soft-border surface flex h-full flex-col", className)}
      style={style}
    >
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full border border-border/60 bg-background text-sm font-semibold uppercase tracking-wide">
              {iconLabel}
            </div>
            <div>
              <CardTitle className="text-xl">{name}</CardTitle>
              <p className="text-sm text-muted-foreground">{tagline}</p>
            </div>
          </div>
          <Badge variant="outline" className="border-border/70 text-xs uppercase tracking-wide">
            Tool
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="mt-auto space-y-6">
        <ul className="space-y-2 text-sm text-muted-foreground">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="mt-1 size-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <Button asChild className="w-full">
          <Link href={href}>{ctaLabel}</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
