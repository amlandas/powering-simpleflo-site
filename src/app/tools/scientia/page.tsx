import Link from "next/link"

import { JsonLd } from "@/components/json-ld"
import { Container, Section, Stack } from "@/components/layout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildMetadata } from "@/lib/metadata"
import { siteConfig } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Scientia",
  description:
    "A research assistant that helps you explore your sources and ask better questions with traceable answers.",
  path: "/tools/scientia",
})

const proofChips = [
  "Traceable answers",
  "A/B experimentation",
  "Graph-based exploration",
]

export default function ScientiaPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Scientia",
          description:
            "A research assistant that helps you explore your sources and ask better questions with traceable answers.",
          applicationCategory: "ProductivityApplication",
          operatingSystem: "Web",
          url: `${siteConfig.url}/tools/scientia`,
        }}
      />
      <Section>
        <Container>
          <Stack size="lg">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Knowledge Explorer
              </p>
              <h1 className="text-4xl font-semibold">Scientia</h1>
              <p className="text-lg text-muted-foreground">
                A research assistant that helps you explore your sources and ask
                better questions - grounded in your artifacts, with the ability to
                incorporate world knowledge when your question needs outside
                context.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {proofChips.map((chip) => (
                <Badge key={chip} variant="secondary">
                  {chip}
                </Badge>
              ))}
            </div>
          </Stack>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <Card className="soft-border surface">
              <CardContent className="space-y-6 p-6">
                <h2 className="text-2xl font-semibold">
                  What Scientia helps you do
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    Ask questions across your sources and get answers with
                    citations and retrieval traces.
                  </li>
                  <li>
                    Blend your materials with world knowledge when needed -
                    without losing clarity about what came from where.
                  </li>
                  <li>
                    Run A/B tests across retrieval strategies and answer styles
                    to learn what works for your use case.
                  </li>
                  <li>
                    Use advanced exploration modes like Graph RAG to build
                    deeper, connected understanding of complex domains.
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="soft-border surface">
              <CardContent className="space-y-6 p-6">
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold">Who it&apos;s for</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>
                      People doing serious learning, research, or knowledge work
                      who want traceable answers - not just confident text.
                    </li>
                    <li>
                      Builders validating knowledge systems before shipping
                      them.
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold">
                    How it stays grounded
                  </h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>
                      Clear citations and retrieval traces are shown alongside
                      answers.
                    </li>
                    <li>
                      Evaluation modes make it easy to see what strategy worked
                      best.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="soft-border surface">
            <CardContent className="flex flex-col items-start justify-between gap-6 p-6 md:flex-row md:items-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">Open Scientia</h2>
                <p className="text-muted-foreground">
                  The app is in progress. For now, review how the knowledge
                  model is designed.
                </p>
              </div>
              <Button asChild size="lg">
                <Link href="#">Open Scientia</Link>
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </>
  )
}
