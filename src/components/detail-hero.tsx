import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ChipRow, Eyebrow } from "@/components/editorial"

type DetailHeroProps = {
  eyebrow: string
  title: string
  dek: string
  chips: string[]
  ctaLabel: string
  href: string
}

export function DetailHero({ eyebrow, title, dek, chips, ctaLabel, href }: DetailHeroProps) {
  return (
    <div className="reading-width space-y-4">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="text-4xl font-semibold text-foreground md:text-5xl">{title}</h1>
      <p className="dek">{dek}</p>
      <ChipRow items={chips} />
      <Button asChild className="mt-2 rounded-full">
        <Link href={href}>{ctaLabel}</Link>
      </Button>
    </div>
  )
}
