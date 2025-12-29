import Link from "next/link"

import { Container, Section, Stack } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  title: "Conduit",
  description:
    "Secure, managed connectivity for MCP servers and personal knowledge without setup rabbit holes.",
  path: "/conduit",
})

const bullets = [
  "Managed connector installs and safe configuration for MCP servers",
  "Bring personal knowledge (not just documents): build a usable knowledge layer from your artifacts",
  "AI-ready context delivery: precise, minimal, and relevant - reduces context bloat",
]

export default function ConduitPage() {
  return (
    <Section>
      <Container>
        <Stack size="lg">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold">Conduit (Coming soon)</h1>
            <p className="text-lg text-muted-foreground">
              Secure, managed connectivity for MCP servers and personal
              knowledge - without setup rabbit holes.
            </p>
          </div>
          <Card className="soft-border surface">
            <CardContent className="space-y-6 p-6 text-muted-foreground">
              <p>
                Today, using AI tools effectively often means manually
                installing connectors, wiring MCP servers, and dumping piles of
                documents into a model until it gets confused. Conduit automates
                connector setup as a managed experience and builds a personal
                knowledge layer from your artifacts - so AI tools get precise,
                relevant context instead of bloat.
              </p>
              <ul className="space-y-3">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Button asChild size="lg" className="w-fit">
            <Link href="/tools">Explore tools</Link>
          </Button>
        </Stack>
      </Container>
    </Section>
  )
}
