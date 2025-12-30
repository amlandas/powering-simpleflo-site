import Link from "next/link"
import { ChevronDown } from "lucide-react"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow", className)}>{children}</p>
}

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("chip", className)}>{children}</span>
}

export function ChipRow({ items, className }: { items: string[]; className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {items.map((item) => (
        <Chip key={item}>{item}</Chip>
      ))}
    </div>
  )
}

type LeadCardProps = {
  title: string
  paragraphs: string[]
  bullets: string[]
}

export function LeadCard({ title, paragraphs, bullets }: LeadCardProps) {
  return (
    <div className="card-lead">
      <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      <div className="mt-4 space-y-4 text-foreground/80">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <ul className="mt-6 space-y-2 text-sm text-foreground/80">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span className="mt-2 size-1.5 rounded-full bg-foreground/70" aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

type EditorialCardProps = {
  eyebrow?: string
  title: string
  excerpt: string
  chips: string[]
  ctaLabel: string
  href: string
  className?: string
}

export function EditorialCard({
  eyebrow,
  title,
  excerpt,
  chips,
  ctaLabel,
  href,
  className,
}: EditorialCardProps) {
  return (
    <article className={cn("card-quiet flex h-full flex-col", className)}>
      <div className="space-y-3">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-foreground/80">{excerpt}</p>
      </div>
      <ChipRow items={chips} className="mt-5" />
      <Button asChild className="mt-6 w-fit rounded-full">
        <Link href={href}>{ctaLabel}</Link>
      </Button>
    </article>
  )
}

type EvidenceCalloutProps = {
  title: string
  body: string
  className?: string
}

export function EvidenceCallout({ title, body, className }: EvidenceCalloutProps) {
  return (
    <aside className={cn("card-quiet bg-card/60", className)}>
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <p className="mt-3 text-sm text-foreground/80">{body}</p>
    </aside>
  )
}

type FaqItem = {
  question: string
  answer: string
}

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-card/60">
      {items.map((item, index) => (
        <details
          key={item.question}
          className={cn(
            "group px-5 py-4",
            index === 0 ? "" : "border-t border-border/60"
          )}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-foreground">
            {item.question}
            <ChevronDown className="size-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className="mt-3 text-sm text-foreground/80">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
